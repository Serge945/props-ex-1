import React from "react";
import ItemDescription from "./ItemDescription";


// function Product(props){ /* props is a prameter as a function component 
// // to access it we do open the semicolon*/
// return (
// //  WE use this component three times with differents properties ; 

// <div>
//   <h1>{props.name}</h1>
//   <h2>{props.description}</h2>
//   <h3>${props.price}</h3>
// </div>
// );
// }


//  if we want we can destructure the property by changing the word props with the itself between semicolon 

function Product({name ,description, price}){ /* props is a prameter as a function component */
return (
<div>
  {/* <h1>{name}</h1>
  <h2>{description}</h2>
  <h3>${price}</h3> */}

  {/* creacte a sub component with destruction */}
  <ItemDescription name ={name} description ={description}/>
  <h3>${price}</h3>
</div>
);
}



export default Product