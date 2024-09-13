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
        <div className='relative'>
          <video autoPlay muted loop src={require('../resources/video.mp4')} type="video/mp4" className='blur-sm w-full hidden lg:block'/>
          <video autoPlay muted loop src={require('../resources/Sup/VIDEO-2024-09-12-00-27-19.mp4')} type="video/mp4" className='blur-sm w-full lg:hidden contrast-75'/>
          <div className='absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-200
            w-4/5'>
        
            <div className='text-center font-Barlow text-slate-200'>
              <div className='font-semibold text-lg lg:text-3xl mb-3'>Experience the joy of dancing Bachata with </div>
              <div className='font-extrabold text-lg lg:text-3xl mb-20'>SIGUE BAILANDO AND LATIN DANCE IN ESBJERG</div>
    
              <div>
                Address: <br/>
                Bachata sessions every week<br/>
                Mondays from 19:00 to 22:00<br/>
                Some Fridays from 19:00 to 21:00<br/>
                Danmarksgade 53, 6700 Esbjerg, <br/>
                on the ground floor
              </div>
              

              <div className='mt-8'>
                Join our Facebook group here
                <img className='w-32 bg-white rounded-full mx-auto mt-2' src={require('../resources/fbJoin.png')}/>
              </div>
            </div>




            {/* <div className='bg-white block rounded-full p-[1px] max-w-[70px]' href='https://www.facebook.com/groups/651480019849154/' target="_blank" rel="noopener noreferrer">
              <Image className='mr-auto' src={require('../resources/fb_white.png')} rounded fluid style={{ width: '100%' }} />
            </div> */}
          </div>
        </div>
      </div>



      
      <div className='items-center my-3'>
        <Container>
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
                <Image src={image} rounded fluid className='' />
              </SwiperSlide>
            ))}
          </Swiper>

        </Container>

        <div className='flex text-center font-serif m-4 my-5 text-sm
          lg:m-14 lg:text-xl'>
          Bachata, originating from the Dominican Republic, is more than just a dance; it's a sensation that grips you in its soulful rhythms and catchy beats. This dance style isn't about intricate steps; it's about connecting with the music's flow, embracing its Latin soul, and expressing yourself. Bachata is popular worldwide, with events taking place across Denmark and around the globe. Join us every Monday in Esbjerg to immerse yourself in the rhythmic world of Bachata. Whether dancing solo or with a partner, experience the pure joy of dance in our welcoming environment, with easy-to-learn steps and captivating tunes.
        </div>
        
        <div className='font-serif mx-4
          lg:grid lg:grid-flow-col lg:col-span-2 lg:space-x-16 lg:mx-14'>

          <div className='my-4 p-4 font-medium text-sm lg:text-lg shadow-lg'>
            <span className='font-bold'>Open to all Adults</span><br/>
            All are welcome, whether you come alone or with a partner, from first-timers to seasoned dancers. Our instructors will guide you to the class that aligns with your skills and aspirations.<br/>
            We organize parties in Esbjerg where you will have the opportunity to dance
            Bachata and other Latin Dances.
            Occasionally, on Fridays, we host free events for our members, such as a social dance and practice session. Details will be posted in our Facebook group. Go there to stay updated!
          </div>

          <div className='my-4 p-4 font-medium text-sm lg:text-lg shadow-lg'>
            <span className='font-bold'>Prices and Memberships:</span><br/>
            <p className='font-bold underline'>The annual membership fee is 200 kr, starting on every January</p><br/>
            <span className='font-bold'>Monday Bachata Class:</span><br/>
            40 kr for 1 hour<br/><br/>
            
            
            <p className='font-bold'>All classes in 1 month: (must all be paid at once)</p>The monthly price varies depending on the number of lessons per month. This includes all 3 hours of classes every monday and will cost 70kr per session. <br/> (check our Facebook group for this month's price!)<br/>
            
          </div>
            
            
        </div>
        
        <div className='lg:flex my-4 p-4 font-medium text-sm lg:text-lg shadow-lg mx-4 lg:mx-14 font-serif'>
          <div>
            <span className='font-bold'>Classes with Martin & Kati</span><br/>
            <span className='underline'>When?</span><br/>
            Bachata classes every Monday<br/>
            19:00-20:00 Beginners: Master the basics and find your rhythm.<br/>
            20:00-21:00 Improvers Level 1: Spice up your dance with new moves.<br/>
            21:00-22:00 Improvers Level 2: Refine and elevate your Bachata style<br/>
            <span className='underline'>Where?</span><br/>
            Danmarksgade 53, 6700 Esbjerg<br/>
            Danmarksgade School, on the ground floor
          </div>
          <div className='flex mt-3 lg:ml-96 justify-center'>
            <iframe src="https://www.facebook.com/plugins/group.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F651480019849154&width=280&show_metadata=false&appId=902649638051626&height=70" width="140" height="250" className='lg:w-[300px]' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>

        <p className='font-bold font-serif text-center text-2xl lg:text-4xl my-4 pt-20'>Meet our Instructors</p><hr/>

        <div className='lg:mt-20 mt-10 mx-5 lg:flex lg:max-w-[800px]'>
          <Image src={require('../resources/martin_barosso.jpg')} fluid className='h-96 rounded-3xl shadow-lg' />
          <div className='lg:mx-14'>
            <p className='font-serif text-xl lg:text-4xl font-bold mt-10 lg:mt-0'>Martin</p>
            <p className='font-serif text-lg lg:text-2xl font-bold my-2'>Dance Instructor</p>
            <p className='text-sm lg:text-lg'>Coming from Argentina with a culture where dancing in couples to Latin rhythms is deeply ingrained, Martin brings an authentic flair to his teaching, making his classes a truly unique experience. His eagerness to share his passion makes his classes an engaging and inspiring experience for his students. Join Martin's Bachata class and let him guide you on an unforgettable journey into the heart of this vibrant dance form, while fostering connections with fellow dance enthusiasts along the way.</p>
          </div>
        </div>

        <div className='lg:mt-20 mt-10 mx-5 lg:flex lg:max-w-[800px] lg:float-right'>
          <div className='lg:hidden'>
            <Image src={require('../resources/katiuscia_rado.jpg')} fluid className='rounded-3xl shadow-lg' />
          </div>
          <div className='lg:mx-14'>
            <p className='font-serif text-xl lg:text-4xl font-bold mt-10 lg:mt-0'>Katiuscia</p>
            <p className='font-serif text-lg lg:text-2xl font-bold my-2'>Dance Instructor / Chairman</p>
            <p className='text-sm lg:text-lg'>Originally from Italy, where the Latin music sets the rhythm for every dance night, she has always harbored a deep passion for dancing. In 2016, she discovered her interest in Cuban Salsa and Dominican Bachata while in Denmark. Since that moment, she has never ceased to dance. By 2022, she redirected her focus toward Bachata Sensual, culminating in the inauguration of the first Bachata school in Esbjerg. Her mission is to instill a deeper connection to the art of dance, fostering an appreciation for the emotional and expressive facets of movement, beyond the mere acquisition of standard figures. She brings good vibes to every lesson.</p>
          </div>
          <div className='hidden lg:block lg:mr-14 lg:mt-20'>
            <Image src={require('../resources/katiuscia_rado.jpg')} fluid className='scale-125 rounded-3xl shadow-lg' />
          </div>
        </div>

        <div className='lg:inline-flex lg:ml-14'>
          <div className='mx-3 lg:mx-14 h-full my-16 mr-7 p-2'>
            <p className='font-bold font-serif text-center text-2xl lg:text-4xl my-4'>Upcoming events</p><hr/>
            <div className='flex justify-center mt-16'>
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61557256020103&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=902649638051626" width="170" height="250" className='mt-4 justify-center scale-150 lg:scale-100 lg:w-[340px] lg:h-[500px]' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </div>

          <div className='lg:flex lg:float-right'>
            <div className='lg:my-16 lg:mr-14 p-2 lg:ml-32'>
              <p className='font-bold font-serif text-center text-2xl lg:text-4xl my-4'>Find us here</p><hr/>
              <div className='mt-4 flex justify-center'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.694063188233!2d8.4505979!3d55.467999899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b21947a785d6f%3A0x92c32164ab964820!2sEsbjerg%20Bachata%20and%20Latin%20Dance!5e0!3m2!1sen!2suk!4v1710087550056!5m2!1sen!2suk" width="300" height="300" className='lg:w-[800px] lg:h-[500px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

        </div>
        
        
      </div>


    </div>
  );
}

export default Main;