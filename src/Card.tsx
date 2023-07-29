type Props = {
  cardImageSrc: string,
  cardImageAlt: string,
  numberedHeading: string,
  textHeading: string,
  textBody: string
}
export default function Card({cardImageSrc, cardImageAlt, numberedHeading, textHeading, textBody}: Props) {
  return (
    <div className="flex">
      <img src={cardImageSrc} alt={cardImageAlt} />
      <div>
        <h2>{numberedHeading}</h2>
        <h3>{textHeading}</h3>
        <p>{textBody}</p>
      </div>
    </div>
  );
}
