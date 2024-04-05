const SquareShape = {
    draw: (ctx, point, prevPoint, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(point.x - 10, point.y - 10, 20, 20); // Draw square centered at point
    }
  };
  
  export default SquareShape;
  