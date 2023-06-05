import React from 'react'
import './App.css'
import Data from '../product/product.json'
function App() {
  const handleClick=()=>{
    alert("Successfully added to cart")
  }
  return (
     
      <div className='App'>
      <h1>Shopzy</h1>
      
     {
      Data.map(data=>{
        return(
          <div className='prod' key={data.id}>
            <img src={data.img}></img>
            <br></br>
           <strong>{data.name}:</strong>
           {data.price}
           <br></br>
           <button onClick={handleClick}>ADD TO CART</button>
           
          </div>
        )
      })
     } 
       
        
        
    </div>
  )
}

export default App
