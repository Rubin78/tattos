// import React,{state, useState} from 'react';
// import Carousel from "react-bootstrap/Carousel"

// function App(props) {

// const [index, setIndex] = useState(0);
// const handleSelect = (SelectedIndex)=>{

// setIndex(SelectedIndex)

// }

//   return (
//     <div>

// <Carousel activeIndex={index}    onSelect={handleSelect}>

//         <Carousel.Item>
//         <img  className="d-block w-100"  src={require('./assests/dhaab.jpeg')} style={{height:'100vh'}}   />
//         <Carousel.Caption>
//         <h3> first slide</h3>
//         </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//         <img  className="d-block w-100"  src={require('./assests/gradient.jpeg')} style={{height:'100vh'}}   />
//         <Carousel.Caption>
//         <h3> second slide</h3>
//         </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//         <img  className="d-block w-100"  src={require('./assests/gradient.jpeg')} style={{height:'100vh'}}   />
//         <Carousel.Caption>
//         <h3> third slide</h3>
//         </Carousel.Caption>
//         </Carousel.Item>

// </Carousel>

//     </div>

//   );
// }

// export default App;

// // class App extends Component {

// // constructor(props){

// //   super(props);

// //   this.state={

// //     rahul: "wok to time",
// //     company:this.props.company

// //   }
// // }

// //   render() {
// //     return (
// //       <div>
// // <h1>this {this.state.rahul}</h1>
// // <h1>{this.state.company}</h1>

// //       </div>
// //     );
// //   }
// // }

// // export default App;

// import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import {
//   ListGroup,
//   Button,
// } from 'react-bootstrap';
// import {
//   CSSTransition,
//   TransitionGroup,
// } from 'react-transition-group';

// function App() {
//   const [step, setStep] = useState(2);

//   return (
//     <div className="App">

//       <section>

//         <button  onClick={() => {   if (step > 1) setStep(step-1) }} >left</button>

//         <div>
//           {step === 1 ?
//             <img  src="https://images.unsplash.com/photo-1580111700049-a70186aa5767?fit=crop&h=480&q=80"alt="forest" />
//             : step === 2 ? <img src="https://images.unsplash.com/photo-1597432763509-7e03cdb74027?fit=crop&h=480&q=80" alt="ocean" />
//             : step === 3 ? <img src="https://images.unsplash.com/photo-1597856263195-e94a3148b977?fit=crop&h=480&q=80" alt="mountains" /> : <></>
//           }
//         </div>

//  <button onClick={() => { if (step < 3) setStep(step+1)   }}   >right</button>

//         <div className="spans">
//           <span onClick={() => { setStep(1);
// }}></span>

//           &nbsp;

//           <span
//             onClick={() => {
//               setStep(2);
//             }}
//           ></span>
//           &nbsp;
//           <span
//             onClick={() => {
//               setStep(3);
//             }}
//           ></span>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;

// import React,{useState} from 'react'
// import './App.css'

//  function App() {

// let sliderArr =[1,2,3,4,5]
// const [x,setX] = useState(0);

// const goLeft =() => {
//   setX(x+100);
// };

// const goRight =() => {
//   setX(x-100);

// };

//   return (

// <div className="slider" >

// {

//   sliderArr.map((item,index) => {

//     return(
//       <div     key={index} className="slide" style={{transform:'translateX(${x}%)'}}  >

// {item}
//         </div>
//     )

//   })
// }

// <button id="goleft"   onClick={goLeft}>left</button>
// <button id="goright"    onClick={goRight}>right</button>
//  </div>

//   );
// }
// export default App;




import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
// import {Bubble } from 'react-bubble';
import VideoLooper from "react-video-looper";
import "./App.css";
import { AnimationWrapper } from "react-hover-animation";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Col,
  CardDeck,
  Card,
  CardImg,
  CardText,
} from "reactstrap";
import YouTube from "react-youtube";

import Typed from "react-typed";
import { SocialIcon } from "react-social-icons";

import { Link } from "react-scroll";

function App(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <div className="section1" id="section6">
        {/* < ==================== gradient black color filter      =========================/> */}

        <div className="transbox"></div>

        {/* < ==================== Video  section=========================/> */}

        <div>
          <video
            loop
            autoPlay="true"
            start={4.31}
            end={9.48}
            playsinline="true"
            className="videoplace"
          >
            <source src="https://www.tattoodo.com/static/videos/frontpage_hero.webm" />
          </video>
        </div>
      

        {/* < ==================== Header Section=========================/> */}

        <div>
          <Navbar color="light" light expand="md" className="transparent">
            <NavbarBrand href="/" className="textheader">
              TATTO's WORLD
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar id="navbar">
                {/*            
            <NavItem>
            <Link  activeClass="active" to="section6" spy={true} smooth={true} duration={1000} className="textfont">HOME</Link>
            </NavItem> */}

                <NavItem>
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className="textfont"
                  >
                    HOME
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    WORK
                  </Link>
                </NavItem>

                <NavItem>
                  <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    ABOUT
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    STUDIOS
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    CONTACT
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        {/* < ==================== text      ==================book your next tatto=======/> */}

        <div className="grid">
          <div className="background">
            <div className="transbox">
              <Col
                sm="5"
                style={{
                  display: "flex",
                  alignItems: "space-between",
                  justifyContent: "center",
                  paddingLeft: 40,
                }}
              >
                <div className="top-text">
                  <div data-aos="fade-down-right" className="DesignInnovation">
                    {/* <div style={{color:'#ffffff',fontSize:15,textAlign:"left",letterSpacing:'.1em',paddingLeft:60}}>HELLO,</div> */}
                    Book Your
                    <p style={{ paddingBottom: -20 }}></p>
                    Next Tattoo
                    <br />
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button id="button">Get started</button>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        </div>
      </div>

      <div className="section2" id="section2">
        <div
          style={{
            height: 220,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="footer-iteminner">
            <h1 className="Aboutme">OUR WORK DESIGN</h1>
          </div>
        </div>
        <Col md="12" className="coltohave" style={{ padding: 20 }}>
          <CardDeck data-aos="fade-up-right" data-aos="flip-left">
            <Col sm="2" MD="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards" data-aos="fade-up-right">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/70.jpg?auto=format,compress&amp;w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>
            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/65.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>

            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/24.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>
            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/home/maintile1.jpg"
                  />
                </Card>
              </AnimationWrapper>
            </Col>
            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/3.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>
            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/38.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>
          </CardDeck>
        </Col>

        <Col md="12" style={{ padding: 20 }}>
          <CardDeck data-aos="fade-up-right" data-aos="flip-left">
            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/60.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>

            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/7.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>

            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                  

            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/10.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>
            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/37.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>

            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/69.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>
          </CardDeck>
        </Col>

        <Col md="12" style={{ padding: 20 }}>
          <CardDeck data-aos="fade-up-right" data-aos="flip-left">
            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/64.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>

            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/21.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>

            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/53.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>

            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/22.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>
            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/58.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>
            <Col sm="2" md="2">
              <AnimationWrapper className="hoverwidthcards">
                <Card id="Top-cards">
                  <CardImg
                    id="imgcardradius"
                    top
                    width="100%"
                    height="100%"
                    src="https://tattoodo-web.imgix.net/misc/61.jpg?auto=format,compress&w=750"
                  />
                </Card>
              </AnimationWrapper>
            </Col>
          </CardDeck>
        </Col>

        <div style={{ height: 60 }}></div>
      </div>

      <div className="section3" id="section3">
        <Col md="12">
          <Row>
            <Col
              md="6"
              className="colheight"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Card style={{ width: 600, borderColor: "transparent" }}>
                <Col style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      padding: 10,
                    }}
                  >
                    <h5
                      style={{
                        marginBottom: 26,
                        fontSize: 16,
                        color: " rgb(158, 143, 143)",
                      }}
                    >
                      WHAT IS TATTO'S WORLD ?
                    </h5>

                    <h1 className="descript">
                      Tattoo's World is the home of global tattoo culture
                    </h1>

                    <div className="descriptinside">
                      We facilitate your tattoo journey with individualized
                      inspiration and guidance finding the right artist for a
                      tattoo you love.
                    </div>

                    <strong style={{ color: "#504949" }}>
                      “Tattoodo helps you connect to the artist. Before you even
                      get to the shop you feel comfortable, you know where
                      you’re at, you know where you’re going, and you know what
                      you want to get.”
                    </strong>
                  </div>
                </Col>
              </Card>
            </Col>

            <Col md="6" className="colheight" style={{ padding: 20 }}>
              <div
                className="video"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%" /* 16:9 */,
                  paddingTop: 25,
                  height: 0,
                }}
              >
                {/* <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/embed/${App}`}
        frameBorder="0"
      /> */}

                <iframe
                  src="https://www.youtube.com/embed/RFxjUNk3E4I"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "65%",
                    borderRadius: 8,
                    height: "100%",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </div>

      <div className="section4" id="section4">
        <div>
          <Col md="12" sm="12" xs="12" style={{ padding: 20 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: 270,
                alignItems: "center",
              }}
            >
              <h1
                className="textdecoration"
                style={{
                  textShadowColor: "#000",
                  textShadowOffset: { width: 0.5, height: 0.5 },
                  textShadowRadius: 1,
                }}
              >
                The New Way to Get
              </h1>
              <h1
                className="textdecoration"
                style={{
                  textShadowColor: "#000",
                  textShadowOffset: { width: 0.5, height: 0.5 },
                  textShadowRadius: 1,
                }}
              >
                {" "}
                inspired and Book Tattoos
              </h1>
            </div>
          </Col>
        </div>

        <Col>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col
              xs="12"
              sm="12"
              md="3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="btm-lefttcontent">
                <div className="btm-contentitemleft">
                  <div className="btm-iteminnerleft">
                    <h5> Browse millions of tattoos and save your favorites</h5>
                  </div>

                  <div className="btm-iteminnerleft">
                    <h5>Connect with top artists and studios</h5>
                  </div>

                  <div className="btm-iteminnerleft">
                    <h5>Book your next tattoo</h5>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs="12" sm="12" md="3" style={{ height: 608 }}>
              {/* <div style={{height:720,backgroundColor:'silver',borderRadius:30,width:320}}>
<div  style={{padding:20}}>
<img src="https://tattoodo-web.imgix.net/home/explore.jpg" alt="Explore" loading="lazy" className="ri" />
  </div>
          
          </div> */}

              <div className="bottom">
                <div className="bottomitem">
                  <div className="bottomiteminner">
                    <img
                      src="https://tattoodo-web.imgix.net/home/explore.jpg"
                      alt="Explore"
                      loading="lazy"
                      className="ri"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12" sm="12" md="3" style={{ height: 608 }}>
              <div className="btm-rightcontent">
                <div className="btm-contentitem">
                  <div className="btm-iteminner">
                    <h5>Download the App</h5>
                  </div>

                  <div className="btm-iteminner">
                    <img
                      src="https://www.tattoodo.com/static/svgs/appstore.svg"
                      alt="ios"
                      loading="lazy"
                      class="_1SYXywH _3iuNLNv"
                    />
                  </div>

                  <div className="btm-iteminner">
                    <img
                      src="https://www.tattoodo.com/static/svgs/googleplay_transparent.svg"
                      alt="android"
                      loading="lazy"
                      class="googleplaystore"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </div>

      <div className="section5">
        {/* <div id="container7"  className="Freesapceofconatiner7">
      <h1  className="Aboutme">Contact</h1>
    </div>


<Col md="12" style={{display:'flex',justifyContent:'center'}}>
    <Card className="mob-logo"  style={{height:110,width:"70%", display:'flex',justifyContent:'flex-end',alignItems:'center',backgroundColor:'transparent',borderColor:'transparent'}}>
     <div style={{textAlign:'center' ,display:'flex'}}>

     <AnimationWrapper><SocialIcon url="http://twitter.com/jaketrent" /></AnimationWrapper>
     <AnimationWrapper><SocialIcon url="http://linkedin.com/in/jaketrent" /></AnimationWrapper>
     <AnimationWrapper><SocialIcon       url="http://facebook.com/rubin.shaikh1"  /></AnimationWrapper>
     <AnimationWrapper><SocialIcon  url="https://github.com/Rubin78"  /></AnimationWrapper>
      </div> 
      




      </Card></Col> */}
        {/* <Col md="12" style={{height:80,display:'flex',justifyContent:'center',alignItems:'center'}}>

<h4 style={{color:"white"}}>© RUBIN SHAIKH    2020 </h4>.



  </Col> */}

        <div className="footer" id="section5">
          <div className="footer-item">
            <div className="footer-iteminner">
              <h1 className="Aboutme">Contact</h1>
            </div>

            <div className="footer-iteminner">
              <Col
                md="12"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  className="mob-logo"
                  style={{
                    height: 110,
                    width: "70%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  <div style={{ textAlign: "center", display: "flex" }}>
                    <AnimationWrapper>
                      <SocialIcon url="http://twitter.com/jaketrent" />
                    </AnimationWrapper>
                    <AnimationWrapper>
                      <SocialIcon url="http://linkedin.com/in/jaketrent" />
                    </AnimationWrapper>
                    <AnimationWrapper>
                      <SocialIcon url="http://facebook.com/rubin.shaikh1" />
                    </AnimationWrapper>
                    <AnimationWrapper>
                      <SocialIcon url="https://github.com/Rubin78" />
                    </AnimationWrapper>
                  </div>
                </Card>
              </Col>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="footer-iteminnerfooter">
          <h4 style={{ color: "black" }}>© RUBIN SHAIKH 2020 </h4>.
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <section > */
}
{
  /* <VideoLooper  source='https://www.tattoodo.com/static/videos/frontpage_hero.webm' start={4.31} end={9.48} autoplay="true"  playsinline="true"  className="" muted="true" /> */
}

{
  /* <div  > */
}
{
  /* 
<video loop autoPlay="true"  start={4.31} end={9.48} playsinline="true"   style={{position:'absolute',width:'auto',height:'100%'}}>

  <source src='https://www.tattoodo.com/static/videos/frontpage_hero.webm'  />
</video> */
}
{
  /* </div> */
}

{
  /* <img src="https://tattoodo-web.imgix.n1et/home/hero.jpg?auto=format%2Ccompress&amp;w=425 h-100%"  alt="Book your next tattoo" srcset="https://tattoodo-web.imgix.net/home/hero.jpg?auto=format%2Ccompress&amp;w=425 425w, https://tattoodo-web.imgix.net/home/hero.jpg?auto=format%2Ccompress&amp;w=1083 1083w, https://tattoodo-web.imgix.net/home/hero.jpg?auto=format%2Ccompress&amp;w=2138 2138w" class="K9f9jOn"></img> */
}
{
  /* </section> */
}
