import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className='imageclass img'>
        <img src='/rrg.png' alt='logo' />
      </div>
      <div className='textclass'>
        <h1>About this app</h1>
        <p>App to search github user</p>
        <p>Version: 1.0.0</p>
      </div>
    </Fragment>
  );
};

export default About;
