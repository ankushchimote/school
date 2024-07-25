import React from "react";
import principle from "../../assets/principle.png";
import "./Faculty.css";

const Faculty = () => {
  return (
    <>
      <h1>Administration</h1>
      <div className="main">
        <div className="principle">
            <img src={principle} />
            <h3>John Doe</h3>
            <h4>Princple</h4>
            <p> M.Ed, 20 years of experience in educational administration.</p>
        </div>

        <div className="principle">
            <img src={principle} />
            <h3>Jane Smith</h3>
            <h4>Vice Principal</h4>
            <p> M.Sc. in Physics, 15 years of teaching experience.</p>
        </div>
      </div>

      <h1>Our Teachers</h1>
      <div className="teachers">
      <div className="main">
        <div className="principle">
            <img src={principle} />
            <h3>Emily Johnson</h3>
            <h4>English Teacher</h4>
            <p> M.A. in English, 10 years of teaching experience.</p>
        </div>

        <div className="principle">
            <img src={principle} />
            <h3>Michael Brown</h3>
            <h4>Mathematics Teacher</h4>
            <p> M.Sc. in Mathematics, 8 years of teaching experience.</p>
        </div>
      </div>
      <div className="main">
        <div className="principle">
            <img src={principle} />
            <h3>Sophia Davis</h3>
            <h4>Science Teacher</h4>
            <p> M.Sc. in Chemistry, 12 years of teaching experience.</p>
        </div>

        <div className="principle">
            <img src={principle} />
            <h3>David Wilson</h3>
            <h4>Computer Science Teacher,</h4>
            <p>B.Tech in Computer Science, 5 years of teaching experience.</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Faculty;



