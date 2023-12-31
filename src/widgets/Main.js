import React, {useRef} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Card from './Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Main() {
  
  function importAll(r) {
    return r.keys().map(r);
  }

  const swiper = importAll(require.context('../resources/swiper', false, /\.(png|jpe?g)$/));
  const events = [
    "The new year will bring another 🎉🎉latin party and this time will be in the center of Esbjerg 🤩🤩...20/01/24 :save the date to not miss it and keep the eyes on the group to stay updated.",
    "🌟11th December from 19:10 to 22:10 will be the last Monday classes for this year💃🕺🫶 don't miss it !!!\nYou never attend a bachata class ??? \nDon't worry about it and don't hesitate to join  us at the lesson for beginners from 19:10 to 20:10\nThere is no reason to wait until January 🙂\nThen we will have a  jule afslutning (Xmas event ) on Friday 15/12/23🧑‍🎄☃️❄️...more info will follow.\nFrom Monday 11th will be open for membership subscription for 2024. \nYou will find the document to fill out for the registration at the school or fell free to contact me for more info.",
    "Every Monday bachata classes with Martin Barroso\n19-00 to 20:00 beginners 20:00 to 21:00 level 1 21:00 to 22:00 level 2 join us 💃🇩🇴🕺 Join us and get fun on the dance floor💃🕺"
  ];
  const updates = [
    "You can already get a membership for 2024🤩🤩🤩and dance at Sigue Bailando every Monday and some Fridays.\nFill out the form below or under the Files section and send it via email to : siguebailandobachata@gmail.com\nFrom January you can also find the registration form in person at our bachata classes, if you prefer.\n📢To pay the membership fee, please contact Katiuscia Rado.\n🫶We really appreciate all the help and support we have gotten over tha past year and hope to receive just as much in the future. Together we can build a great Bachata school in Esbjerg.\nWe wish you all a Merry Christmas and a Happy New Year.",
    "Hjertelig tak for en dejlig juleafslutning ved Sigue Bailando, og tak til alle der havde medbragt kager😋God stemning sammen med glade mennesker 🫶\nVi vil ønske jer en  god Jul og et godt nytår.\nVi ses igen den 8. januar💃🕺",
    "Juleafslutning con Sigue Bailando 🫶🧑‍🎄 Gracias Martin Barroso❄️❄️❄️y feliz Navidad a todos",
    "The classes will start again on January 8th and  it is already possible to sign up on Sigue Bailando Bachata and Latin Dance Esbjerg for the new season"
  ];
  
  return (
    <div className='bg-gray-200'>

      <div>
        <div style={{ position: 'relative' }}>
          <video autoPlay muted loop src={require('../resources/video.mp4')} type="video/mp4" className='blur-sm w-full'/>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-200 text-3xl font-bold font-serif'>
            Velkommen til Sigue Bailando Bachata and Latin Dance Esbjerg
          </div>
        </div>
      </div>

      <div className='m-5'>
        <Container>
          <Swiper/>

          <Swiper
            rewind={true}
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={30}
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {swiper.map((image, index) => (
              <SwiperSlide key={index}>
                <Image src={image} rounded fluid />
              </SwiperSlide>
            ))}
            {swiper.map((image, index) => (
              <SwiperSlide key={index}>
                <Image src={image} rounded fluid />
              </SwiperSlide>
            ))}
          </Swiper>

        </Container>

        <div className='inline-flex'>
          <div className='w-1/2 h-full my-16 mr-7 p-2'>
            <p className='font-bold font-serif text-center text-4xl my-4'>Upcoming events</p><hr/>
            {events.map((event) => (
              <>
                <p className='my-4 p-4 font-medium text-lg text-center bg-white border-gray-500 shadow-lg'>{event}</p>
                <hr/>
              </>
            ))}
          </div>
          <div className='w-1/2 h-full my-16 mr-7 p-2'>
            <p className='font-bold font-serif text-center text-4xl my-4'>Updates</p><hr/>
            {updates.map((update) => (
              <>
                <p className='my-4 p-4 font-medium text-lg text-center bg-white border-gray-500 shadow-lg'>{update}</p>
                <hr/>
              </>
            ))}
          </div>
        </div>

        <div className='mx-32 bg-white p-4' style={{height:'700px'}}>
          <p className='font-bold font-serif text-center text-4xl my-4'>Find us here</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.69421728696!2d8.448413012034774!3d55.467997213779505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212ae6267227%3A0x4d7f10ce0262718e!2sDanmarksgade%20Skole!5e0!3m2!1sen!2sch!4v1702999068134!5m2!1sen!2sch" width="100%" height="565px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        
      </div>
    </div>
  );
}

export default Main;
