import React, {useState} from 'react';
import './index.scss';
import CommonModal from '@components/CommonModal';
import KakaoLogin from '@components/KakaoLogin';

interface IProps {}

const Login = () => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
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
