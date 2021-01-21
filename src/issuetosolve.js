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









import React,{useState} from 'react';
import { Container, Row } from 'react-bootstrap';
// import {Bubble } from 'react-bubble';
import VideoLooper from 'react-video-looper';
import './App.css'
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
  NavbarText,Col
} from 'reactstrap';



function App(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (

    
 <div  className="section1" >

{/* < ==================== gradient black color filter      =========================/> */}


<div className="transbox">
</div>

{/* < ==================== Video  section=========================/> */}


    <div>    
    <video loop autoPlay="true"  start={4.31} end={9.48} playsinline="true" className="videoplace">
    <source src='https://www.tattoodo.com/static/videos/frontpage_hero.webm'  />
    </video> 
    </div> 

{/* < ==================== Header Section=========================/> */}

<div>
     <Navbar color="light" light expand="md">
        <NavbarBrand href="/"     className="textheader">TATTO's WORLD</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="ml-auto" navbar  id="navbar"  >

            <NavItem>
            <NavLink href="/components/">Components</NavLink>
            </NavItem>
            
            <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>

            <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>

            <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>



<div className="grid">
<div className="background">
  <div className="transbox">
    <p>This is some text that is placed in the transparent box.</p>
  </div>
</div>






  </div>


  </div>
  );
}

export default App;








{/* <section > */}
{/* <VideoLooper  source='https://www.tattoodo.com/static/videos/frontpage_hero.webm' start={4.31} end={9.48} autoplay="true"  playsinline="true"  className="" muted="true" /> */}


{/* <div  > */}
{/* 
<video loop autoPlay="true"  start={4.31} end={9.48} playsinline="true"   style={{position:'absolute',width:'auto',height:'100%'}}>

  <source src='https://www.tattoodo.com/static/videos/frontpage_hero.webm'  />
</video> */}
{/* </div> */}



{/* <img src="https://tattoodo-web.imgix.n1et/home/hero.jpg?auto=format%2Ccompress&amp;w=425 h-100%"  alt="Book your next tattoo" srcset="https://tattoodo-web.imgix.net/home/hero.jpg?auto=format%2Ccompress&amp;w=425 425w, https://tattoodo-web.imgix.net/home/hero.jpg?auto=format%2Ccompress&amp;w=1083 1083w, https://tattoodo-web.imgix.net/home/hero.jpg?auto=format%2Ccompress&amp;w=2138 2138w" class="K9f9jOn"></img> */}
    {/* </section> */}
   