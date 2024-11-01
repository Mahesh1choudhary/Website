import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

{/* 
    
    Advanced C++, ultra low latency, quantitative research, etc
    
    */}




function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahesh Choudhary </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            I completed my{" "}
            <i>
              <b className="purple">B.Tech from Indian Institute of Technology, Delhi (IIT Delhi) in 2024 </b> 
            </i>
            where I earned a degree in Electrical Engineering.
            During my academic journey, I worked in several programming languages including{" "}
            <i>
              <b className="purple">C++, Python, Java, MySQL, Javascript </b> 
            </i> 
            , etc. Nowadays, I am fluent in{" "}
            <i>
              <b className="purple"> C++, Java, MySQL. </b>
            </i>
            <br />
            <br />
            I have solid foundation in{" "}
            <i>
              <b className="purple">Data Structures and Algorithms, Operating System Concepts, Database Management and Object Oriented Programming Concepts</b> 
            </i> 
            , I have continuously applied this knowledge in my projects.
            <br />
            <br />
            I have strong interest particulary in C++. I am proficient in C++ and have been practising it for 3+ years. I am well versed in{" "}
            <i>
              <b className="purple"> multithreading and concurrency</b>
            </i>
            &nbsp; libraries of C++. I like writing highly optimised programs

            <br />
            <br />
            Currently I am working at
            <i>
              <b className="purple"> Flipkart as software engineer.</b>
            </i> 
            <br />
            I Interned at Texas Instruments and Also worked as C++ developer at cadence design systems for some months.


            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching anime or sitcoms
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/*}
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
          */}

<br/>
            <br/>

            <h1 style={{ fontSize: "2.6em" }}>
              My <span className="purple"> COMPETITIVE PROGRAMMING </span> Journey
            </h1>
            <p className="home-about-body">
              I like solving problems and finding better solutions to problems. I have strong understanding
              of major data structures and algorithms. I do competitive programming as a hobby or when I feel stressful
              or when I don't want to do anything else. I have solved 1500+ programming problems across various platforms

              <br/>
              <br/>
              I solve problems and participate in contests mostly on{" "}
              <i>
                <b className="purple"> Codeforces and Codechef </b>
              </i>
              &nbsp; and sometimes on leetcode and hackerrank.

              <br/>
              <br/>
              I am
              <i>
                <b className="purple"> Expert on Codeforces (highest rating- 1779)</b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> 5 star on Codechef (highest rating- 2048)</b>
              </i>

              <br/>
              <br/>
              My
              <i>
                <b className="purple"> Codeforces Account</b>
              </i>
              &nbsp;{" - "}
              <a
                  href="https://codeforces.com/profile/maheshc1"
                  target="_blank"
                  rel="noreferrer"
                  className="link-colour"
                  style={{ color: 'aqua', fontWeight: 'bold', textDecoration: 'none',
                     fontSize: '1em',fontFamily: 'Optima, sans-serif', letterSpacing: '1px',
                     textTransform: 'none' }}
                >
                  maheshc1
              </a>


              <br/>
              <br/>
              My
              <i>
                <b className="purple"> Codechef Account </b>
              </i>
              &nbsp;{" - "}
              <a
                  href="https://www.codechef.com/users/mahesh_1j"
                  target="_blank"
                  rel="noreferrer"
                  className="link-color"
                  style={{ color: 'aqua', fontWeight: 'bold', textDecoration: 'none',
                    fontSize: '1em',fontFamily: 'Optima, sans-serif', letterSpacing: '1px',
                    textTransform: 'none' }}
                >
                  mahesh_1j
              </a>

            </p>
        </blockquote>
        
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
