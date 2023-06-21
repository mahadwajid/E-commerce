import React from "react";
import img from '../Images/Logos/image12.png';
import img1 from '../Images/Logos/image13.png';
import '../Assessts/About.css';
import Footer from "./Footer";
function About(){
    return(

        <div>

<div className="about-section">
  <h1>About Us</h1>
  <p>As web developers, our goal is to build and develop websites that meet the unique needs of our clients and their target audience.
We combine our technical expertise with creativity to create visually appealing and functional websites that leave a lasting impression.
Through continuous learning and staying up-to-date with the latest technologies, we strive to deliver high-quality web solutions that drive results.</p>
</div>

<h2 style={{textAlign:'center'}}>Our Team</h2>

<div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://icon-library.com/images/unknown-person-icon/unknown-person-icon-23.jpg" className="card-img-top" alt="Muhammad Ali" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Muhammad Ali</h5>
              <p className="card-text">
                Sir Muhammad Ali, our web development advisor, is a highly knowledgeable and dedicated mentor who inspires us with his expertise and passion for the subject. Under his guidance, we have gained invaluable skills and confidence to excel in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="card-img-top" alt="Mahad Khan" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Mahad Khan</h5>
              <p className="card-text">
                Mahad Khan is a talented front-end developer, known for his expertise in creating captivating user interfaces and seamless user experiences. His passion for web development and attention to detail make him a valuable asset to any project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img1} className="card-img-top" alt="Abdul Aziz" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Abdul Aziz</h5>
              <p className="card-text">
                Abdul Aziz is a skilled front-end developer who brings expertise to website development. With his extensive knowledge and dedication, he contributes as a valuable helper in creating this website. His proficiency in front-end technologies aids in crafting exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<Footer />
            
           
        </div>
    );
}
export default About;