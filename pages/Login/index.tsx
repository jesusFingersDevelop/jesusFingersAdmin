import React, {useState} from 'react';
import './index.scss';
import CommonModal from '@components/CommonModal';
import KakaoLogin from '@components/KakaoLogin';
import Header from '@components/Header';

const Login = () => {
  const [onLoginModal, setOnLoginModal] = useState<boolean>(false);
  const loginModal = (
    <CommonModal
      setModal={setOnLoginModal}
      innerContent={
        <div className="loginModalWrapper">
          <div>jesusfinger</div>
          <div>여기서 이제 로그인도 하고 커스텀도 하면 됩니다.</div>
          <KakaoLogin />
        </div>
      }
    />
  );

  return (
    <>
      <Header />
      <div onClick={() => setOnLoginModal(true)}>로그인하러가기</div>
      {onLoginModal ? loginModal : null}
    </>
  );
};

export default Login;
