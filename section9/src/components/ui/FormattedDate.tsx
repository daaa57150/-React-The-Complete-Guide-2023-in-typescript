interface Props {
  date: Date
}

export default function FormattedDate({ date }: Props) {

  return (
    <>
      { date.toLocaleDateString("fr-FR") }
    </>
  );
}
