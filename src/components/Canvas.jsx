import React from 'react'
import useCanvas from './useCanvas.jsx'


const Canvas = (props) => {
  const {draw} = props
  const canvasRef = useCanvas(draw)
  
  return <canvas ref={canvasRef} id="canvas" width={window.innerWidth/5*4} height={window.innerHeight}/>
}

export default Canvas