import React from 'react';
import './index.scss';

const SignUp = () => {
  const test = process.env.REACT_APP_ENV;
  console.log(test);
  return (
    <>
      <h1>랜딩페이지{test}</h1>
    </>
  );
};

export default SignUp;
