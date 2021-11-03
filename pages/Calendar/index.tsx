import React, {useEffect, useState} from 'react';
import moment from 'moment';

const Calender = () => {
  const [getDate, setGetDate] = useState(moment());

  const changeMonth = (calc: number) => {
    setGetDate(getDate.clone().add('months', calc));
  };

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
          let days = getDate.clone().startOf('year').week(week).startOf('week').add(index, 'day');
          return days;
        }),
    );
  }
  return (
    <>
      <div>
        <button onClick={() => changeMonth(-1)}>이전달</button>
        {getDate.format('YYYY 년 MM 월')}
        <button onClick={() => changeMonth(1)}>다음달</button>
      </div>
      {thisMonthDays.map((n, i) => {
        {
          n;
        }
      })}
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
                <td key={weekIdx * 10 + daysIdx}>{daysItem.format('DD')}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Calender;
