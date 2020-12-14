import React, { Component } from 'react' 
import Carousel from 'react-bootstrap/Carousel' 
export default class Slider extends Component {  

 render() {  
    return (  
    <div>  
    <div class='flex' >   
      </div>  
      <div className='container-fluid' >  
      <Carousel interval={1200} keyboard={false} pauseOnHover={true}>  
      <Carousel.Item style={{'height':"100%"}}  >  
      <img style={{'height':"100%"}}  
      className="d-block w-100"  
      src={'https://www.printstop.co.in/images/flashgallary/large/New-Year-Campaign.png'} alt="banner1"  />  
      <Carousel.Caption>  
      <h3>Celebrate 2021 With Our Customized Designs </h3>  
      </Carousel.Caption>  
      </Carousel.Item  >  
      <Carousel.Item style={{'height':"100%"}}>  
      <img style={{'height':"100%"}}  
      className="d-block w-100"  
      src={'https://www.printstop.co.in/images/flashgallary/large/premium_drinkware_Banners_1_.jpg'}   alt="banner2" />  
      <Carousel.Caption>  
      <h3>Stuning Designs</h3>  
      </Carousel.Caption>  
      </Carousel.Item>  
      <Carousel.Item style={{'height':"100%"}}>  
      <img style={{'height':"100%"}}  
      className="d-block w-100"  
      src={'https://www.printstop.co.in/images/flashgallary/large/Apparel_Banner_1_.jpg'} alt="banner3"  />  
      <Carousel.Caption>  
      <h3>Best Collections</h3>  
      </Carousel.Caption>  
      </Carousel.Item>
      <Carousel.Item style={{'height':"100%"}}>  
      <img style={{'height':"100%"}}  
      className="d-block w-100"  
      src={'https://www.printstop.co.in/images/flashgallary/large/Technologies_Banners_1_.jpg'}   alt="banner4"/>  
      <Carousel.Caption>  
      <h3>Customized Products</h3>  
      </Carousel.Caption>  
      </Carousel.Item>  
       </Carousel>  
       </div>  
       </div>  
    )  
    }  
}  
  

