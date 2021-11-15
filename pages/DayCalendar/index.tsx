import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router';
import Header from '@components/Header';
import moment from 'moment';
import CommonModal from '@components/CommonModal';

import './index.scss';

const DayCalendar = () => {
  const location = useLocation();
  const initialDate = location.state || moment().format('YYYY-MM-DD');
  const [getDate, setGetDate] = useState<any>(initialDate);
  const [onCreateModal, setOnCreateModal] = useState(false);

  const reservedUserList = [
    {providerId: 'provider', userName: '송영진', therapyDay: '2021-10-17', therapyTime: '11:30'},
    {providerId: 'provider', userName: '최봉수', therapyDay: '2021-11-17', therapyTime: '14:30'},
    {providerId: 'provider', userName: '최봉수2', therapyDay: '2021-11-17', therapyTime: '15:30'},
    {providerId: 'provider', userName: '유지민', therapyDay: '2021-11-02', therapyTime: '16:30'},
    {providerId: 'provider', userName: '황순범', therapyDay: '2021-11-24', therapyTime: '10:00'},
  ];

  const reservedUser = (reservedTime: string) => {
    return reservedUserList.filter((item) => item.therapyDay === getDate).filter((item) => item.therapyTime === reservedTime);
  };

  const dayScheule = [
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
  ];

  const changeDayHendler = (calc: number) => {
    setGetDate(moment(getDate).add(calc, 'days').format('YYYY-MM-DD'));
  };

  const createTherapySchduleModal = (
    <CommonModal
      setModal={setOnCreateModal}
      innerContent={
        <form>
          <input type="time" step="1800" onChange={(e) => console.log(e.target.value)} />
          <input type="submit" />
        </form>
      }
    />
  );

  return (
    <>
      <Header />
      <div className="dayCalendarWrapper">
        <div>
          <button onClick={() => changeDayHendler(-1)}>이전일</button>
          {getDate}
          <button onClick={() => changeDayHendler(1)}>다음날</button>
        </div>
        <tr>
          <th>시간</th>
          <th>스케쥴</th>
        </tr>
        {dayScheule.map((item, idx) => (
          <tr>
            <td>{item}</td>
            {reservedUser(item).map((item) => (
              <td>{item.userName}</td>
            ))}
          </tr>
        ))}
        <div
          onClick={() => {
            setOnCreateModal(true);
          }}
        >
          일정추가하기
        </div>
        {onCreateModal ? createTherapySchduleModal : null}
      </div>
    </>
  );
};

export default DayCalendar;
