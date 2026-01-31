

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.onclick = function () {
    navLinks.classList.toggle("show");
  };







  const hero = document.querySelector(".hero");

  const images = [
    "images/home b3.jpg",
    "images/home b2.jpg",
    "images/home b4.jpg"
  ];

  let index = 0;

  function changeBackground() {
    hero.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 2300);


  // 



// 1️⃣ Find all counters
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  let target = counter.getAttribute("data-target"); 
  target = Number(target); 

  let count = 0;

  function increase() {
    count = count +1; // add 1 each step

    if (count > target) { 
      count = target; 
    }

    counter.innerText = count;
    if (count < target) { 
      setTimeout(increase, 20); 
    }
  }

  increase();
});





let currentReview = 0;
const track = document.querySelector(".review-track");
const reviews = document.querySelectorAll(".review-card");

function moveReview() {
  currentReview = currentReview + 1;

  if (currentReview >= reviews.length) {
    currentReview = 0;
  }

  track.style.transform = "translateX(-" + currentReview * 100 + "%)";
}

setInterval(moveReview, 4000);



 const a =  document.querySelectorAll(".a")

let darkmode = localStorage.getItem('darkmode');

const themeSwitch = document.querySelector('.themeSwitch');
const lastSvg = themeSwitch.querySelector("svg:last-child");
const firstSvg = themeSwitch.querySelector("svg:first-child");

const enableDarkmode = () => {

  lastSvg.style.display = "block";
  firstSvg.style.display = "none"
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};


const disableDarkmode = () => {
//       // APPLy FUNCTION

 
   firstSvg.style.display = "block";
lastSvg.style.display = "none"
  document.body.classList.remove('darkmode');
  localStorage.removeItem('darkmode');
  
firstSvg.style.display = "inline-block";
};

if (darkmode === 'active') {
  
  enableDarkmode();
}
else  {
  
  disableDarkmode()
}


console.log('working oeie')


themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode === 'active' ? disableDarkmode() : enableDarkmode();
});


  const contactForm = document.querySelector('.contact-form')
      contactForm.addEventListener('submit', (e) => {

     const name = document.getElementById('name').value
     const myEmail = document.getElementById('email').value
     const userMessage = document.getElementById('message').value

     const sellerEmail = 'morakinyoifeoluwa10@gmail.com'
     const subject = encodeURIComponent(`Message from ${name}`)
     const body = encodeURIComponent(`Name: ${name} \n Email: ${myEmail}\n\n Message: ${userMessage} `)


     window.location.href = `mailto:${sellerEmail}? subject =${subject}&body= ${body}`
     console.log('working fine')
      })


      
//       data-aos="fade-right"
// data-aos="fade-left"
// data-aos="zoom-in"
// data-aos="flip-up"



//       <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
//   <link rel="stylesheet" href="D-lawweb.css">
//   <link rel="stylesheet" href="media.css">
// </head>
// <body>
  
// <header>
//    <button class="themeSwitch">
     
//         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>

//            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
//       </button>
//   <div class="header-container">

//     <!-- Logo -->
//     <div class="logo">
//       <img src="/images/logo (2).jpg" alt="Law Firm Logo">
//     </div>

//     <!-- Navigation links -->
//     <nav class="nav-links" id="navLinks">
//       <a href="#">Home</a>
//       <a href="#">About Us</a>
//       <a href="#">Services</a>
//       <a href="#">Contact</a>
//       <button class="consult-btn">Free Consultation</button>
//     </nav>
    

//     <!-- Hamburger icon -->
//     <div class="hamburger" id="hamburger">
//       ☰
//     </div>

//   </div>
// </header>




// <section class="hero">
//   <div class="hero-overlay">
//     <div class="hero-content">
      
//       <!-- Left content -->
//       <div class="hero-text">
//         <h1>FEEL THE REAL ART OF JUSTICE</h1>
//         <a href="#" class="hero-btn">Get Free Consultation</a>
//       </div>

//       <!-- Right image -->
//       <div class="hero-image">
//         <img src="images/lawyer__2_-removebg-preview.png" alt="Justice Image">
//       </div>

//     </div>
//   </div>
// </section>





// <section class="services">


//     <div class="grid">
      
//       <!-- Grid Item 1 -->
//       <div class="grid-item">
//         <img src="accident.png" alt="Accident">
//         <h3>Accident</h3>
//         <p>We provide legal support for all types of accidents, ensuring you get the compensation you deserve.</p>
//       </div>

//       <!-- Grid Item 2 -->
//       <div class="grid-item">
//         <img src="kidnapping.png" alt="Kidnapping">
//         <h3>Kidnapping</h3>
//         <p>Our experienced team handles kidnapping cases with sensitivity and professionalism to protect your rights.</p>
//       </div>

//       <!-- Grid Item 3 -->
//       <div class="grid-item">
//         <img src="theft.png" alt="Theft">
//         <h3>Theft</h3>
//         <p>We assist clients in criminal theft cases, offering strategic defense and legal guidance throughout the process.</p>
//       </div>

//       <!-- Grid Item 4 -->
//       <div class="grid-item">
//         <img src="fraud.png" alt="Fraud">
//         <h3>Fraud</h3>
//         <p>Our lawyers specialize in fraud cases, helping you navigate complex legal situations with confidence.</p>
//       </div>

//       <!-- Grid Item 5 -->
//       <div class="grid-item">
//         <img src="family.png" alt="Family Law">
//         <h3>Family Law</h3>
//         <p>We provide support in family law matters including custody, divorce, and legal mediation.</p>
//       </div>

//     </div>
  
// </section>







// <!-- d -->


// <section class="who-we-are">
//   <div class="container">
//     <div class="who-content">
      
//       <!-- Left Side -->
//       <div class="who-left">
//         <h2 class="who-title">Who We Are</h2>
//         <h3 class="experience">30 Years of Experience</h3>
//         <p class="who-text">
//           We are a team of experienced lawyers committed to justice and excellence. 
//           Our mission is to provide top-notch legal services to individuals and businesses 
//           across multiple practice areas. We focus on strategy, dedication, and delivering results.
//         </p>

//         <div class="counters">
//           <div class="counter-box">
//             <span class="counter" data-target="200">0</span>+
//             <p>Projects</p>
//           </div>
//           <div class="counter-box">
//             <span class="counter" data-target="1500">0</span>+
//             <p>Awards</p>
//           </div>
//         </div>

//         <a href="#" class="btn">Get More Information</a>
//       </div>

//       <!-- Right Side -->
//       <div class="who-right">
//         <img src="lawyer1.jpg" alt="Lawyer Image 1" class="top-image">
//         <img src="lawyer2.jpg" alt="Lawyer Image 2" class="bottom-image">
//       </div>

//     </div>
//   </div>
// </section>






// <section class="what-we-do">
//   <div class="container">
//     <div class="wwd-content">

//       <!-- Left: Big Image -->
//       <div class="wwd-left">
//         <img src="big-lawyer.jpg" alt="Lawyer Big Image">
//       </div>

//       <!-- Right: Small Grids -->
//       <div class="wwd-right">

//         <!-- Grid Item 1 -->
//         <div class="wwd-item">
//           <img src="accident.png" alt="Accident Icon">
//           <h3>Accident</h3>
//           <p>We provide full legal support for all types of accident cases, ensuring your rights are protected.</p>
//         </div>

//         <!-- Grid Item 2 -->
//         <div class="wwd-item">
//           <img src="fraud.png" alt="Fraud Icon">
//           <h3>Fraud</h3>
//           <p>Our expert lawyers handle fraud cases with precision and focus on achieving justice for our clients.</p>
//         </div>

//         <!-- Grid Item 3 -->
//         <div class="wwd-item">
//           <img src="kidnapping.png" alt="Kidnapping Icon">
//           <h3>Kidnapping</h3>
//           <p>We provide dedicated legal support for kidnapping cases, safeguarding families and individuals.</p>
//         </div>

//         <!-- Grid Item 4 -->
//         <div class="wwd-item">
//           <img src="theft.png" alt="Theft Icon">
//           <h3>Theft</h3>
//           <p>Our team represents clients in theft and property crime cases to ensure fair legal outcomes.</p>
//         </div>

//         <!-- Grid Item 5 -->
//         <div class="wwd-item">
//           <img src="family.png" alt="Family Law Icon">
//           <h3>Family Law</h3>
//           <p>We handle family law matters including custody, divorce, and mediation with professionalism.</p>
//         </div>

//       </div>
//     </div>
//   </div>
// </section>

// <!--  -->





// <section class="reviews">
//   <h2 class="review-title">What Our Clients Say</h2>

//   <div class="review-wrapper">
//     <div class="review-track">

//       <div class="review-card">
//         <p>
//           “They handled my accident case professionally and kept me informed
//           throughout the process.”
//         </p>
//         <h4>— John D.</h4>
//         <span>⭐⭐⭐⭐⭐</span>
//       </div>

//       <div class="review-card">
//         <p>
//           “Very experienced lawyers. I felt confident and supported during my
//           entire case.”
//         </p>
//         <h4>— Mary K.</h4>
//         <span>⭐⭐⭐⭐⭐</span>
//       </div>

//       <div class="review-card">
//         <p>
//           “Excellent legal service. They truly care about justice and their
//           clients.”
//         </p>
//         <h4>— Samuel A.</h4>
//         <span>⭐⭐⭐⭐⭐</span>
//       </div>

//     </div>
//   </div>
// </section>



// <!-- contact form -->

// <section class="contact-section">
//   <div class="container">
//     <div class="contact-content">

//       <!-- Left Info -->
//       <div class="contact-left">
//         <h2>Contact Us</h2>
//         <p>If you have any questions or need legal advice, feel free to reach out. We are here to help you.</p>

//         <!-- Small info with icons -->
//         <div class="contact-info">
//           <div class="info-item">
//             <img src="phone-icon.png" alt="Phone Icon">
//             <span>+1 234 567 890</span>
//           </div>
//           <div class="info-item">
//             <img src="email-icon.png" alt="Email Icon">
//             <span>info@lawfirm.com</span>
//           </div>
//         </div>

//         <!-- Social Media -->
//         <h3>Follow Us</h3>
//         <div class="social-icons">
//           <a href="#"><img src="fb.png" alt="Facebook"></a>
//           <a href="#"><img src="ig.png" alt="Instagram"></a>
//           <a href="#"><img src="linkedin.png" alt="LinkedIn"></a>
//           <a href="#"><img src="whatsapp.png" alt="WhatsApp"></a>
//         </div>
//       </div>

//       <!-- Right Form -->
//       <div class="contact-right">
//         <form class="contact-form">
//           <input id="name"  type="text" placeholder="Your Name" required>
//           <input id="email" type="email" placeholder="Your Email" required>
//           <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>

//     </div>
//   </div>
// </section>


// <section class="map-section">
//   <iframe
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.419415184681!3d37.77492927975991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c1234567%3A0x123456789abcdef!2sLaw+Firm+Address!5e0!3m2!1sen!2sus!4v1671234567890!5m2!1sen!2sus"
//     width="100%"
//     height="400"
//     style="border:0;"
//     allowfullscreen=""
//     >
//   </iframe>
// </section>




// <!-- FOOTER -->
//  <footer class="footer">
//   <div class="container footer-content">

//     <!-- Column 1: Logo + Slogan -->
//     <div class="footer-col">
//       <img src="logo.png" alt="LawFirm Logo" class="footer-logo">
//       <p>Justice You Can Trust</p>
//     </div>

//     <!-- Column 2: Quick Links -->
//     <div class="footer-col">
//       <h4>Quick Links</h4>
//       <ul>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About Us</a></li>
//         <li><a href="#">Services</a></li>
//         <li><a href="#">Contact</a></li>
//       </ul>
//     </div>

//     <!-- Column 3: Contact Info -->
//     <div class="footer-col">
//       <h4>Contact Us</h4>
//       <p>Phone: +1 234 567 890</p>
//       <p>Email: info@lawfirm.com</p>
//       <p>Address: 123 Justice St, City, Country</p>
//     </div>

//     <!-- Column 4: Social Media -->
//     <div class="footer-col">
//       <h4>Follow Us</h4>
//       <div class="footer-social">
//         <a href="#"><img src="fb.png" alt="Facebook"></a>
//         <a href="#"><img src="ig.png" alt="Instagram"></a>
//         <a href="#"><img src="linkedin.png" alt="LinkedIn"></a>
//         <a href="#"><img src="whatsapp.png" alt="WhatsApp"></a>
//       </div>
//     </div>

//   </div>

//   <!-- Bottom Copyright -->
//   <div class="footer-bottom">
//     <p>© 2026 LawFirm. All Rights Reserved.</p>
//   </div>
// </footer>






// <script src="D-lawweb.js"></script>
// </body>
// </html>


// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: Arial, sans-serif;
// }
// header {
//   background: white;
//   box-shadow: 0 2px 10px rgba(0,0,0,0.1);
// }

// .darkmode {

//   background: rgba(0, 0, 0, 0.94);
//   color: white;
// }


// .header-container {
//   position: relative;
//   max-width: 1200px;
//   margin: auto;
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }



// header {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   background: white;
//   z-index: 1000;
// }

// .logo img {
//   width: 45px;
// }

// .nav-links {
//   display: flex;
//   align-items: center;
//   gap: 25px;
// }

// .nav-links a {
//   font-weight: 600;
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 23px;
//   text-decoration: none;
//   color: #222;
//   font-weight: 500;
// }

// .consult-btn {
//   background: orange;
//   color: white;
//   border: none;
//   padding: 10px 18px;
//   border-radius: 5px;
//   cursor: pointer;
// }

// /* Hamburger hidden on desktop */
// .hamburger {
//   font-size: 30px;
//   cursor: pointer;
//   display: none;
// }



//     .themeSwitch {
//       height: 50px;
//       width: 50px;
//       padding: 0;
//       border-radius: 50%;
//       background-color: white;
//       display: flex;
//       flex-wrap: nowrap;
//       justify-content: center;
//       align-items: center;
//       position: fixed  ;
//       top: 13px;
//       right: 80px;
  
   
     
      
//     }



// .hero {
//   height: 45rem;
//   width: 100%;
//   background-size: cover;
//   background-position: center;
//   transition: background-image 1s ease-in-out;
// }

// .hero-overlay {
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.55);
//   display: flex;
//   align-items: center;
// }

// .hero-content {
//   max-width: 1200px;
//   margin: auto;
//   padding: 20px;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// }

// .hero-text {
//   color: #fff;
//   max-width: 550px;
// }

// .hero-text h1 {
//   font-size: 58px;
//   font-weight: 700;
//   line-height: 1.2;
//   margin-bottom: 25px;
// }

// .hero-btn {
//   display: inline-block;
//   padding: 25px 28px;
//   background-color: #f5b400;
//   color: #000;
//   font-weight: bold;
//   text-decoration: none;
//   border-radius: 6px;
// }

// .hero-btn:hover {
//   background-color: #d99c00;
// }

// .hero-image img {
//   max-width: 420px;
//   width: 30rem;
//   margin-top: 119px;
//   height: 3rem;
// }






// /* Hmmm */


// .services {
//   padding: 80px 20px;
//   background-color: #f9f9f9;
// }

// .section-title {
//   text-align: center;
//   font-size: 36px;
//   margin-bottom: 50px;
//   color: #333;
// }

// .grid {
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 30px;
// }

// .grid-item {
//   background: #fff;
//   border-radius: 10px;
//   padding: 20px;
//   text-align: center;
//   box-shadow: 0 4px 15px rgba(0,0,0,0.05);
//   transition: transform 0.3s;
// }

// .grid-item:hover {
//   transform: translateY(-5px);
// }

// .grid-item img {
//   width: 60px;
//   height: 60px;
//   object-fit: contain;
//   margin-bottom: 15px;
// }

// .grid-item h3 {
//   font-size: 22px;
//   margin-bottom: 10px;
//   color: #007bff;
// }

// .grid-item p {
//   font-size: 16px;
//   color: #555;
//   line-height: 1.5;
// }





// /*  */



// .who-we-are {
//   padding: 100px 20px;
//   background-color: #f5f5f5;
// }

// .who-content {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   max-width: 1200px;
//   margin: auto;
//   gap: 40px;
// }

// .who-left {
//   flex: 1;
// }

// .who-title {
//   font-size: 36px;
//   color: #333;
//   position: relative;
//   display: inline-block;
//   margin-bottom: 20px;
// }

// .who-title::before {
//   content: '';
//   position: absolute;
//   left: 0;
//   bottom: -5px;
//   width: 200px;
//   height: 4px;
//   background-color: orange;
// }

// .experience {
//   font-size: 28px;
//   font-weight: bold;
//   margin-bottom: 15px;
//   color: #007bff;
// }

// .who-text {
//   font-size: 16px;
//   line-height: 1.6;
//   color: #555;
//   margin-bottom: 30px;
// }

// .counters {
//   display: flex;
//   gap: 40px;
//   margin-bottom: 30px;
// }

// .counter-box {
//   text-align: center;
// }

// .counter {
//   font-size: 36px;
//   font-weight: bold;
//   color: #ff6600;
// }

// .counter-box p {
//   font-size: 16px;
//   color: #333;
//   margin-top: 5px;
// }

// .btn {
//   display: inline-block;
//   padding: 12px 28px;
//   background-color: orange;
//   color: #fff;
//   font-weight: bold;
//   text-decoration: none;
//   border-radius: 6px;
// }

// .btn:hover {
//   background-color: #e65c00;
// }

// .who-right {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// }

// .who-right img {
//   width: 100%;
//   border-radius: 10px;
//   object-fit: cover;
// }






// .what-we-do {
//   padding: 100px 20px;
//   background-color: #ffffff;
// }

// .wwd-content {
//   display: flex;
//   align-items: flex-start;
//   gap: 40px;
//   max-width: 1200px;
//   margin: auto;
// }

// .wwd-left {
//   flex: 1;
// }

// .wwd-left img {
//   width: 100%;
//   border-radius: 10px;
//   object-fit: cover;
// }

// .wwd-right {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   gap: 25px;
// }


  

// .wwd-item img {
//   width: 50px;
//   height: 50px;
//   object-fit: contain;
// }

// .wwd-item h3 {
//   margin: 0 0 5px;
//   font-size: 18px;
//   color: #007bff;
// }

// .wwd-item p {
//   margin: 0;
//   font-size: 14px;
//   color: #555;
//   line-height: 1.4;
// }







// .reviews {
//   padding: 80px 20px;
//   background-color: #f9f9f9;
//   text-align: center;
// }

// .review-title {
//   font-size: 36px;
//   margin-bottom: 40px;
// }

// .review-wrapper {
//   overflow: hidden; /* hides extra reviews */
//   max-width: 800px;
//   margin: auto;
// }

// .review-track {
//   display: flex;
//   transition: transform 0.6s ease;
// }

// .review-card {
//   min-width: 100%;
//   background: #fff;
//   padding: 30px;
//   border-radius: 10px;
//   box-shadow: 0 5px 15px rgba(0,0,0,0.08);
// }

// .review-card p {
//   font-size: 18px;
//   line-height: 1.6;
//   color: #555;
//   margin-bottom: 20px;
// }

// .review-card h4 {
//   margin-bottom: 5px;
//   color: #333;
// }

// .review-card span {
//   color: orange;
//   font-size: 18px;
// }


// /* contact */
// .contact-section {
//   padding: 100px 20px;
//   background-color: #f5f5f5;
// }

// .contact-content {
//   display: flex;
//   gap: 50px;
//   max-width: 1200px;
//   margin: auto;
// }

// .contact-left {
//   flex: 1;
// }

// .contact-left h2 {
//   font-size: 36px;
//   margin-bottom: 15px;
// }

// .contact-left p {
//   margin-bottom: 30px;
//   color: #555;
//   line-height: 1.6;
// }

// /* Small info with icon */
// .contact-info {
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   margin-bottom: 30px;
// }

// .info-item {
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   font-size: 16px;
//   color: #333;
// }

// .info-item img {
//   width: 24px;
//   height: 24px;
// }

// /* Social Icons */
// .contact-left h3 {
//   margin-bottom: 15px;
// }

// .social-icons {
//   display: flex;
//   gap: 15px;
// }

// .social-icons img {
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
// }

// /* Right form */
// .contact-right {
//   flex: 1;
// }

// .contact-form input,
// .contact-form textarea {
//   width: 100%;
//   padding: 12px 15px;
//   margin-bottom: 15px;
//   border-radius: 6px;
//   border: 1px solid #ccc;
//   font-size: 16px;
// }

// .contact-form button {
//   padding: 12px 25px;
//   background-color: orange;
//   color: #fff;
//   border: none;
//   border-radius: 6px;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
// }

// .contact-form button:hover {
//   background-color: #e65c00;
// }





// /* FOOTER */

// .footer {
//   background-color: #222;
//   color: #fff;
//   padding: 60px 20px 20px 20px;
//   font-family: sans-serif;
// }

// .footer-content {
//   display: flex;
//   gap: 40px;
//   max-width: 1200px;
//   margin: auto;
//   flex-wrap: wrap;
// }

// .footer-col {
//   flex: 1;
//   min-width: 200px;
// }

// .footer-logo {
//   width: 150px;
//   margin-bottom: 15px;
// }

// .footer-col h4 {
//   margin-bottom: 15px;
//   font-size: 18px;
//   color: orange;
// }

// .footer-col ul {
//   list-style: none;
//   padding: 0;
//   margin: 0;
// }

// .footer-col ul li {
//   margin-bottom: 10px;
// }

// .footer-col ul li a {
//   text-decoration: none;
//   color: #fff;
//   transition: color 0.3s;
// }

// .footer-col ul li a:hover {
//   color: orange;
// }

// .footer-social {
//   display: flex;
//   gap: 15px;
//   margin-top: 10px;
// }

// .footer-social img {
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
//   transition: transform 0.3s;
// }

// .footer-social img:hover {
//   transform: scale(1.2);
// }

// .footer-bottom {
//   text-align: center;
//   margin-top: 30px;
//   border-top: 1px solid #444;
//   padding-top: 15px;
//   font-size: 14px;
//   color: #bbb;
// }





// /* map */

// .map-section {
//   width: 100%;
//   max-width: 1200px;
//   margin: 50px auto 0 auto;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 5px 20px rgba(0,0,0,0.1);
// }
// .map-section iframe {
//   width: 100%;
//   height: 400px;
//   border: none;
// }
