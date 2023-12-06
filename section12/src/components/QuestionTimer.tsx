import { useEffect, useState } from "react";


interface Props {
  timeoutMilliseconds: number;
  onTimeout: () => void;
}

export default function QuestionTimer({ timeoutMilliseconds, onTimeout }: Props) {

  console.log('rendering QuestionTimer');
  const [remainingTime, setRemainingTime] = useState(timeoutMilliseconds);

  useEffect(() => {
    console.log('setTimeout');
    const timeout = setTimeout(onTimeout, timeoutMilliseconds);
    return () => clearTimeout(timeout);
  }, [timeoutMilliseconds, onTimeout]);

  useEffect(() => {
    console.log('setInterval');
    const interval = setInterval(() => setRemainingTime(prev => prev - 1000), 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <progress id="question-time" max={ timeoutMilliseconds } value={ remainingTime }>

    </progress>
  );
}
