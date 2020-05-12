import React from 'react';

const ItemReview = (props) => {
    const{name,quantity}=props.product;
   const reviewStyle={
       borderBottom:'1px solid lightgray',
       marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
   };
   
     return (
        <div style={reviewStyle} className="review=item">
        <h4 className="product-name">{name}</h4>
        <p>Quantity:{quantity}</p>
        <br/>
        <button className="main-button">Remove</button>
        <h2>hiiii</h2>
     </div>
     );
 };

export default ItemReview;