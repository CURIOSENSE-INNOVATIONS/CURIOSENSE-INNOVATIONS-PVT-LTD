import React from 'react'

import "./Home.css"

import img1 from "../Images/Assets/assets6.jpeg"
import About from "../Pages/AboutUs"

const Home = () => {

  const homeHeader = "Welcome to Curiosense Innovations"
  
  return (

    <>
      <div className="home-sec">
        <div className="home-cnt">
          <h2>{homeHeader}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque atque nostrum quae molestiae quo esse cumque, nemo accusantium, facilis aspernatur tempore? Doloribus quam ratione voluptates voluptate odio omnis ullam sequi ad dolorum dolore quo placeat ducimus reiciendis esse consequuntur eligendi eum, neque cumque facere dolor. Autem, obcaecati debitis. Excepturi, vero? </p>
          <button className="buy-button home-btn" onClick={() => <About />}>Explore More →</button>
        </div>
        <div className="home-img">
          <img className="animation" src={img1} />
        </div>
      </div>
    </>
  )
}

export default Home