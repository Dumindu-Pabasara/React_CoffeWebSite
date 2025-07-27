import React from 'react'
import './SecondScreen.css'

function SecondScreen() {
  return (
    <div className='secondpage'>
        <div className='heavenimage'>
            <img src="heaven.jpg" alt="Coffee" />
        </div>
        <div className='secondpagecontent'>
            <h1>Coffee Heaven</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem, deleniti totam, aspernatur dolore sit 
                modi impedit vitae consequuntur quae consectetur dolor labore tempora obcaecati aliquid ipsam 
                voluptates unde quibusdam!</p>
            <button className='secondpagebutton'>View All</button>

        </div>
    </div>
  )
}

export default SecondScreen