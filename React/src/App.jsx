import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Product from "./Product";

// On commence tjrs à partir du top down ; 
function App() {
  const [count, setCount] = useState(0)
// les props sont toujours du parent vers l'enfant ;
// On commence toujours à partir de App; 
  return (
    <div>
      <h1>Hello, world</h1>
      <Product
       name = "amazon Echo"
       description = "Your Ai assistant"
        price ={20}/>
      <Product
       name = "Apple"
       description = "Iphone"
        price ={900}/>
      <Product
       name = "Google"
       description = "Google pixels"
        price ={400}/>
      {/* product : name , descriptio , price */}
      {/* product : name , descriptio , price */}
      {/* product : name , descriptio , price */}
      {/* product : name , descriptio , price */}
      
    </div>
  )
}

export default App
