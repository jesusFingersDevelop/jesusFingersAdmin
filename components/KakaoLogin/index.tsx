import React from 'react';
import kakaoLoginImage from '@assets/images/kakao_login_medium_narrow.png';

const KakaoLogin = () => {
  const kakaoLoginHandler = () => {
    console.log('카카오로그인 api넣기');
  };
  return <img src={kakaoLoginImage} onClick={kakaoLoginHandler} alt="카카오톡 로그인하기" />;
};

export default KakaoLogin;
