import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

function Banner() {
  return (
    <>
    <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true} 
    >
        <div>
            <img src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=" />
        </div>
        <div>
            <img src="https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=" />
        </div>
        <div>
            <img src="https://media.istockphoto.com/id/502474519/photo/homemade-grilled-barbecue-chicken.jpg?s=612x612&w=0&k=20&c=5wm-TATH7AH8n77VLfl3CY_CCGeP94TjqrsgB1rXpOg=" />
        </div>
    </Carousel>
</>
  )
}

export default Banner