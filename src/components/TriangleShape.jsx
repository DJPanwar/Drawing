const TriangleShape = {
    draw: (ctx, point, prevPoint, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(point.x, point.y - 10);
      ctx.lineTo(point.x + 10, point.y + 10);
      ctx.lineTo(point.x - 10, point.y + 10);
      ctx.closePath();
      ctx.fill();
    }
  };
  
  export default TriangleShape;
  