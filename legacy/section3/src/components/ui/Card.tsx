import './Card.css';
import { PropsWithChildren } from 'react'

interface CardProps {
  className: string
}

export default function Card({ children, className }: PropsWithChildren<CardProps>) {
  return (
    <div className={ className + ' card' }>
      {children}
    </div>
  );
}
