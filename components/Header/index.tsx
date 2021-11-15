import React, {useState} from 'react';
import CommonModal from '@components/CommonModal';
import {useHistory} from 'react-router-dom';
import './index.scss';

const Header = () => {
  const [onAlarmModal, setOnAlarmModal] = useState<boolean>(false);
  const AlarmModal = <CommonModal setModal={setOnAlarmModal} innerContent={<div>알림사항들 나오게해야함</div>} />;
  const history = useHistory();
  const moveToProfile = () => {
    history.push('./reservations');
  };
  const moveToHome = () => {
    history.push('/');
  };
  return (
    <>
      <header>
        <div className="leftSideOfHeader" onClick={moveToHome}>
          logo
        </div>
        <div className="rightSideOfHeader">
          <div onClick={() => setOnAlarmModal(true)}>알람</div>
          <div onClick={moveToProfile}>프로필</div>
          {onAlarmModal ? AlarmModal : null}
        </div>
      </header>
    </>
  );
};

export default Header;
