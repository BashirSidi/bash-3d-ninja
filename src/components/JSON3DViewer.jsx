import {JSONModel} from 'react-3d-viewer'


const JSON3DViewer = () => {
  return(
    <div>
      <JSONModel
        alpha
        enablePan 
        width="800" 
        src="kapool.js" 
      />
    </div>
  )
}

export default JSON3DViewer