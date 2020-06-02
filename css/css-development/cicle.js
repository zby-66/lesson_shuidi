registerPaint('circle', class {
  // canvas ctx
  static get inputProperties() {
    return ['--ciclr-color']
  }
  paint(ctx, _, properties) {
    console.log(ctx);
    const color = properties.get('--ciclr-color')
    // ctx.fillStyle = 'red';
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(200, 200, 20, 0, 2 * Math.PI, false);
    ctx.fill();
  }
})