import { useEffect, useState } from 'react';

const useCountdown = () => {
  const deadline = new Date('2024-01-08T00:00:00').getTime();
  const d = new Date().getTime();

  const [countDown, setCountDown] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(deadline - d);
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline, d]);

  return getTimeRemaining(countDown);
};

const getTimeRemaining = () => {
  const total = Date.parse(new Date('2024-12-08T00:00:00')) - Date.parse(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return [days, hours, minutes, seconds];
};

export { useCountdown };
