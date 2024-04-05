const CircleShape = {
    draw: (ctx, point, prevPoint, color) => {
      const radius = 10;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  };
  
  export default CircleShape;
  