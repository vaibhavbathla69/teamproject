import React from 'react'
import "./cartstyle.css"
import ImageHelper from './helper/Imagehelper'



export default function Card({
    product}
    
) {
	const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescription = product ? product.description : "Default description";
  return (
    
		<div class="main-container">
			<div class="poster-container">
				<ImageHelper product={product}/>
			</div>
			<div class="ticket-container">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">{cartTitle}</h4>
					<p class="ticket__movie-slogan">
						{cartDescription}
					</p>
					<p class="ticket__current-price">$28.00</p>
					<p class="ticket__old-price">$44.99</p>
					<button class="ticket__buy-btn">Buy now</button>
				</div>
			
		</div>

		
	</div>

  )
}
