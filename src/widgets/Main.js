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
    // "You can already get a membership for 2024🤩🤩🤩and dance at Sigue Bailando every Monday and some Fridays.\nFill out the form below or under the Files section and send it via email to : siguebailandobachata@gmail.com\nFrom January you can also find the registration form in person at our bachata classes, if you prefer.\n📢To pay the membership fee, please contact Katiuscia Rado.\n🫶We really appreciate all the help and support we have gotten over tha past year and hope to receive just as much in the future. Together we can build a great Bachata school in Esbjerg.\nWe wish you all a Merry Christmas and a Happy New Year.",
    // "Hjertelig tak for en dejlig juleafslutning ved Sigue Bailando, og tak til alle der havde medbragt kager😋God stemning sammen med glade mennesker 🫶\nVi vil ønske jer en  god Jul og et godt nytår.\nVi ses igen den 8. januar💃🕺",
    // "Juleafslutning con Sigue Bailando 🫶🧑‍🎄 Gracias Martin Barroso❄️❄️❄️y feliz Navidad a todos",
    // "The classes will start again on January 8th and  it is already possible to sign up on Sigue Bailando Bachata and Latin Dance Esbjerg for the new season"
  ];
  
  return (
    <div className='bg-gray-200'>

      <div>
        <div style={{ position: 'relative' }}>
          <video autoPlay muted loop src={require('../resources/video.mp4')} type="video/mp4" className='blur-sm w-full'/>
          <div className='absolute inline-flex items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-200 text-3xl font-bold font-serif max-w-3/4'>
        
            Experience the joy of dancing Bachata with Sigue Bailando and Latin Dance in Esbjerg.<br/>
            Visit our Facebook group here<br/><br/>

            Bachata sessions every week<br/>
            Mondays from 19:00 to 22:00<br/>
            Some Fridays from 19:00 to 21:00<br/>
            Danmarksgade 53, 6700 Esbjerg, <br/>on the ground floor

            <a className='bg-white block rounded-full p-[1px] max-w-[70px]' href='https://www.facebook.com/groups/651480019849154/' target="_blank" rel="noopener noreferrer">
              <Image className='mr-auto' src={require('../resources/fb_white.png')} rounded fluid style={{ width: '100%' }} />
            </a>
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

        <div className='m-14 text-xl flex text-center font-serif'>
          Bachata, originating from the Dominican Republic, is more than just a dance; it's a sensation that grips you in its soulful rhythms and catchy beats. This dance style isn't about intricate steps; it's about connecting with the music's flow, embracing its Latin soul, and expressing yourself. Bachata is popular worldwide, with events taking place across Denmark and around the globe. Join us every Monday in Esbjerg to immerse yourself in the rhythmic world of Bachata. Whether dancing solo or with a partner, experience the pure joy of dance in our welcoming environment, with easy-to-learn steps and captivating tunes.
        </div>
        
        <div className='grid grid-flow-col col-span-2 space-x-16 mx-14 font-serif'>

          <div className='my-4 p-4 font-medium text-lg shadow-lg'>
            <span className='font-bold'>Open Entry:</span><br/>
            All are welcome, whether you come alone or with a partner, from first-timers to seasoned dancers. Our instructors will guide you to the class that aligns with your skills and aspirations.<br/>
            We organize parties in Esbjerg where you will have the opportunity to dance :
            Bachata, Dominican Bachata, Cuban Salsa, Kizomba, Reggaeton, Merengue, Cha Cha, and other Latin Dances.
            Occasionally, on Fridays, we host free events for our members, such as a social dance and practice session, Bachata for beginners with Kati, and a Bachata class with Martin. Details will be posted in this group. Stay updated!
          </div>

          <div className='my-4 p-4 font-medium text-lg shadow-lg'>
            <span className='font-bold'>Prices and Memberships:</span><br/>
            <span className='underline'>Price for Monday Bachata classes:</span><br/>
            40 kr for 1 hour<br/>
            75 k for 2 or 3 hours for members (85 kr for non-members)<br/>
            <span className='underline'>Other Memberships</span><br/>
            The annual membership fee is 200 kr, starting in every January.<br/>
            A periodic membership is also available at a cost of 100 kr.<br/>
          </div>          
            
            
        </div>
        
        <div className='flex my-4 p-4 font-medium text-lg shadow-lg mx-14 font-serif'>
          <div>
            <span className='font-bold'>Classes with Martin & Kati</span><br/>
            <span className='underline'>When?</span><br/>
            Drop-in Bachata every Monday<br/>
            19:00-20:00 Beginners: Master the basics and find your rhythm.<br/>
            20:00-21:00 Improvers Level 1: Spice up your dance with new moves.<br/>
            21:00-22:00 Improvers Level 2: Refine and elevate your Bachata style<br/>
            <span className='underline'>Where?</span><br/>
            Danmarksgade 53, 6700 Esbjerg<br/>
            Danmarksgade School, on the ground floor
          </div>
          <iframe src="https://www.facebook.com/plugins/group.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F651480019849154&width=280&show_metadata=false&appId=902649638051626&height=70" width="280" height="250" className='ml-72' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>

        <p className='font-bold font-serif text-center text-4xl my-4 pt-20'>Meet our Instructors</p><hr/>

        <div className='mt-20 mx-5 flex max-w-[800px]'>
          <Image src={require('../resources/martin_barosso.jpg')} fluid className='h-96 rounded-3xl shadow-lg' />
          <div className='mx-14'>
            <p className='font-serif text-4xl font-bold'>Martin</p>
            <p className='font-serif text-2xl font-bold my-2'>Dance Instructor</p>
            <p className=''>Coming from Argentina with a culture where dancing in couples to Latin rhythms is deeply ingrained, Martin brings an authentic flair to his teaching, making his classes a truly unique experience. His eagerness to share his passion makes his classes an engaging and inspiring experience for his students. Join Martin's Bachata class and let him guide you on an unforgettable journey into the heart of this vibrant dance form, while fostering connections with fellow dance enthusiasts along the way.</p>
          </div>
        </div>

        <div className='mt-10 mx-5 flex max-w-[800px] float-right'>
          <div className='mx-14'>
            <p className='font-serif text-4xl font-bold'>Katiuscia</p>
            <p className='font-serif text-2xl font-bold my-2'>Dance Instructor / Chairman</p>
            <p className=''>Originally from Italy, where the Latin music sets the rhythm for every dance night, she has always harbored a deep passion for dancing. In 2016, she discovered her interest in Cuban Salsa and Dominican Bachata while in Denmark. Since that moment, she has never ceased to dance. By 2022, she redirected her focus toward Bachata Sensual, culminating in the inauguration of the first Bachata school in Esbjerg. Her mission is to instill a deeper connection to the art of dance, fostering an appreciation for the emotional and expressive facets of movement, beyond the mere acquisition of standard figures. She brings good vibes to every lesson.</p>
          </div>
          <Image src={require('../resources/katiuscia_rado.jpg')} fluid className='h-96 rounded-3xl shadow-lg' />
        </div>

        <div className='inline-flex'>
          <div className='ml-14 w-full'>
            <div className='h-full my-16 mr-7 p-2'>
              <p className='font-bold font-serif text-center text-4xl my-4'>Upcoming events</p><hr/>
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61557256020103&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=902649638051626" width="340" height="500" className='mt-4' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </div>

          <div className='flex float-right'>
            <div className='my-16 mr-14 p-2 ml-32'>
              <p className='font-bold font-serif text-center text-4xl my-4'>Find us here</p><hr/>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.694063188233!2d8.4505979!3d55.467999899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b21947a785d6f%3A0x92c32164ab964820!2sEsbjerg%20Bachata%20and%20Latin%20Dance!5e0!3m2!1sen!2suk!4v1710087550056!5m2!1sen!2suk" width="800" height="500" className='border-0 mt-4' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

        </div>
        
        
      </div>


    </div>
  );
}

export default Main;