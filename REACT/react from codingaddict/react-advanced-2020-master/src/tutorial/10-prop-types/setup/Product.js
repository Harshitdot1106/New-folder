import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image,name,price}) => {
  const url=image &&image.url
  return( <article className='product'>
    <h4>{name}</h4>
    <img src={url||defaultImage}/>
    <p>${price}</p>  
    </article>
    )
};
Product.PropTypes={
  image:PropTypes.object.isRequired,
  name:PropTypes.stringt.isRequired,
  price:PropTypes.number.isRequired
  };
  Product.defaultProps={
    name:'default name',
    price:3.99,
    image:defaultImage

  }
export default Product;
