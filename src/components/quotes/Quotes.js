import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Quotes.css';

const Quotes = () => {
  const randomQuotes = [
    {
      quote: 'The essence of mathematics resides in its freedom.',
      id: uuidv4,
      creator: 'Georg Cantor',
    },
    {
      quote: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
      id: uuidv4,
      creator: 'Shakuntala Devi',
    },
    {
      quote: 'Mathematics is the most beautiful and most powerful creation of the human spirit.',
      id: uuidv4,
      creator: 'Stefan Banach',
    },
    {
      quote: 'Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.',
      id: uuidv4,
      creator: 'Richard Courant',
    },
    {
      quote: 'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.',
      id: uuidv4,
      creator: 'Albert Einstein',
    },
  ];

  return (
    <ul className="quotes-Container">
      {randomQuotes.map((q) => (
        <li key={q.id}>
          <p className="quote">
            &#34;
            {q.quote}
            &#34;
          </p>
          <p className="creator">{q.creator}</p>
        </li>
      ))}
    </ul>
  );
};

export default Quotes;
