import axios from 'axios';
import React, {useEffect} from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}
const {Kakao} = window;

const LoginModal = () => {
  // 카카오 초기화
  useEffect(() => {
    Kakao.init(process.env.REACT_APP_KAKAO_REST_API_KEY);
  });

  // 카카오 인가 코드를 받고 나서 회원가입 or 로그인 진행
  const kakaoAccessCode = new URL(window.location.href).searchParams.get('code');
  useEffect(() => {
    if (kakaoAccessCode) axios.post(`${process.env.SERVER_URL}/api/v1/users/kakaocode`, {code: kakaoAccessCode}).then((res) => console.log(res));
  });

  // 카카오 인가 코드 받기
  const getKakaoAccessCode = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  return (
    <>
      로그인이 될거에요
      <a href={getKakaoAccessCode}>여기를 눌러보세요</a>
    </>
  );
};

export default LoginModal;
