import LoginModal from '@components/LoginModal';
import React from 'react';
import './index.scss';

const SignUp = () => {
  const envTest = process.env.REACT_APP_ENV;
  return (
    <>
      <h1 className={'test1'}>회원가입사이트</h1>
      <LoginModal />
    </>
  );
};

export default SignUp;
