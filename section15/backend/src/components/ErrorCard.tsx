import _ from "lodash";
import { When } from "react-if";

interface Props {
  title: string;
  message: string;
  onConfirm?: () => void;
}

export default function ErrorCard({ title, message, onConfirm }: Props) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>

      <When condition={ _.isFunction(onConfirm) }>
        <div id="confirmation-actions">
          <button onClick={onConfirm} className="button">
            Okay
          </button>
        </div>
      </When>

    </div>
  );
}

