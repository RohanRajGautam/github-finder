import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className='imageclass img'>
        <img src='/rrg.png' alt='logo' />
      </div>
      <div className='textclass'>
        <h1>
          <u>About this app</u>
        </h1>
        <p>React app to search Github profiles.</p>
        <p>Version: 1.0.0</p>
        <p>
          Created by{" "}
          <a
            href='https://www.rohangautam.com.np'
            target='_blank'
            rel='noopener noreferrer'
          >
            Rohan Gautam
          </a>
        </p>
        <p className='float-right'>
          View this project on{" "}
          <a
            href='https://github.com/RohanRajGautam/github-finder'
            target='_blank'
            rel='noopener noreferrer'
          >
            my Github
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default About;
