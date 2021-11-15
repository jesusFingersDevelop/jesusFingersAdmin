import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router';
import moment from 'moment';

const DayCalendar = () => {
  const location = useLocation();
  const initialDate = location.state || moment().format('YYYY-MM-DD');
  const [getDate, setGetDate] = useState<any>(initialDate);

  const reservedUserList = [
    {providerId: 'provider', userName: '송영진', therapyDay: '2021-11-15', therapyTime: '11:30'},
    {providerId: 'provider', userName: '최봉수', therapyDay: '2021-11-16', therapyTime: '12:30'},
    {providerId: 'provider', userName: '최봉수2', therapyDay: '2021-11-17', therapyTime: '13:00'},
    {providerId: 'provider', userName: '유지민', therapyDay: '2021-11-18', therapyTime: '14:30'},
    {providerId: 'provider', userName: '황순범', therapyDay: '2021-11-19', therapyTime: '18:30'},
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
  const changeDay = (calc: number) => {
    setGetDate(moment(getDate).add(calc, 'days').format('YYYY-MM-DD'));
  };

  return (
    <>
      <div>
        <div>
          <button onClick={() => changeDay(-1)}>이전일</button>
          {getDate}
          <button onClick={() => changeDay(1)}>다음날</button>
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
      </div>
    </>
  );
};

export default DayCalendar;
