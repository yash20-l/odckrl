import Head from 'next/head';
import "swiper/css/autoplay";
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'
import { MdCall } from "react-icons/md"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import React, { useRef, useEffect, useState } from 'react'
import 'swiper/css';
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {

  const Menuref = useRef(null);
  const Hiddenref = useRef(null);
  const NavbarRef = useRef(null);

  const homeRef = useRef(null)
  const contactRef = useRef(null)
  const pickupRef = useRef(null)
  const servicesRef = useRef(null)

  const [scrolled, setScrolled] = useState(false);

  const handleOnClick = () => {
    Hiddenref.current.classList.toggle('hidden')
  }


  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  // const scrollToRef = (ref) => Element.scrollTo(0, ref.current.offsetTop)  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    console.log(scrolled);
  }, [])

  return (
    <>
      <div className="head">
        <Head>
          <title>On Dot Courier Kurali</title>
          <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />
        </Head>
      </div>

      {/*  navbar goes here */}
      <div ref={NavbarRef} className={scrolled ? "navbar text-white z-50 fixed w-full bg-gray-800 py-4 shadow-lg shadow-black" : "navbar text-white sticky w-full bg-gray-800 py-4"}>
        <div className="contents-wrapper px-2  w-full h-full md:flex-row flex items-center justify-between">
          <div className="brand">
            {/* <Image src="/skyking.png" height={60} width={100} alt=""></Image> */}
            <h1 className='text-xl font-bold '>On Dot Courier, Kurali</h1>
          </div>
          <div className="MenuWrapper hidden md:flex-row md:flex  items-center justify-between">
            <div className="menu hidden  md:block">
              <div className="items  flex flex-col md:flex-row">
                <Link href="" className='p-2 text-lg font-bold ease-in duration-100 hover:text-red-300' ref={homeRef} activeClass="home" to='home' spy={true} smooth={true} duration={500} offset={-70}><span>Home</span></Link>
                <Link href="" className='p-2  text-lg font-bold ease-in duration-100 hover:text-red-300' ref={servicesRef} activeClass="services"  to='services' spy={true} smooth={true} duration={500} offset={-70}><span>Services</span></Link>
                <Link href="" className='p-2  text-lg font-bold ease-in duration-100 hover:text-red-300' ref={pickupRef} activeClass="pickup" to='testimonals' spy={true} smooth={true} duration={500} offset={-70}><span>Testimonals</span></Link>
                <Link href="" className='p-2  text-lg font-bold ease-in duration-100 hover:text-red-300' ref={contactRef} activeClass="contact" to='contact' spy={true} smooth={true} duration={500} offset={-70}><span>Contact Us</span></Link>
              </div>
            </div>
          </div>

          <HiOutlineMenuAlt3 style={{ height: '30px', width: "40px", cursor: 'pointer' }} className={scrolled ? 'white md:hidden' : 'black md:hidden'} ref={Menuref} onClick={handleOnClick} />

        </div>

        <div className="mobileMenu py-2 fixed w-full hidden md:hidden" ref={Hiddenref}>
          <div className="mobile-MenuWrapper bg-gray-800">
            <div className="items flex flex-col items-center justify-center">
            <Link href="" className='p-2 text-lg font-bold ease-in duration-100 hover:text-red-300' ref={homeRef} activeClass="home" to='home' spy={true} smooth={true} duration={500} offset={-70} onClick={handleOnClick}><span>Home</span></Link>
                <Link href="" className='p-2  text-lg font-bold ease-in duration-100 hover:text-red-300' ref={servicesRef} activeClass="services"  to='services' spy={true} smooth={true} duration={500} offset={-70} onClick={handleOnClick}><span>Services</span></Link>
                <Link href="" className='p-2  text-lg font-bold ease-in duration-100 hover:text-red-300' ref={pickupRef} activeClass="pickup" to='testimonals' spy={true} smooth={true} duration={500} offset={-70} onClick={handleOnClick}><span>Testimonals</span></Link>
                <Link href="" className='p-2  text-lg font-bold ease-in duration-100 hover:text-red-300' ref={contactRef} activeClass="contact" to='contact' spy={true} smooth={true} duration={500} offset={-70} onClick={handleOnClick}><span>Contact Us</span></Link>
            </div>
          </div>
        </div>

      </div>

      <div className="heroSection home flex px-4 flex-col z-0 md:flex-row">
        <div className="main">
          <div className="heading">
            <h1 className='leading-tight text-5xl text-gray-800 font-bold mt-20 mb-10 md:text-6xl md:mt-40'>The Best Courier Shop In Punjab !</h1>
          </div>
          {/* <div className="buttons">
            <button className='p-1 border-red-500 border-2 bg-red-500 text-lg mx-2  rounded-xl text-white font-normal ease-in duration-100 hover:bg-red-600'>Request Pickup</button>
            <button className='p-1 bg-white mx-2 border-2 font-normal rounded-xl border-red-500 text-lg ease-in duration-100 text-black hover:text-white hover:bg-red-500'>Get Directions</button>
          </div> */}
        </div>
        <div className="image z-0 relative">
          <Image src={'/globe.png'} objectFit="contain" priority={true} height={800} width={800} alt="globe"></Image>
        </div>

      </div>

      {/* services section start */}

      <div className="servicesSection services bg-gray-100 py-8">
        <div className="heading flex flex-row text-center items-center justify-center">
          <h1 className='text-center text-4xl text-black font-bold px-2'>Our</h1><h1 className='px-2 text-4xl text-purple-500 font-bold text-purple-500'>Services</h1>
        </div>
        <div className="para text-center py-2">
          <p className='font-medium text-xl text-gray-800' style={{ fontFamily: "'Patrick Hand', cursive;" }}>What Can We Do For You...</p>
        </div>
        <div className="servicesContainer flex flex-col items-center justify-evenly md:flex-row">
          <div className="box p-2 m-2 rounded-xl bg-red-500 text-center my-2 relative">
            <div className="centerBox flex flex-row items-center justify-center"></div>
            {/* <div className="icon rounded-full bg-white absolute top-0 right-0 p-6 right-40 border-4 border-purple-600" style={{top:'-50px'}}>
              <ImTruck className='h-10 w-10' color='purple'/>
              </div> */}
            <div className="boxHeading  text-white font-bold mb-2 mt-4">
              <h1 className='text-2xl'>Domestic Cargo</h1>
            </div>
            <div className="description my-2 text-lg text-white font-normal">
              <p className='capitalize'>we delivery everywhere in india. our domestic franchise companies will deliver all your consignments fast and safe. costmer satisfaction and accurate delivery is our topmost priority.</p>
            </div>
          </div>
          <div className="box p-2 m-2 rounded-xl bg-blue-500 text-center my-2 relative">
            {/* <div className="icon rounded-full bg-white absolute top-0 right-0 p-6 right-40 border-4 border-purple-600" style={{top:'-50px'}}>
              <ImTruck className='h-10 w-10' color='purple'/>
              </div> */}
            <div className="boxHeading text-white font-bold mb-2 mt-4">
              <h1 className='text-2xl'>International Cargo</h1>
            </div>
            <div className="description my-2 text-lg text-white font-normal">
              <p className='capitalize'>we serve all over the globe. our international cargo services will help you to send your package anywhere in this world. we offer fastest and most affordable services for international cargo.</p>
            </div>
          </div>
          <div className="box p-2 m-2 rounded-xl bg-purple-500 text-center my-2 relative">
            {/* <div className="icon rounded-full bg-white absolute top-0 right-0 p-6 right-40 border-4 border-purple-600" style={{top:'-50px'}}>
              <ImTruck className='h-10 w-10' color='purple'/>
              </div> */}
            <div className="boxHeading text-white font-bold mb-2 mt-4">
              <h1 className='text-2xl'>Pan Card</h1>
            </div>
            <div className="description my-2 text-lg text-white font-normal">
              <p className='capitalize'>you can also apply your new government pan card here. after submission of required documents, we will get your new pan card ready within a week or two.</p>
            </div>
          </div>
        </div>
      </div>



      {/* Testomonals Section */}



      <div className="testimonalsMain bg-gray-800 py-10 testimonals">
        <div className="heading text-center text-white text-3xl">
          <h1>Testimonals</h1>
        </div>
        <div className="para text-center text-white text-xl py-2">
          <h1 style={{ fontFamily: "'Patrick Hand', cursive;" }}>what others think about us ?</h1>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          >
          <SwiperSlide>
            <div className="testimonalsWrapper bg-gray-800 py-4 flex flex-col items-center justify-evenly px-10 md:px-28 md:flex-row">
              <div className="avatar w-full flex flex-col items-center justify-center">
                <div className="image">
                  <Image src={'/boy.png'} height={200} width={200} className={'rounded-full'}></Image>
                </div>
                <div className="PersonName text-center py-2">
                  <h1 className='text-3xl font-bold text-white capitalize'>Mankirat Singh</h1>
                </div>
              </div>
              <div className='desc w-full py-4 md:px-4'>
                <div className="para text-left">
                  <p className="text-white font-medium text-xl capitalize"><div className="quotes block w-full py-4"><Image src="/quote.gif" alt="quote" height={50} width={50} className='block'/></div>with on dot couriers i can send my material easily to my friend in canada. the price was also nominal as compared to other shops.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonalsWrapper bg-gray-800 py-4 flex flex-col items-center justify-evenly px-10 md:px-28 md:flex-row">
              <div className="avatar w-full flex flex-col items-center justify-center">
                <div className="image">
                  <Image src={'/girl.png'} height={200} width={200} className={'rounded-full'}></Image>
                </div>
                <div className="PersonName text-center py-2">
                  <h1 className='text-3xl font-bold text-white capitalize'>Vishali Verma</h1>
                </div>
              </div>
              <div className='desc w-full py-4 md:px-4'>
                <div className="para text-left">
                  <p className="text-white font-medium text-xl capitalize"><div className="quotes block w-full py-4"><Image src="/quote.gif" alt="quote" height={50} width={50} className='block'/></div>they provide the best cargo service in this area. experienced shopkeeper and accurate delivery. i liked that keep it up..</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonalsWrapper bg-gray-800 py-4 flex flex-col items-center justify-evenly px-10 md:px-28 md:flex-row">
              <div className="avatar w-full flex flex-col items-center justify-center">
                <div className="image">
                  <Image src={'/boy.png'} height={200} width={200} className={'rounded-full'}></Image>
                </div>
                <div className="PersonName text-center py-2">
                  <h1 className='text-3xl font-bold text-white'>Jasbir Singh Chauhan</h1>
                </div>
              </div>
              <div className='desc w-full py-4 md:px-4'>
                <div className="para text-left">
                  <p className="text-white font-medium text-xl"><div className="quotes block w-full py-4"><Image src="/quote.gif" alt="quote" height={50} width={50} className='block'/></div>very nice service. my every consignment is delivered on time. nice shopkeeper. they never disappointed me.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>



      <div className="ReachUs  w-full px-2 my-4">
        <div className="reachTitle py-2 flex flex-row items-center justify-center">
          <h1 className='text-3xl font-bold text-gray-800 text-center'>How To</h1><h1 className='text-3xl text-purple-500 px-2 font-bold'>Reach</h1> <h1 className='text-3xl text-gray-800 font-bold'>Us ?</h1>
        </div>
        <div className="para py-2">
          <p className='text-center'>On dot courier and cargo limited is located opp. Pnb bank, Ropar road, kurali. We deal in domestic and international cargo. We serve all over the globe 🌎. Our topmost priority is fast and accurate delivery at minimum cost. Must give one chance</p>
        </div>
        <div className="map py-4 h-60">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.8385683299425!2d76.57688002806603!3d30.83518921128908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffbd8a026d03d%3A0xe913902c62acf549!2sOn%20Dot%20Courier%20service!5e0!3m2!1sen!2sin!4v1647755049537!5m2!1sen!2sin" className='h-full w-full' style={{ border: 0 }} loading="lazy"></iframe>
        </div>
      </div>
{/* 
      <div className="ImageGallery bg-red-500 py-2">
        <div className="ImageGalleryHeading py-2">
          <h1 className='text-3xl text-white text-center'>Gallery</h1>
        </div>
        <div className="GallerySlider">
          <Swiper modules={[EffectFade, Navigation]}
            effect="fade"
            navigation
            spaceBetween={50}
            slidesPerView={3}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="GalleryImage">
                <Image src={'/2.jpeg'} height={500} width={500}></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="GalleryImage">
                <Image src={'/3.jpeg'} height={500} width={500}></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="GalleryImage">
                <Image src={'/4.jpeg'} height={500} width={500}></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="GalleryImage">
                <Image src={'/5.jpeg'} height={500} width={500}></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="GalleryImage">
                <Image src={'/6.jpeg'} height={500} width={500}></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="GalleryImage">
                <Image src={'/1.jpeg'} height={500} width={500}></Image>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}

      <a href="tel:+91 9988346901"><div className="callBtn bg-blue-500 fixed right-4 bottom-6 shadow-lg opacity-2 shadow-black rounded-full p-4 md:hidden" style={{zIndex:1000}}>
        <MdCall color='white' size={30}/>
      </div></a>

      <div className="contactUs contact bg-gray-200 py-2">
        <div className="contactHeading flex flex-col items-center justify-center py-2">
          <h1 className='text-center text-3xl font-normal text-gray-800'>Contact Us</h1>
          <div className="para text-lg text-gray-800 font-normal text-center" style={{ fontFamily: "'Patrick Hand', cursive;" }}>We will glad to meet you</div>
        </div>
        <div className="px-2">
          <div className="contact">
            <h1 className='text-gray-800 font-normal text-base'>Phone : +91 9988346901 (INDIA)</h1>
            <h1 className="text-gray-800 font-normal text-base">Email : gopalvermakurali.ondot@gmail.com</h1>
            <hr className='h-1 opacity-1 bg-gray-300 my-2'/>
            <h1 className="text-gray-800 font-normal text-base capitalize">Address : on dot courier and cargo ltd,<br />ropar road, opp. punjab national bank,<br />near bittu sweet shop,<br />kurali (pb) - 140103</h1>

          </div>
        </div>
      </div>

      <div className="footer bg-gray-800 py-4 px-2">
        <div className="footerText">
          <h1 className='text-white text-base font-normal capitalize'>© Copyright 2022-2023 @ on dot courier and cargo services kurali</h1>
          <h1 className='text-white text-base font-normal capitalize'>Developed and managed by yash verma</h1>
        </div>
      </div>

    </>
  )
}
