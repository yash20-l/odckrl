import Head from 'next/head'
import Image from "next/image"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import React, { useRef , useEffect, useState} from 'react'
import { Carousel, Form, Button } from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  const Menuref = useRef(null);
  const Hiddenref = useRef(null);
  const NavbarRef = useRef(null);

  const [scrolled , setScrolled] = useState(false);

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

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    console.log(scrolled);
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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
      <div  ref={NavbarRef} className={scrolled?"navbar text-white z-50 fixed w-full bg-gray-800 py-4" : "navbar text-white sticky w-full bg-gray-800 py-4"}>
        <div className="contents-wrapper px-2  w-full h-full md:flex-row flex items-center justify-between">
          <div className="brand">
            {/* <Image src="/skyking.png" height={60} width={100} alt=""></Image> */}
            <h1 className='text-2xl font-bold '>On Dot Courier, Kurali</h1>
          </div>
          <div className="MenuWrapper hidden md:flex-row md:flex  items-center justify-between">
            <div className="menu hidden  md:block">
              <div className="items  flex flex-col md:flex-row">
                <a href="" className='p-2 text-lg font-bold ease-in duration-100 hover:text-red-300'><span>Home</span></a>
                <a href="" className='p-2  text-lg font-bold ease-in duration-100 hover:text-red-300'  ><span>Services</span></a>
                <a href="" className='p-2  text-lg font-bold ease-in duration-100 hover:text-red-300' ><span>Pickup</span></a>
                <a href="" className='p-2  text-lg font-bold ease-in duration-100 hover:text-red-300' ><span>Contact Us</span></a>
              </div>
            </div>
          </div>

          <HiOutlineMenuAlt3 style={{height: '30px', width: "40px", cursor: 'pointer' }} className={scrolled?'white md:hidden': 'black md:hidden'} ref={Menuref} onClick={handleOnClick} />

        </div>

        <div className="mobileMenu py-2 fixed w-full hidden md:hidden" ref={Hiddenref}>
          <div className="mobile-MenuWrapper bg-gray-800">
            <div className="items flex flex-col items-center justify-center">
              <a href="" className='p-2  text-lg text-white font-bold ease-in duration-100 hover:text-purple-800'><span>Home</span></a>
              <a href="" className='p-2  text-lg text-white font-bold ease-in duration-100 hover:text-purple-800'  ><span>Services</span></a>
              <a href="" className='p-2  text-lg text-white font-bold ease-in duration-100 hover:text-purple-800' ><span>Pickup</span></a>
              <a href="" className='p-2  text-lg text-white font-bold ease-in duration-100 hover:text-purple-800' ><span>Contact Us</span></a>
            </div>
          </div>
        </div>

      </div>

      <div className="heroSection flex px-4 flex-col z-0 md:flex-row">
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
          <Image src={'/globe.png'} objectFit="contain"  priority={true} height={800} width={800} alt="globe"></Image>
        </div>

      </div>

      {/* services section start */}

      <div className="servicesSection bg-gray-100 py-8">
        <div className="heading flex flex-row text-center items-center justify-center">
          <h1 className='text-center text-4xl text-black font-bold px-2'>Our</h1><h1 className='px-2 text-4xl text-purple-500 font-bold text-purple-500'>Services</h1>
        </div>
        <div className="para text-center py-2">
          <p className='font-medium text-xl text-gray-800' style={{fontFamily:"'Patrick Hand', cursive;"}}>What Can We Do For You...</p>
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
              <p>we deliver all over the india. we have several domestic courier franchies available like skyking courier, professional courier, shree anjani courier and shree nandan courier. </p>
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
              <p>we cover all over the globe. we have a list of International courier companies i.e dhl, fedex, ups, dpd, tnt</p>
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
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, a? Esse ratione ipsum vitae, alias quisquam dicta nesciunt culpa, dolore et accusamus eius rerum minima.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Testomonals Section */}

      {/* <div className="testomonalsMain py-8  bg-gray-800">
        <div className="TestimonalsHeading text-center font-bold text-5xl text-white">
          <h1>Testimonials</h1>
        </div>
        <div className="para text-center font-normal text-white text-lg">
          <p>What others think about us</p>
        </div>
        <Carousel indicators={false}>
          <Carousel.Item className='h-50'>
            <div className="testimonalsWrapper flex flex-col items-center justify-evenly px-10 md:px-28 md:flex-row">
              <div className="avatar w-full flex flex-col items-center justify-center">
                <div className="image">
                  <Image src={'/3.jpg'} height={200} width={200} className={'rounded-full'}></Image>
                </div>
                <div className="PersonName text-center py-2">
                  <h1 className='text-4xl font-bold text-white'>Bhagwant Singh Maan</h1>
                </div>
              </div>
              <div className='desc w-full'>
                <div className="para text-left">
                  <p className="text-white font-medium text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque labore voluptatibus? Quos error, maiores magnam non tempora deserunt dolores?aliquid.</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className='h-50'>
            <div className="testimonalsWrapper flex flex-col items-center justify-evenly px-10 md:px-28 md:flex-row">
              <div className="avatar w-full flex flex-col items-center justify-center">
                <div className="image">
                  <Image src={'/2.jpg'} height={200} width={200} className={'rounded-full'}></Image>
                </div>
                <div className="PersonName text-center py-2">
                  <h1 className='text-4xl font-bold text-white'>Narendra Modi</h1>
                </div>
              </div>
              <div className='desc w-full'>
                <div className="para text-left">
                  <p className="text-white font-medium text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus similique soluta excepturi odio officia praesentium dolor, illum quod, dolore eos voluptas? Enim non suscipit quo.</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className='h-50'>
            <div className="testimonalsWrapper flex flex-col items-center justify-evenly px-10 md:px-28 md:flex-row">
              <div className="avatar w-full flex flex-col items-center justify-center">
                <div className="image">
                  <Image src={'/1.jpg'} height={200} width={200} className={'rounded-full'}></Image>
                </div>
                <div className="PersonName text-center py-2">
                  <h1 className='text-4xl font-bold text-white'>D. Trump</h1>
                </div>
              </div>
              <div className='desc w-full'>
                <div className="para text-left">
                  <p className="text-white font-medium text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat libero provident aspernatur, voluptatibus totam iusto, esse eos in excepturi dolores ex deserunt assumenda nemo.</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="ReachUs w-full px-2 my-2">
        <div className="reachTitle py-2 flex flex-row items-center justify-center">
          <h1 className='text-3xl font-normal text-gray-800 text-center'>How To</h1><h1 className='text-3xl text-purple-500 px-2 font-normal'>Reach</h1> <h1 className='text-3xl text-gray-800 font-normal'>Us ?</h1>
        </div>
        <div className="para">
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione vitae harum, fugit deserunt reiciendis ipsa consequuntur id veniam, alias minus soluta nam unde eos cupiditate! Veniam soluta eos eaque?</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.8385683299425!2d76.57688002806603!3d30.83518921128908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffbd8a026d03d%3A0xe913902c62acf549!2sOn%20Dot%20Courier%20service!5e0!3m2!1sen!2sin!4v1647755049537!5m2!1sen!2sin" className='h-full w-full' style={{ border: 0 }}  loading="lazy"></iframe>
      </div>

      <div className="requestPickup py-4 bg-gray-100">
        <div className="requestheading flex flex-row items-center justify-center my-2">
          <h1 className='text-center text-3xl font-normal text-red-500'>Request</h1><h1 className='px-2 text-3xl font-normal text-gray-800'>Pickup</h1>
        </div>
        <div className="requestForm px-3">
          <Form>
            <Form.Group className="my-3" controlId="Email">
              <Form.Control type="text" placeholder="Enter your name" style={{border:'none', borderBottom:'2px solid purple', outline:'none', boxShadow:'none', borderRadius:'0px', backgroundColor:'rgb(243 244 246)'}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Number">
              <Form.Control type="number" placeholder="Enter your mobile number" style={{border:'none', borderBottom:'2px solid purple', outline:'none', boxShadow:'none', borderRadius:'0px', backgroundColor:'rgb(243 244 246)'}} className='border-b-'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="dest">
              <Form.Control type="text" placeholder="Enter pickup place" style={{border:'none', borderBottom:'2px solid purple', outline:'none', boxShadow:'none', borderRadius:'0px', backgroundColor:'rgb(243 244 246)'}} className='border-b-'/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div> */}

      <div className="contactUs bg-gray-800 py-2">
        <div className="contactHeading flex flex-col items-center justify-center py-2">
          <h1 className='text-center text-3xl font-normal text-purple-200'>Contact Us</h1>
          <div className="para text-base text-purple-200 font-normal text-center">We will glad to meet you</div>
        </div>
        <div className="px-2">
          <div className="contact">
            <h1 className='text-white font-normal text-base'>Phone : +91 9988346901 (INDIA)</h1>
            <h1 className="text-white font-normal text-base">Email : gopalvermakurali.ondot@gmail.com</h1>
          </div>
        </div>
      </div>

    </>
  )
}
