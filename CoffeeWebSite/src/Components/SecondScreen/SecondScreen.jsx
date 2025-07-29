import React from 'react'
import './SecondScreen.css'
import heavenCoffeeImg from '../../assets/heavenCoffee.png'

function SecondScreen() {
  return (
    <div className='secondpage'>
        <div className='heavenimage'>
            <img src={heavenCoffeeImg} alt="Coffee" />
        </div>
        <div className='secondpagecontent'>
            <h1>Coffee Heaven</h1>
            <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.</p>
            <button className='secondpagebutton'>View All</button>

        </div>
    </div>
  )
}

export default SecondScreen