import React, {useState} from 'react';
import moment, {Moment} from 'moment';
import Header from '@components/Header';

import {useHistory} from 'react-router-dom';

const MonthCalender = () => {
  const [getDate, setGetDate] = useState(moment());

  const changeMonth = (calc: number) => {
    setGetDate(getDate.clone().add('months', calc));
  };
  const reservedUserList = [
    {providerId: 'provider', userName: '송영진', therapyDay: '2021-10-17', therapyTime: '11:30'},
    {providerId: 'provider', userName: '최봉수', therapyDay: '2021-11-17', therapyTime: '14:30'},
    {providerId: 'provider', userName: '최봉수2', therapyDay: '2021-11-17', therapyTime: '15:30'},
    {providerId: 'provider', userName: '유지민', therapyDay: '2021-11-02', therapyTime: '16:30'},
    {providerId: 'provider', userName: '황순범', therapyDay: '2021-11-24', therapyTime: '10:00'},
  ];

  const weekList = [
    {DayOfTheWeek: '일', color: 'red'},
    {DayOfTheWeek: '월', color: 'black'},
    {DayOfTheWeek: '화', color: 'black'},
    {DayOfTheWeek: '수', color: 'black'},
    {DayOfTheWeek: '목', color: 'black'},
    {DayOfTheWeek: '금', color: 'black'},
    {DayOfTheWeek: '토', color: 'blue'},
  ];

  const thisMonthDays = [];
  const firstWeek = getDate.clone().startOf('month').week();
  const lastWeek = getDate.clone().endOf('month').week() === 1 ? 53 : getDate.clone().endOf('month').week();
  let week = firstWeek;

  for (week; week <= lastWeek; week++) {
    thisMonthDays.push(
      Array(7)
        .fill(0)
        .map((data, index) => {
          let days: Moment = getDate.clone().startOf('year').week(week).startOf('week').add(index, 'day');
          return days;
        }),
    );
  }
  const reservedUser = (daysItem: Moment) => {
    return reservedUserList.filter((item) => (item.therapyDay === daysItem.format('YYYY-MM-DD') ? item.userName : null));
  };

  const history = useHistory();
  const onSwitchDayCalendarHandler = (daysItem: any) => {
    history.push('/day', daysItem.format('YYYY-MM-DD'));
  };
  return (
    <>
      <Header />
      <div>
        <button onClick={() => changeMonth(-1)}>이전달</button>
        {getDate.format('YYYY 년 MM 월')}
        <button onClick={() => changeMonth(1)}>다음달</button>
      </div>

      <table>
        <thead>
          <tr>
            {weekList.map((item, idx) => (
              <th key={idx} style={{color: item.color}}>
                {item.DayOfTheWeek}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {thisMonthDays.map((weekItem, weekIdx) => (
            <tr key={weekIdx}>
              {weekItem.map((daysItem, daysIdx) => (
                <td
                  onClick={() => onSwitchDayCalendarHandler(daysItem)}
                  style={daysItem.format('MM') === getDate.format('MM') ? {backgroundColor: 'gray'} : {backgroundColor: 'red'}}
                  key={weekIdx * 10 + daysIdx}
                >
                  {daysItem.format('DD')}
                  <br />

                  {reservedUser(daysItem).map((item, idx) => (
                    <th key={idx}>{item.userName}</th>
                  ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MonthCalender;
