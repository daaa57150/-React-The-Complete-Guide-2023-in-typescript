import { Concept } from "../models/concept";

interface ConceptCardProps {
  concept: Concept
}

export default function ConceptCard({ concept }: ConceptCardProps) {
  return (
    <li className="concept">
      <img src={ concept.image } alt={ concept.title } />
      <h2>{ concept.title }</h2>
      <p>{ concept.description }</p>
    </li>
  );
}
