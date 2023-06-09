import React from "react";
// import  CV from "../../assets/CV.pdf"
const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1mwzsk4baQLMQz7K-Xfm8c14eVry-6P7x/view?usp=share_link"
        target="_blank"
        rel="noreferrer"
        download
        className="btn"
      >
        DOWNLOAD CV
      </a>
      <a href="#contact" className="btn btn-primary">
        LET'S TALK
      </a>
    </div>
  );
};

export default CTA;
