import { useState } from 'react'
import { StlViewer } from 'react-stl-file-viewer'

const ThreeMFViewer = () => {
  const [volume, setvolume] = useState(0)
  return (
    <>
      <StlViewer
        width={500}
        height={500}
        url='box.3mf'
        groundColor='rgb(255, 255, 255)'
        objectColor='rgb(50, 255, 255)'
        skyboxColor='rgb(255, 255, 255)'
        gridLineColor='rgb(0, 0, 0)'
        lightColor='rgb(255, 255, 255)'
        volume={setvolume}
      />
    </>
  )
}

export default ThreeMFViewer