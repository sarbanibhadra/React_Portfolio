import React from 'react';
import Background from '../images/backgroundImg.jpg';
import me from '../images/Me.jpeg';

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6"
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  },
  content: {
    height: 800,
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"

  }
};

function About() {
  return (
    <div
      className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-blue"
      //style="background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp');"
      style={styles.content}
      >
      <h1 className="mb-3 h2">About Me</h1>
    
      <p>
      Highly efficient, motivated and experienced Software Professional currently working with Sky as a 
      Software Developer in Python. Previously, worked with TCS as JAVA developer for seven years. 
      Before joining Sky as a developer, I have earned PhD in Application of computer in next-generation 
      health care from the University of Southampton. Apart from my computational modelling and programming skills, 
      I have excellent analytical skills and I am also good at debugging critical issues. I have excellent communication skills, 
      which helped me in client management, requirement gathering, requirement feasibility analysis and requirement sign-off 
      in all my past and current roles.
      </p>
      <img src={me} />
      {/* <div class="imgBox">
        <img src="url" alt="abc" height="auto" width="40%" id="image-section"/>
      </div> */}
      
    </div>

  );
}

export default About;
// function Card() {
//   return (
//     <div style={styles.card}>
//       <div style={styles.heading}>Lorem ipsum dolor</div>
//       <div style={styles.content}>
//         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
//         laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
//         architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//         aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
//         voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
//         consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
//         dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
//         exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
//         consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
//         molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//       </div>
//     </div>
//   );
// }
// export default Card;
