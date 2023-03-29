import React from 'react'
import Canvas from './canvassetup/Canvas'

const SolarSystem = () => {
	class Sun {
    constructor (radius, color, glow, GlowColor) {
      this.radius = radius
      this.color = color
      this.glow = glow
      this.GlowColor = GlowColor
    }
    draw(ctx) {
      ctx.beginPath()
      ctx.shadowBlur = this.glow
      ctx.shadowColor = this.GlowColor
      ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.closePath()
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0
      ctx.setTransform(1, 0, 0, 1, 0, 0)
    }
  }

  class Planet {
    constructor (velocity, range, radius, color, RingSize, RingColor, RingThickness) {
      this.velocity = velocity
      this.range = range
      this.radius = radius
      this.color = color
      this.RingSize = RingSize
      this.RingColor = RingColor
      this.RingThickness = RingThickness
    }
    draw(ctx, frameCount) {
      ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2)
      ctx.beginPath()
      ctx.arc(0, 0, this.range, 0, Math.PI * 2)
      ctx.strokeStyle = "#3e424b"
      ctx.lineWidth = 0.5
      ctx.stroke()
      ctx.closePath()
      ctx.rotate(frameCount*this.velocity)
      ctx.beginPath()
      ctx.arc(0, this.range, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.closePath()
      ctx.beginPath()
      ctx.arc(0, this.range, this.radius, 0, Math.PI * 1)
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
      ctx.fill()
      ctx.closePath()
      ctx.beginPath()
      ctx.arc(0, this.range, this.RingSize, 0, Math.PI * 2)
      ctx.strokeStyle = this.RingColor
      ctx.lineWidth = this.RingThickness
      ctx.stroke()
      ctx.closePath()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
    }
  }

  class Moon {
    constructor(planetVelocity, range, radius, color, planetRange, moonVelocity,) {
      this.planetVelocity = planetVelocity
      this.range = range
      this.radius = radius
      this.color = color
      this.planetRange = planetRange
      this.moonVelocity = moonVelocity
    }
    draw(ctx, frameCount) {
      ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2)
      ctx.rotate(frameCount*this.planetVelocity)
      ctx.translate(0, this.planetRange)
      ctx.beginPath()
      ctx.arc(0, 0, this.range, 0, Math.PI * 2)
      ctx.strokeStyle = "#3e424b"
      ctx.lineWidth = 0.5
      ctx.stroke()
      ctx.closePath()
      ctx.rotate(frameCount*this.moonVelocity)
      ctx.beginPath()
      ctx.arc(0, this.range, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.closePath()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
    }
  }

  class Asteroid {
    constructor(vector, angle) {
      angle = Math.random() * (Math.PI*2)
      vector = [Math.cos(angle), Math.sin(angle)]
      this.x = vector[0] *= 175 + (Math.random()*60)
      this.y = vector[1] *= 175 + (Math.random()*60)
      this.radius = Math.random() * 2
    }
    draw(ctx) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = '#464646'
      ctx.fill()
      ctx.closePath()
    }
  }

  class KuiperAsteroid {
    constructor(vector, angle) {
      angle = Math.random() * (Math.PI*2)
      vector = [Math.cos(angle), Math.sin(angle)]
      this.x = vector[0] *= 480 + (Math.random()*120)
      this.y = vector[1] *= 480 + (Math.random()*120)
      this.radius = Math.random() * 2
    }
    draw(ctx) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = '#464646'
      ctx.fill()
      ctx.closePath()
    }
  }

  class Star {
    constructor(vector, angle) {
      angle = Math.random() * (Math.PI*2)
      vector = [Math.cos(angle), Math.sin(angle)]
      this.x = vector[0] *= 0 + (Math.random()*4000)
      this.y = vector[1] *= 0 + (Math.random()*4000)
      this.radius = Math.random() * 1
    }
    draw(ctx) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = 'white'
      ctx.fill()
      ctx.closePath()
    }
  }

  let sun = new Sun(50, '#ffae42', 75, '#ff8b3d')
  let mercury = new Planet(0.004787, 75, 4.5, '#747b81')
  let venus = new Planet(0.003502, 100, 7.5, '#ff8c00')
  let earth = new Planet(0.002978, 125, 8, '#0492c2')
  let moon = new Moon(0.002978, 15, 3, 'grey', 125, 0.02,)
  let mars = new Planet(0.0027077, 150, 6, '#a02916')
  let phobos = new Moon(0.0027077, 10, 1.5, 'grey', 150, 0.02)
  let deimos = new Moon(0.0027077, 15, 1.5, 'grey', 150, 0.025)
  let jupiter = new Planet(0.001607, 260, 20, '#c88b3a')
  let ganymede = new Moon(0.001607, 26, 3.5, '#a08679', 260, 0.0025)
  let io = new Moon(0.001607, 31.5, 2, '#fdee87', 260, 0.01)
  let europa = new Moon(0.001607, 37, 1.8, '#f2eaaf', 260, 0.005)
  let callisto = new Moon(0.001607, 43, 3, '#404040', 260, 0.001)
  let saturn = new Planet(0.001269, 320, 15, '#ec9706', 24, '#964800', 10)
  let dione = new Moon(0.001269, 34, 1.8, '#92856f', 320, 0.0125)
  let tethys = new Moon(0.001269, 38.5, 1.8, '#e2e5de', 320, 0.01)
  let rhea = new Moon(0.001269, 43, 2, 'grey', 320, 0.0075)
  let titan = new Moon(0.001269, 49, 3.3, '#eebc27', 320, 0.002)
  let lapetus = new Moon(0.001269, 55, 2, '#d3d3d3', 320, 0.00075)
  let uranus = new Planet(0.000981, 380, 13, '#52c8db', 18.5, '#003152', 3)
  let ariel = new Moon(0.000981, 25, 1.8, '#909090', 380, 0.02)
  let umbriel = new Moon(0.000981, 30, 1.8, '#7b7b7b', 380, 0.015)
  let titania = new Moon(0.000981, 35, 2, '#686867', 380, 0.005)
  let oberon = new Moon(0.000981, 40, 2, '#3f3f3f', 380, 0.004)
  let neptune = new Planet(0.000843, 435, 11, '#1d4f78')
  let proteus = new Moon(0.000843, 15, 1.7, 'grey', 435, 0.02)
  let triton = new Moon(0.000843, 20, 2.5, '#847d7f', 435, 0.01)
  let nereid = new Moon(0.000843, 25, 1.7, 'grey', 435, 0.0005)
  let stars
  let asteroids
  let kuiperAsteroids
  const addStars = () => {
    stars = []
    for (let i = 0; i < 4000; i++) {
      stars.push(new Star())
    }
  }
  const addAsteroids = () => {
    asteroids = []
    for (let i = 0; i < 300; i++) {
      asteroids.push(new Asteroid())
    }
  }
  const addKuiperAsteroids = () => {
    kuiperAsteroids = []
    for (let i = 0; i < 1000; i++) {
      kuiperAsteroids.push(new KuiperAsteroid())
    }
  }
  addStars()
  addAsteroids()
  addKuiperAsteroids()

  const draw = (ctx, frameCount) => {
    ctx.canvas.width = window.innerWidth/4*3
    ctx.canvas.height = window.innerHeight
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.save()
    ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2)
    const size=4000;
    ctx.beginPath();
    const n=20;
    for(let i=0;i<n;i++){
      const a=i/n*Math.PI*2;
      ctx.moveTo(0,0);
      ctx.lineTo(Math.cos(a)*size,Math.sin(a)*size);
    }
    ctx.strokeStyle='white';
    ctx.lineWidth=0.075;
    ctx.stroke();
    ctx.closePath();
    ctx.rotate(frameCount*-0.000157)
    stars.forEach(star => {star.draw(ctx)})
    ctx.rotate(frameCount*0.001)
    asteroids.forEach(asteroid => {asteroid.draw(ctx)})
    ctx.rotate(frameCount*-0.0006)
    kuiperAsteroids.forEach(kuiperAsteroid => {kuiperAsteroid.draw(ctx)})
    sun.draw(ctx)
    mercury.draw(ctx, frameCount)
    venus.draw(ctx, frameCount)
    earth.draw(ctx, frameCount)
    moon.draw(ctx, frameCount)
    mars.draw(ctx, frameCount)
    phobos.draw(ctx, frameCount)
    deimos.draw(ctx, frameCount)
    jupiter.draw(ctx, frameCount)
    ganymede.draw(ctx, frameCount)
    io.draw(ctx, frameCount)
    europa.draw(ctx, frameCount)
    callisto.draw(ctx, frameCount)
    saturn.draw(ctx, frameCount)
    dione.draw(ctx, frameCount)
    tethys.draw(ctx, frameCount)
    rhea.draw(ctx, frameCount)
    titan.draw(ctx, frameCount)
    lapetus.draw(ctx, frameCount)
    uranus.draw(ctx, frameCount)
    ariel.draw(ctx, frameCount)
    umbriel.draw(ctx, frameCount)
    titania.draw(ctx, frameCount)
    oberon.draw(ctx, frameCount)
    neptune.draw(ctx, frameCount)
    proteus.draw(ctx, frameCount)
    triton.draw(ctx, frameCount)
    nereid.draw(ctx, frameCount)
    ctx.restore()
  }
	return <Canvas draw={draw}/>
}

export default SolarSystem;