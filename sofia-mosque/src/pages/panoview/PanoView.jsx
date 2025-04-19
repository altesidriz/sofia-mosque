import image1 from '../../assets/WEB-Foae.jpg';
import image2 from '../../assets/WEB-Pan-Balkon.jpg';

import { useEffect, useRef } from 'react';
import PanoramaViewer from '../../components/panorama/PanoramaViewer';


const PanoView = () => {
  return (
    <div style={{height: 'max-content', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>360° Virtual Tour</h1>
        <PanoramaViewer />
    </div>
);
};

export default PanoView;

