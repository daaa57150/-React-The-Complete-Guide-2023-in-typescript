import { Concept } from "../models/concept";
import ConceptCard from "./ConceptCard";

interface ConceptListProps {
  concepts: Concept[];
}

export default function ConceptList({ concepts }: ConceptListProps) {
  return (
    <ul id="concepts">
      { concepts.map(concept => <ConceptCard concept={concept} />) }
    </ul>
  );
}
