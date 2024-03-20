import React from 'react';
import Logo from '../../assets/Logo_finance_assistant_app.png'
import "./Home.css"

function Home(){

  return (
          <div className="home">
            <div className="home-container">
                <div className="home-image-wrapper">
                    <img
                        src={Logo}
                        alt=""
                        className="landing-image"
                    />
                </div>
            </div>
        </div>
  );
}


export default Home;