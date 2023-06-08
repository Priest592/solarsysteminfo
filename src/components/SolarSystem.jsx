import React from 'react'
import Canvas from './Canvas'

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
      ctx.scale(zoom, zoom)
      ctx.translate(x, y)
      ctx.beginPath()
      ctx.arc(0, 0, this.range, 0, Math.PI * 2)
      ctx.strokeStyle = linecolor
      ctx.lineWidth = linewidth
      ctx.stroke()
      ctx.closePath()
      ctx.rotate(frameCount*this.velocity)
      ctx.beginPath()
      ctx.arc(0, this.range, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = this.color
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
      ctx.scale(zoom, zoom)
      ctx.translate(x, y)
      ctx.rotate(frameCount*this.planetVelocity)
      ctx.translate(0, this.planetRange)
      ctx.beginPath()
      ctx.arc(0, 0, this.range, 0, Math.PI * 2)
      ctx.strokeStyle = linecolor
      ctx.lineWidth = linewidth
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
    constructor(innerRange, outerRange, vector, angle) {
      angle = Math.random() * (Math.PI*2)
      vector = [Math.cos(angle), Math.sin(angle)]
      this.x = vector[0] *= innerRange + (Math.random()*outerRange)
      this.y = vector[1] *= innerRange + (Math.random()*outerRange)
      this.radius = Math.random() * 0.5
    }
    draw(ctx, frameCount) {
      ctx.rotate(frameCount*0.1)
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = '#606060'
      ctx.fill()
      ctx.closePath()
    }
  }
  class Star {
    constructor(vector, angle) {
      angle = Math.random() * (Math.PI*2)
      vector = [Math.cos(angle), Math.sin(angle)]
      this.x = vector[0] *= 0 + (Math.random()*2000)
      this.y = vector[1] *= 0 + (Math.random()*2000)
      this.radius = Math.random() * 0.25
    }
    draw(ctx) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = "white"
      ctx.fill()
      ctx.closePath()
    }
  }

  let sun = new Sun(30, '#ffae42', 75, '#ff8b3d')
  let mercury = new Planet(0.004787, 50, 1.125, '#747b81')
  let venus = new Planet(0.003502, 70, 1.875, '#ff8c00')
  let earth = new Planet(0.002978, 90, 2, '#0492c2')
  let moon = new Moon(0.002978, 5, 0.75, 'grey', 90, 0.02,)
  let mars = new Planet(0.0027077, 110, 1.5, '#a02916')
  let phobos = new Moon(0.0027077, 4, 0.375, 'grey', 110, 0.02)
  let deimos = new Moon(0.0027077, 6, 0.375, 'grey', 110, 0.025)
  let jupiter = new Planet(0.001607, 180, 7.5, '#c88b3a')
  let ganymede = new Moon(0.001607, 10.5, 0.875, '#a08679', 180, 0.0025)
  let io = new Moon(0.001607, 13.5, 0.5, '#fdee87', 180, 0.01)
  let europa = new Moon(0.001607, 16.5, 0.45, '#f2eaaf', 180, 0.005)
  let callisto = new Moon(0.001607, 19.5, 0.75, '#404040', 180, 0.001)
  let saturn = new Planet(0.001269, 220, 5, '#ec9706', 8, '#964800', 3)
  let dione = new Moon(0.001269, 12, 0.45, '#92856f', 220, 0.0125)
  let tethys = new Moon(0.001269, 15, 0.45, '#e2e5de', 220, 0.01)
  let rhea = new Moon(0.001269, 18, 0.5, 'grey', 220, 0.0075)
  let titan = new Moon(0.001269, 21, 0.825, '#eebc27', 220, 0.002)
  let lapetus = new Moon(0.001269, 24, 0.5, '#d3d3d3', 220, 0.00075)
  let uranus = new Planet(0.000981, 260, 4.5, '#52c8db', 7, '#003152', 0.75)
  let ariel = new Moon(0.000981, 10, 0.45, '#909090', 260, 0.02)
  let umbriel = new Moon(0.000981, 13, 0.45, '#7b7b7b', 260, 0.015)
  let titania = new Moon(0.000981, 16, 0.5, '#686867', 260, 0.005)
  let oberon = new Moon(0.000981, 19, 0.5, '#3f3f3f', 260, 0.004)
  let neptune = new Planet(0.000843, 300, 4, '#1d4f78')
  let nereid = new Moon(0.000843, 7, 0.425, 'grey', 300, 0.0005)
  let proteus = new Moon(0.000843, 10, 0.425, 'grey', 300, 0.02)
  let triton = new Moon(0.000843, 13, 0.625, '#847d7f', 300, 0.01)
  let stars
  let asteroids
  let kuiperAsteroids
  const addStars = () => {
    stars = []
    for (let i = 0; i < 800; i++) {
      stars.push(new Star())
    }
  }
  const addAsteroids = () => {
    asteroids = []
    for (let i = 0; i < 500; i++) {
      asteroids.push(new Asteroid(130, 30))
    }
  }
  const addKuiperAsteroids = () => {
    kuiperAsteroids = []
    for (let i = 0; i < 1000; i++) {
      kuiperAsteroids.push(new Asteroid(320, 60))
    }
  }
  addStars()
  addAsteroids()
  addKuiperAsteroids()

  let zoom = 1
  let x = 0*zoom
  let y = 0*zoom

  const linewidth = 0.2
  const linecolor = "#40404080"

  const draw = (ctx, frameCount) => {
    ctx.canvas.width = window.innerWidth/4*3
    ctx.canvas.height = window.innerHeight
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.save()
    ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2)
    ctx.scale(zoom, zoom)
    ctx.translate(x, y)
    
    ctx.canvas.addEventListener('wheel', scroll)

    function scroll (e) {
      zoom += e.deltaY * -0.000005
      console.log(zoom)
      zoom = Math.min(Math.max(0.5, zoom), 5);
    }

    const size=4000;
    ctx.beginPath();
    const n=20;
    for(let i=0;i<n;i++){
      const a=i/n*Math.PI*2;
      ctx.moveTo(0,0);
      ctx.lineTo(Math.cos(a)*size,Math.sin(a)*size);
    }
    ctx.strokeStyle=linecolor;
    ctx.lineWidth=linewidth;
    ctx.stroke();
    ctx.closePath();
    
    ctx.rotate(frameCount*-0.0001)
    stars.forEach(star => {star.draw(ctx)})
    ctx.rotate(frameCount*0.0004)
    asteroids.forEach(asteroid => {asteroid.draw(ctx)})
    ctx.rotate(frameCount*-0.0002)
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
    nereid.draw(ctx, frameCount)
    proteus.draw(ctx, frameCount)
    triton.draw(ctx, frameCount)
    ctx.restore()
  }

	return <Canvas draw={draw}/>
}

export default SolarSystem;