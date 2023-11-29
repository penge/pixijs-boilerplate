const { Application, Sprite, Texture } = PIXI

const app = new Application<HTMLCanvasElement>({
  width: 1024,
  height: 768
})
document.body.appendChild(app.view)

const sprite = Sprite.from(Texture.WHITE)
sprite.tint = 0xff0000

app.stage.addChild(sprite)

const direction = [1, 1]
const speed = 10

app.ticker.add(delta => {
  sprite.x += direction[0] * speed * delta
  sprite.y += direction[1] * speed * delta
  if (sprite.x < 0 || sprite.x > app.screen.width - sprite.width) {
    direction[0] *= -1
  }
  if (sprite.y < 0 || sprite.y > app.screen.height - sprite.height) {
    direction[1] *= -1
  }
})
