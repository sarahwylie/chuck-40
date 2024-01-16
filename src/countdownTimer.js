import { useCountdown } from './hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay'

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <p>You're 40</p>
      <span>HAPPY BIRTHDAY!!!</span>
      <p>Can't wait for another year with you...</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <span className="countdown-link">
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </span>
    </div>
  );
};

const targetDate = '2024-12-08T00:00:00'; //YYYY-MM-DDTHH:mm:ss.sssZ

const CountdownTimer = () => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
