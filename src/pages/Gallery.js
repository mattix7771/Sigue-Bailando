import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from '../widgets/Navbar';
import BottomBar from '../widgets/BottomBar';
import Background from '../resources/flag stripes.png';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function Gallery() {

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../resources/media', false, /\.(png|jpe?g)$/));
  const videos = importAll(require.context('../resources/media', false, /\.mp4$/));
  
  return (
    <div className='flex flex-col'>
      <Navbar />

      <div className='flex flex-wrap m-5'>
        <Masonry columnsCount={4} gutter={50}>
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
          
          <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fkatiuscia.rado%2Fvideos%2F1334048347389043%2F%3Fidorvanity%3D651480019849154&show_text=false&width=267&t=0" width="100%" height="100%" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>

        </Masonry>
      </div>
      <BottomBar />
    </div>
  );
}

export default Gallery;
