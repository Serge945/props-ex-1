import React from 'react'

// it will take the name and description only; 
function ItemDescription({name , description}) {
  return (
    <div>
      <p>{name}</p>
      <p><i>{description}</i></p>
    </div>
  )
}

export default ItemDescription
