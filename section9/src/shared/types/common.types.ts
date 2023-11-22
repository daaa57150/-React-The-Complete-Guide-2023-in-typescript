import { BaseSyntheticEvent } from "react";

// used in Forms
export type PropertyUpdateFn<T> = <TK extends keyof T>(key: TK, val: T[TK]|null) => void;

// common react events with shortened notation
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>;
export type DomEvent = BaseSyntheticEvent;
