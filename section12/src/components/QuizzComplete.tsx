import img from '@assets/quiz-complete.png';

interface Props {

}

export default function QuizzComplete(props: Props) {

  return (
    <div id="summary">
      <img src={ img }  alt="trophy icon" />
      <h2>Finito</h2>
    </div>
  );
}
