import React from 'react';
import '../../styles/footer.css';
import { MDBFooter } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter  className=' p-1  text-lg-start bg-dark  text-light'>

      <section className='height-container-footer'>
        <div className='container text-center text-md-start mt-5'>
          <div className='probar mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-2 random'>

              <img src={process.env.PUBLIC_URL+"/assets/footerImages/logofinal.png"} alt="img"  className="logofooter" />
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
              <div className='pad-links'>
                <Link to={"/home"} className='text-reset'>
                <img src={process.env.PUBLIC_URL+"/assets/footerImages/homex.png"} alt="img" className="iconsfooter"/> Home</Link>
              </div>
              <div className='pad-links'>
                <Link to="/games" className='text-reset'> <img src={process.env.PUBLIC_URL+"/assets/footerImages/consolex.png"} alt="img"  className="iconsfooter"/>Games</Link>
              </div>
              <div className='pad-links'>
                <Link to="/user" className='text-reset'> <img src={process.env.PUBLIC_URL+"/assets/footerImages/userx.png"} alt="img"  className="iconsfooter" />User</Link>
              </div>
              <div className='pad-links'>
                <Link to="/aboutus" className='text-reset'><img src={process.env.PUBLIC_URL+"/assets/footerImages/peoplex.png"} alt="img" className="iconsfooter"/> About Us </Link>
              </div>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p> New York, NY 10012, US </p>
              <p> ***REMOVED*** </p>
              <p> + 01 234 567 88 </p>
              <p> + 01 234 567 89 </p>
              <div className='iconsocial'>
              <a href="https://www.facebook.com/" target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/facebook.png"} alt="img"  className="iconsocials" /></a>
                <a href="https://www.instagram.com/accounts/login/?hl=es&sour..." target='blank'> <img  src={process.env.PUBLIC_URL+"/assets/footerImages/instagram.png"} alt="img"  className="iconsocials" /></a>
                <a href= "https://www.youtube.com/" target='blank'> <img src={process.env.PUBLIC_URL+"/assets/footerImages/youtube.png"} alt="img"  className="iconsocials" /></a>
                <a href="https://mobile.twitter.com/i/flow/login" target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/twitter.png"} alt="img"  className="iconsocials" /></a>
                <a href="https://discord.com/login" target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/discord.png"} alt="img"  className="iconsocials" /></a>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='flex-lg-row  d-flex justify-content-cent p-2'>
        <div className='me-5 d-lg-block'>
            <div className='iconsocial'>
              <a href="https://www.facebook.com/" target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/facebook.png"} alt="img"  className="iconsocials" /></a>
                <a href="https://www.instagram.com/accounts/login/?hl=es&sour..." target='blank'> <img  src={process.env.PUBLIC_URL+"/assets/footerImages/instagram.png"} alt="img"  className="iconsocials" /></a>
                <a href= "https://www.youtube.com/" target='blank'> <img src={process.env.PUBLIC_URL+"/assets/footerImages/youtube.png"} alt="img"  className="iconsocials" /></a>
                <a href="https://mobile.twitter.com/i/flow/login" target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/twitter.png"} alt="img"  className="iconsocials" /></a>
                <a href="https://discord.com/login" target='blank'><img src={process.env.PUBLIC_URL+"/assets/footerImages/discord.png"} alt="img"  className="iconsocials" /></a>
                </div>
                </div>
      </section> */}

      <div className=" w-100 hfooter">
        <span className=" text-light">
          © 2022 - Copyright Game Over | All rights reserved.
        </span>
      </div>
    </MDBFooter>
  );
} 
