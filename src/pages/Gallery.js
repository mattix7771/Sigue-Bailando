import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from '../widgets/Navbar';
import BottomBar from '../widgets/BottomBar';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


function Gallery() {

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../resources/media', false, /\.(png|jpe?g)$/));
  const videos = importAll(require.context('../resources/media', false, /\.mp4$/));
  
  return (
    <div className='flex flex-col'>
      <Navbar opacity={1}/>

      <div className='flex flex-wrap mt-24 mx-4 mb-4'>
        <Masonry columnsCount={2} gutter={3}>
          {images.map((image, index) => (
            <div key={index}>
                <img src={image} style={{width:'1170px'}}/>
            </div>
          ))}
          {videos.map((video, index) => (
            <div key={index}>
                <video controls width='1170'>
                  <source src={video} type="video/mp4" ></source>
                </video>
            </div>
          ))}
          
        </Masonry>
      </div>
      <BottomBar />
    </div>
  );
}

export default Gallery;
