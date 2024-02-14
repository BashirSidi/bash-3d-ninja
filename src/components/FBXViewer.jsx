/* eslint-disable react/no-unknown-property */
import ReactThreeFbxViewer from 'react-three-fbx-for-pyt';

function FBXViewer() {
  const fileUrl = 'asd.fbx';

  const onLoad =(e) => {
    console.log(e);
  }

  const onError =(e) => {
    console.log(e);
  }
 
  let cameraPosition = {
    x:150,
    y:300,
    z:350
  }

  return (
    <div>
      <ReactThreeFbxViewer
				alpha
				enablePan
				width={1000} disableZoom
				height={500} disableRotate
				cameraPosition={cameraPosition} 
        url={fileUrl} 
        onLoading={onLoad} 
        onError={onError}/>
    </div>
  );
}

export default FBXViewer;
