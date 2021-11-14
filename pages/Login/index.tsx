import React, {useState} from 'react';
import './index.scss';
import CommonModal from '@components/CommonModal';

interface IProps {}

const Login = () => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  return (
    <>
      로그인
      <CommonModal
        setModal={setLoginModal}
        innerContent={
          <div className="loginModalWrapper">
            로그인하기
            <button>카캉</button>
          </div>
        }
      ></CommonModal>
    </>
  );
};

export default Login;
