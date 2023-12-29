import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from '../widgets/Navbar';
import BottomBar from '../widgets/BottomBar';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

function Gallery() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr 1fr', gridTemplateRows:'1fr 1fr 1fr 1fr'}}>

        
        <Card border='info' className='m-2 p-2 w-max h-max'>
          <iframe src="https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2Fkatiuscia.rado%2Fvideos%2F547544007342464%2F%3Fidorvanity%3D651480019849154&show_text=false&width=560&t=0" width="430" height="308" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </Card>
        <Card border='info' className='m-2 p-2 w-max h-max'>
          <iframe src="https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2Fkatiuscia.rado%2Fvideos%2F547544007342464%2F%3Fidorvanity%3D651480019849154&show_text=false&width=560&t=0" width="430" height="308" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </Card>
        <Card border='info' className='m-2 p-2 w-max h-max'>
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkatiuscia.rado%2Fvideos%2F747069483279006%2F%3Fidorvanity%3D651480019849154&show_text=false&width=560&t=0" width="430" height="314" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </Card>
        <Card border='info' className='m-2 p-2 w-full h-max'>
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkatiuscia.rado%2Fvideos%2F808250447310291%2F%3Fidorvanity%3D651480019849154&show_text=false&width=560&t=0" width="530" height="314" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </Card>
        <Card border='info' className='m-2 p-2 w-full h-max'>
          <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fkatiuscia.rado%2Fvideos%2F1334048347389043%2F%3Fidorvanity%3D651480019849154&show_text=false&width=267&t=0" width="367" height="476" style={{border:'none', overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
        </Card>
      </div>


        <Card border='info' className='m-2 p-2'>
          <video controls>
            <source src={require("../resources/video1.mp4")} type="video/mp4"></source>
          </video>
        </Card>
        <Card border='info' className='m-2 p-2'>
          <video controls>
            <source src={require("../resources/video2.mp4")} type="video/mp4"></source>
          </video>
        </Card>
      <BottomBar />
    </div>
  );
}

export default Gallery;
