import React from 'react'
import './Hero.css'
import coffeeImage from '../../assets/coffee.png'



function Hero() {
  return (
    <>
    {/* Hero Section */}
      <main className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Discover The
                <br />
                Art Of Perfect
                <br />
                Coffee
              </h1>
              <p className="hero-description">
                Experience The Rich And Bold Flavors Of Our
                <br />
                Exquisite Coffee Blends, Crafted To Awaken
                <br />
                Your Senses And Start Your Day Right
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">
                  Order Now →
                </button>
                <button className="btn-secondary">
                  Explore More
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="coffee-cup">
                <img src={coffeeImage} alt="Coffee Cup" className="coffee-image" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero