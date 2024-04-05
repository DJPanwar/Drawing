const RectangleShape = {
    draw: (ctx, point, prevPoint, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(point.x - 15, point.y - 10, 30, 20); // Draw rectangle centered at point
    }
  };
  
  export default RectangleShape;
  