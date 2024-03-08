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
    "Experience the joy of dancing Bachata with  Sigue Bailando and Latin Dance in Esbjerg. Bachata, originating from the Dominican Republic, is more than just a dance; it's a sensation that grips you in its soulful rhythms and catchy beats. This dance style isn't about intricate steps; it's about connecting with the music's flow, embracing its Latin soul, and expressing yourself. Bachata is popular worldwide, with events taking place across Denmark and around the globe. Join us every Monday in Esbjerg to immerse yourself in the rhythmic world of Bachata. Whether dancing solo or with a partner, experience the pure joy of dance in our welcoming environment, with easy-to-learn steps and captivating tunes.",
    "Classes with Martin & Kati at Danmarksgade School, on the ground floor. Danmarksgade 53, 6700 Esbjerg Drop-in Bachata every Monday 19:00-20:00 Beginners: Master the basics and find your rhythm. 20:00-21:00 Improvers Level 1: Spice up your dance with new moves. 21:00-22:00 Improvers Level 2: Refine and elevate your Bachata style.",
    "Open Entry: All are welcome, whether you come alone or with a partner, from first-timers to seasoned dancers. Our instructors will guide you to the class that aligns with your skills and aspirations. Price for Monday Bachata classes: 40 kr for 1 hour 75 k for 2 or 3 hours for members( 85 kr for no-members) The membership fee is 200 kr, payable annually starting from January. A periodic membership is also available at a cost of 100 kr. We also organize parties in Esbjerg where you will have the opportunity to dance : Bachata ,Dominican Bachata ,Cuban Salsa , Kizomba, Reggaeton, Merengue, Cha Cha and other Latin Dances.",
    "Occasionally, on Fridays, we host free events for our members, such as a social dance and practice session, Bachata for beginners with Kati, and a Bachata class with Martin. Details will be posted in this group. Stay updated!",
    "Bachata classes with Martin & Kati   Danmarksgade School. Danmarksgade 53, 6700 Esbjerg  Monday:  19-00 to 20:00 beginners  20:00 to 21:00 level 1  21:00 to 22:00 level 2    Friday: (From time to time)  19:00-21:00   social dance and practice session"
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
        <div className='absolute inline-flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-200 text-3xl font-bold font-serif max-w-3/4'>
       
          Velkommen til Sigue Bailando Bachata and Latin Dance Esbjerg<br/>
          Besøg vores Facebook gruppe her

          <div className='bg-white block rounded-full p-[1px] max-w-[70px] '>
            <Image className='mr-auto' src={require('../resources/fb_white.png')} rounded fluid style={{ width: '100%' }} />
          </div>
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

        <div className='mt-20 mx-5 flex max-w-[800px]'>
          <Image src={require('../resources/martin_barosso.jpg')} fluid className='h-96 rounded-3xl shadow-lg' />
          <div className='mx-14'>
            <p className='font-serif text-4xl font-bold'>Martin Barroso</p>
            <p className=''>Coming from Argentina with a culture where dancing in couples to Latin rhythms is deeply ingrained, Martin brings an authentic flair to his teaching, making his classes a truly unique experience. His eagerness to share his passion makes his classes an engaging and inspiring experience for his students. Join Martin's Bachata class and let him guide you on an unforgettable journey into the heart of this vibrant dance form, while fostering connections with fellow dance enthusiasts along the way.</p>
          </div>
        </div>

        <div className='mt-10 mx-5 flex max-w-[800px] float-right'>
          <div className='mx-14'>
            <p className='font-serif text-4xl font-bold'>Katiuscia Rado</p>
            <p className=''>Originally from Italy, where the Latin music sets the rhythm for every dance night, she has always harbored a deep passion for dancing. In 2016, she discovered her interest in Cuban Salsa and Dominican Bachata while in Denmark. Since that moment, she has never ceased to dance. By 2022, she redirected her focus toward Bachata Sensual, culminating in the inauguration of the first Bachata school in Esbjerg. Her emphasis is on teaching dance with the heart, encouraging individuals to truly feel and enjoy the music, beyond the mere acquisition of standard figures. Her mission is to instill a deeper connection to the art of dance, fostering an appreciation for the emotional and expressive facets of movement.</p>
          </div>
          <Image src={require('../resources/katiuscia_rado.jpg')} fluid className='h-96 rounded-3xl shadow-lg' />
        </div>

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