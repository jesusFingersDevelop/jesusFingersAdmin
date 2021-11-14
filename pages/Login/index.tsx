import React, {useState} from 'react';
import './index.scss';
import CommonModal from '@components/CommonModal';
import KakaoLogin from '@components/KakaoLogin';

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
              <div>여기서 이제 로그인도 하고 커스텀도 하면 됩니다.</div>
              <KakaoLogin />
            </div>
          }
        />
      ) : null}
    </>
  );
};

export default Login;
