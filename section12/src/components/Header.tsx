import logo from '@assets/quiz-logo.png';

interface Props {

}

export default function Header(props: Props) {
  console.log('yo');
  return (
    <header>
      <img src={ logo } alt="Quizz logo" />
      <h1>ReactQuizz</h1>
    </header>
  );
}
