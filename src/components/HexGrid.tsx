import { useEffect, useRef } from "react";

const HEX_SIZE = 28;
const GAP = 3;
const GLOW_RADIUS = 130;
const FADE_SPEED = 0.025;

export default function HexGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const canvas: HTMLCanvasElement = canvasEl;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx: CanvasRenderingContext2D = context;

    const mouse = { x: -999, y: -999 };
    let animId: number;

    type Cell = { x: number; y: number; brightness: number };
    let cells: Cell[] = [];

    function hexCorner(cx: number, cy: number, i: number) {
      const angle = (Math.PI / 180) * (60 * i - 30);
      return { x: cx + HEX_SIZE * Math.cos(angle), y: cy + HEX_SIZE * Math.sin(angle) };
    }

    function buildGrid() {
      cells = [];
      const colStep = Math.sqrt(3) * HEX_SIZE + GAP;
      const rowStep = HEX_SIZE * 1.5 + GAP;
      const cols = Math.ceil(canvas.width / colStep) + 2;
      const rows = Math.ceil(canvas.height / rowStep) + 2;

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const offset = row % 2 === 0 ? 0 : colStep / 2;
          cells.push({ x: col * colStep + offset, y: row * rowStep, brightness: 0 });
        }
      }
    }

    function drawHex(cx: number, cy: number, brightness: number) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const { x, y } = hexCorner(cx, cy, i);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();

      if (brightness > 0.01) {
        ctx.fillStyle = `rgba(173,134,54,${brightness * 0.14})`;
        ctx.fill();
      }

      ctx.strokeStyle = `rgba(173,134,54,${0.05 + brightness * 0.5})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const cell of cells) {
        const dx = cell.x - mouse.x;
        const dy = cell.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < GLOW_RADIUS) {
          const target = 1 - dist / GLOW_RADIUS;
          if (target > cell.brightness) cell.brightness = target;
        }

        cell.brightness = Math.max(0, cell.brightness - FADE_SPEED);
        drawHex(cell.x, cell.y, cell.brightness);
      }

      animId = requestAnimationFrame(animate);
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildGrid();
    }

    function onMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[1]" />;
}
