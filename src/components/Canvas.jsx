import React from 'react'
import useCanvas from './useCanvas.jsx'


const Canvas = (props) => {
  const {draw} = props
  const canvasRef = useCanvas(draw)
  
  return <canvas ref={canvasRef} id="canvas"/>
}

export default Canvas