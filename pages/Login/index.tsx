import React, {useState} from 'react';
import './index.scss';
import CommonModal from '@components/CommonModal';
import KakaoLogin from '@components/KakaoLogin';

const Login = () => {
  const [loginModal, setLoginModal] = useState<boolean>(true);
  return (
    <>
      <div onClick={() => setLoginModal(true)}>로그인하러가기</div>
      {loginModal ? (
        <CommonModal
          setModal={setLoginModal}
          innerContent={
            <div className="loginModalWrapper">
              <div>jesusfinger</div>
              <div>asdfasdfdsf</div>
              <KakaoLogin />
            </div>
          }
        />
      ) : null}
    </>
  );
};

export default Login;
