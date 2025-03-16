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
            <img src="https://www.google.com/imgres?q=food%20banner&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F049%2F647%2F928%2Fsmall_2x%2Fdelicious-indian-meal-with-biryani-rice-photo.jpeg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Findian-food-banner&docid=Fch00wzOyh2myM&tbnid=91bTIiftiA6KlM&vet=12ahUKEwjv6Lvy342MAxWEwjgGHedUHwwQM3oECGQQAA..i&w=714&h=400&hcb=2&ved=2ahUKEwjv6Lvy342MAxWEwjgGHedUHwwQM3oECGQQAA" />
        </div>
        <div>
            <img src="https://www.google.com/imgres?q=burger%20banner&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F026%2F152%2F659%2Fsmall%2Fa-cheese-burger-with-tomatoes-lettuce-and-melted-cheese-ai-generated-free-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fburger-banner&docid=thASjRbcelnJGM&tbnid=EByEU-jrLlFT9M&vet=12ahUKEwi0i6eP4I2MAxVCumMGHQlMDCEQM3oECBkQAA..i&w=267&h=200&hcb=2&ved=2ahUKEwi0i6eP4I2MAxVCumMGHQlMDCEQM3oECBkQAA" />
        </div>
        <div>
            <img src="https://www.google.com/imgres?q=pizza%20banner&imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fclose-up-freshly-baked-pizza-banner-topped-melted-cheese-red-bell-peppers-mushrooms-parsley-wooden-serving-board-342980956.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fpizza-banner.html&docid=f6v0jqSrNA4agM&tbnid=HTq-VPB76Wi7fM&vet=12ahUKEwiKz5qj4I2MAxVU4zgGHcEcGP0QM3oECBwQAA..i&w=800&h=449&hcb=2&ved=2ahUKEwiKz5qj4I2MAxVU4zgGHcEcGP0QM3oECBwQAA" />
        </div>
    </Carousel>
</>
  )
}

export default Banner