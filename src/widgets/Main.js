import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ContactForm from './ContactForm';
import form from '../resources/documents/Membership application form.pdf'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import ReactGA from "react-ga4";

import VG_logo from '../resources/VG_logo.jpg';
import VG_logo_nobg from '../resources/VG_logo_nobg.png';
import big_logo from '../resources/logo5.png';
import videoSnapshot from '../resources/media/videoSnapshot.png';
import phoneBackgroundVideo3 from '../resources/media/phoneBackgroundVideo3.mp4';
import video from '../resources/video.mp4';
import fbJoin from '../resources/fbJoin.png';
import group from '../resources/media/group.jpg';
import warning from '../resources/warning.png';
import katiuscia from '../resources/katiuscia_rado.jpg';
import martin from '../resources/martin_barosso.jpg';

function Main() {

  // Check if full background video has loaded
  const [videoLoaded, setVideoLoaded] = useState(false);

  const test = "font-bold font-serif text-center text-2xl lg:text-4xl my-3 mt-4 sm:text-4xl "

  // Log site visit
  ReactGA.send({
    hitType: "pageview",
    page: "",
    title: "Home"
  })

  // Map r items
  function importAll(r) {
    return r.keys().map(r);
  }

  // Get all photos from swiper directory
  const swiper = importAll(require.context('../resources/swiper', false, /\.(png|jpe?g)$/));
  
  return (
    <div className='bg-gray-100'>

      {/* Video Section */}
      <div className='relative'>

        <img src={videoSnapshot} className='blur-sm w-full lg:block' hidden={!videoLoaded} />
        <video autoPlay muted loop src={phoneBackgroundVideo3} type="video/mp4" className='blur-sm w-full lg:hidden contrast-75' onLoad={() => setVideoLoaded(true)} hidden={videoLoaded}/>
        <video autoPlay muted loop src={video} type="video/mp4" className='blur-sm w-full hidden lg:block'/>
        <div className='absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-200
          w-4/5'>
      
          <div className='text-center font-Barlow text-slate-200'>

            <div className='font-semibold text-lg sm:text-4xl lg:text-3xl mb-3'>Experience the joy of dancing Bachata with </div>
            <div className='font-extrabold text-lg sm:text-3xl lg:text-3xl mb-20'>SIGUE BAILANDO AND LATIN DANCE IN ESBJERG</div>
  
            <div className='sm:text-2xl'>
              Bachata sessions every week<br/>
              Mondays from 19:00 to 22:00<br/>
              Some Fridays from 19:00 to 21:00<br/><br/>
              Address: <br/>
              Danmarksgade 53, 6700 Esbjerg, <br/>
              on the ground floor
            </div>

            <div className='mt-8 sm:text-2xl'>
              <a href='https://www.facebook.com/groups/651480019849154/' target="_blank" rel="noopener noreferrer">
                Join our Facebook group here
                <img className='border-2 w-32 bg-white rounded-full mx-auto mt-2' src={fbJoin}/>
              </a>
            </div>

          </div>

        </div>

      </div>


      {/* Swiper */}
      <Container className='my-3 sm:px-24 lg:px-96 xl:hidden 2xl:hidden'>
        
        <Swiper/>

        <Swiper
          rewind={true}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          initialSlide={1}
          pagination={{
            clickable: 'true',
            type: 'bullets',
          }}
          
          navigation={true}
          modules={[Navigation]}
        >
          {swiper.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image} rounded fluid className='sm:max-h-80' />
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>


      {/* Begin Body */}
      <div className='mx-[10%]'>

        <div className='my-4 p-3 2xl:hidden'><hr/></div>

        {/* First Section - Info and Registration */}
        <div className='2xl:flex'>

          <div className='text-center 2xl:hidden'>
            <div className='font-Barlow text-gray-500 mb-3 sm:text-xl'>
              To register to the society, complete the onboarding form and send it via email to siguebailandobachata@gmail.com
            </div>
            <a download href={form} className='flex w-[90%] translate-x-[5%] items-center justify-center text-white h-14 rounded-md bg-red-700 font-mono font-bold sm:text-xl'>
              REGISTER NOW
            </a>
          </div>

          <div className='my-4 p-3 2xl:hidden'><hr/></div>
          
          <div className='m-4 mx-5
            lg:m-14'>
              <div className='font-mono text-xl 2xl:text-7xl 2xl:[word-spacing:-20px] sm:text-3xl font-semibold text-red-500 mb-2'>WHAT IS BACHATA</div>

              <span className='font-Barlow text-gray-500 sm:text-xl'>
                Bachata, originating from the Dominican Republic, is more than just a dance; it's a sensation that grips you in its soulful rhythms and catchy beats. This dance style isn't about intricate steps; it's about connecting with the music's flow, embracing its Latin soul, and expressing yourself. Bachata is popular worldwide, with events taking place across Denmark and around the globe. Join us every Monday in Esbjerg to immerse yourself in the rhythmic world of Bachata. Whether dancing solo or with a partner, experience the pure joy of dance in our welcoming environment, with easy-to-learn steps and captivating tunes.
              </span>
          </div>

          <div className='hidden 2xl:block text-center  2xl:bg-blue-900 2xl:rounded-lg'>
            <div className='font-Barlow text-gray-500 2xl:text-white 2xl:p-7 mb-3 sm:text-xl'>
              To register to the society, complete the onboarding form and send it via email to siguebailandobachata@gmail.com
            </div>
            <a download href={form} className='flex w-[90%] translate-x-[5%] items-center justify-center text-white h-14 rounded-md bg-red-700 font-mono font-bold sm:text-xl'>
              REGISTER NOW
            </a>
          </div>

        </div>


        <div className='my-4 p-3'><hr/></div>

        
        {/* Second Section - Info and Prices */}
        <div className='bg-blue-950 pt-10 
          lg:grid lg:grid-flow-col lg:col-span-2 lg:space-x-16 lg:mx-14 lg:bg-gray-100 lg:text-red-500
          xl:bg-gray-100 xl:text-red-500
          2xl:bg-gray-100 2xl:text-red-500'>

          <div className='mx-4 flex justify-center lg:hidden xl:hidden 2xl:hidden'>
            <img className='rounded-md sm:w-[80%] ' src={group} />
          </div>

          <div className='p-4 text-sm lg:text-lg mx-2'>
            <div className='font-mono text-[24px] font-semibold mb-2 sm:text-4xl'>
              Open to all Adults
            </div>
            <span className='font-Barlow text-gray-300 sm:text-xl lg:text-gray-500 xl:text-gray-500 2xl:text-gray-500'>
              All are welcome, whether you come alone or with a partner, from first-timers to seasoned dancers. Our instructors will guide you to the class that aligns with your skills and aspirations.<br/>
              We organize parties in Esbjerg where you will have the opportunity to dance
              Bachata and other Latin Dances.
              Occasionally, on Fridays, we host free events for our members, such as a social dance and practice session. Details will be posted in our Facebook group. Go there to stay updated!
            </span>
          </div>

          <div className='my-4 text-white mx-4'><hr/></div>

          <div className='my-4 p-4 lg:text-lg sm:mx-10'>
            
            <div className='font-mono text-[18px] font-semibold text-gray-50 sm:text-3xl lg:text-red-500 xl:text-red-500 2xl:text-red-500'>Prices and Memberships</div>
            
            <div className='flex bg-red-300 items-center justify-between border-white border-3 p-2 my-3 rounded-md'>
              
              <div className='flex-shrink-0 sm'>
                <img className='w-14 sm:w-24' src={warning} alt="Warning" />
              </div>
              
              <div className='ml-4 text-left'>
                <span className='font-Barlow text-red-600 font-extrabold sm:text-2xl'>IMPORTANT!</span><br/>
                <span className='font-Barlow text-gray-500 font-bold sm:text-xl'>
                  The annual membership fee is 200 kr, starting on every January
                </span>
              </div>

            </div>

            
            <div className='font-mono text-[16px] font-semibold text-gray-50 mt-4 sm:text-2xl lg:text-red-500 xl:text-red-500 2xl:text-red-500'>Monday Bachata Class:</div>
            <span className='font-Barlow text-gray-500 text-sm sm:text-xl'>40 kr for 1 hour</span>
            
            <div className='font-mono text-[16px] font-semibold text-gray-50 mt-3 sm:text-2xl lg:text-red-500 xl:text-red-500 2xl:text-red-500'>All classes in 1 month: (must all be paid at once)</div>
            <span className='font-Barlow text-gray-500 text-sm sm:text-xl'>The monthly price varies depending on the number of lessons per month. This includes all 3 hours of classes every monday and will cost 70kr per session. <br/> (check our Facebook group for this month's price!)</span>
            
          </div>
            
            
        </div>

        <div className='my-4 px-4'><hr/></div>
        
        <div className='mt-4 p-4 font-medium text-sm 
          sm:mx-10
          lg:flex lg:text-lg lg:mx-14'>
          
          <div>
            <div className='font-mono text-[20px] font-semibold text-red-500 mb-3 sm:text-3xl'>Classes with Martin & Kati</div>
            <div className='font-mono text-[16px] font-semibold text-gray-700 underline mb-2 sm:text-2xl'>When?</div>
            <span className='font-Barlow text-gray-500 sm:text-xl'>
              Bachata classes every Monday<br/>
              19:00-20:00 Beginners: Master the basics and find your rhythm.<br/>
              20:00-21:00 Improvers Level 1: Spice up your dance with new moves.<br/>
              21:00-22:00 Improvers Level 2: Refine and elevate your Bachata style<br/>
            </span>
            <div className='font-mono text-[16px] font-semibold text-gray-700 underline mb-2 mt-3 sm:text-2xl'>Where?</div>
            <span className='font-Barlow text-gray-500 sm:text-xl'>
              Danmarksgade 53, 6700 Esbjerg<br/> 
              Danmarksgade School, on the ground floor
            </span>
          </div>

        </div>


        <div className='sm:mx-7'>
          <p className='font-bold font-serif text-center text-2xl my-4 pt-3
            sm:text-4xl
            lg:text-4xl'>
            Meet our Instructors
          </p>
          
          <div className='px-4'><hr/></div>
          
          <div className='2xl:flex'>
            <div className='my-4 mx-4 p-4 shadow-lg
              sm:mx-96
              lg:mx-14 lg:mt-20
              2xl:block 2xl:max-w-[45%]'>
              <p className='font-mono text-xl sm:text-2xl lg:text-4xl font-bold lg:mt-0'>Martín - Dance Instructor</p>
              <div className='mt-3 lg:mx-14'>
                <img src={martin} fluid className='h-44 rounded-3xl shadow-lg ml-5 mb-3 float-right -mt-12'/>
                <p className='font-Barlow text-gray-500 text-sm sm:text-xl lg:text-lg'>
                  Coming from Argentina with a culture where dancing in couples to Latin rhythms is deeply ingrained, Martin brings an authentic flair to his teaching, making his classes a truly unique experience. His eagerness to share his passion makes his classes an engaging and inspiring experience for his students. Join Martin's Bachata class and let him guide you on an unforgettable journey into the heart of this vibrant dance form, while fostering connections with fellow dance enthusiasts along the way.
                </p>
              </div>
            </div>

            <div className='my-4 mx-4 p-4 shadow-lg lg:mx-14 lg:mt-20 2xl:block 2xl:max-w-[45%]'>
              <p className='font-mono text-xl sm:text-2xl lg:text-4xl font-bold lg:mt-0'>Katiuscia - Dance Instructor & Chairman</p>
              <div className='mt-3 lg:mx-14'>
                <img src={katiuscia} fluid className='h-44 rounded-3xl shadow-lg ml-5 mb-3 float-right'/>
                <p className='font-Barlow text-gray-500 text-sm sm:text-xl lg:text-lg'>
                Originally from Italy, where the Latin music sets the rhythm for every dance night, she has always harbored a deep passion for dancing. In 2016, she discovered her interest in Cuban Salsa and Dominican Bachata while in Denmark. Since that moment, she has never ceased to dance. By 2022, she redirected her focus toward Bachata Sensual, culminating in the inauguration of the first Bachata school in Esbjerg. Her mission is to instill a deeper connection to the art of dance, fostering an appreciation for the emotional and expressive facets of movement, beyond the mere acquisition of standard figures. She brings good vibes to every lesson.
                </p>
              </div>
            </div>
          </div>

          
        </div>

        <div className='mx-3 lg:mx-14 h-full my-16 mr-7 p-2'>
          
          <p className='font-bold font-serif text-center text-2xl lg:text-4xl my-3'>Upcoming events</p>
          <div className='px-2'><hr/></div>

          {/* Socialble Kit integration */}
          <div className='bg-white p-3 mt-2 shadow-lg'>
            <iframe src='https://widgets.sociablekit.com/facebook-group-events/iframe/25466742' frameborder='10' width='100%' height='1500'></iframe>
          </div>
        </div>

        {/* Sponsors */}
        <div>
          <div className={test}>Sponsors</div>
          <div className='px-4 my-4'><hr/></div>
          <div className='grid grid-cols-2 gap-14 items-center m-4'> 
            <img src={VG_logo_nobg} className='w-full h-auto'></img>
            <img src={big_logo} className='w-full h-auto'></img>
          </div>
        </div>
        
        {/* Find Us and Contact */}
        <div className='2xl:flex xl:flex lg:flex'>

          <div className='lg:flex'> 
            <div className='lg:my-16 lg:mr-14 p-2'>
              
              <p className='font-bold font-serif text-center text-2xl lg:text-4xl my-3 mt-4 sm:text-4xl'>Find us here</p>
              <div className='px-4'><hr/></div>

              {/* Google map location */}
              <div className='mt-4 flex justify-center mx-3 shadow-lg'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.694063188233!2d8.4505979!3d55.467999899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b21947a785d6f%3A0x92c32164ab964820!2sEsbjerg%20Bachata%20and%20Latin%20Dance!5e0!3m2!1sen!2suk!4v1710087550056!5m2!1sen!2suk" width="100%" height="500" className=' lg:w-[700px] lg:h-[500px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            
            </div>
          </div>


          <div>
            <p className='font-bold font-serif text-center text-2xl mt-5 pt-3
              sm:text-4xl
              lg:text-4xl'>
              Send us a message
            </p>
            <div className='px-4 pt-5 pb-4'><hr/></div>
            <ContactForm />
          </div>
        
        </div>
          
        
      </div>


    </div>
  );
}

export default Main;