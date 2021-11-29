import React, {useState} from 'react';
import './index.scss';
import CommonModal from '@components/CommonModal';
import KakaoLogin from '@components/KakaoLogin';
import Header from '@components/Header';
import {useHistory} from 'react-router';

const Login = () => {
  const [onLoginModal, setOnLoginModal] = useState<boolean>(false);
  const history = useHistory();

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

  const moveToMonth = () => {
    history.push('./month');
  };

  return (
    <>
      <Header />
      <div onClick={() => moveToMonth()}>캘린더 보러가기</div>
      <div onClick={() => setOnLoginModal(true)}>로그인하러가기</div>
      {onLoginModal ? loginModal : null}
    </>
  );
};

export default Login;
