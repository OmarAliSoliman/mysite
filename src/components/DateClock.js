import React, {useState, useEffect} from 'react';

function DateClock() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState('');

  useEffect(() => {
    setInterval(() => tick(), 1000);
    var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    setDate(date);
  },[])

  const tick=()=> {
    setTime(new Date());
  }

  return (
    <div className="date-clock">
      <span className="current_time_date time_desktop">
        <span role="img" aria-label="emoji-moon">🕑 </span>
        <span>{date}</span>&nbsp;<span>{time.toLocaleTimeString()}</span>
      </span>
      <span className="current_time_date time_mobile">
        <span role="img" aria-label="emoji-moon">🕑 </span>
        <span>{date}</span><br/><span>{time.toLocaleTimeString()}</span>
      </span>
    </div>
  )
}

export default DateClock
