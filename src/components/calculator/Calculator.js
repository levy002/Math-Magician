import React, { useState } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import calculate from '../logic/calculate';
import 'animate.css';
import './Calculator.css';

const operators = ['÷', 'x', '-', '+', '='];
const digits = [
  'AC',
  '+/-',
  '%',
  '7',
  '8',
  '9',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  '0',
  '00',
  '.',
];

const Calculator = () => {
  const [obj, calcObj] = useState({
    next: '',
    total: '',
    operation: '',
  });

  const handleClick = (btn) => {
    const { total, next, operation } = calculate(obj, btn);
    if (next === null && total === null) {
      calcObj({ next, total: '', operation });
    } else {
      calcObj({ next, total, operation });
    }
  };

  return (
    <div className="calc">
      <div className="calc-animation">
        <h3 className="animate__animated animate__pulse animate__infinite">Let&apos;s do some Maths</h3>
        <MdOutlineDoubleArrow className="arrow" />
      </div>
      <ul className="calc-body">
        <li data-testid="calc-screen" className="calc-screen">{obj.next || obj.total || '0'}</li>
        <li className="calc-keyboard">
          <div className="calc-digits">
            {digits.map((btn) => (
              <button
                onClick={() => handleClick(btn)}
                type="button"
                key={btn}
                id={btn}
              >
                {btn}
              </button>
            ))}
          </div>
          <div className="calc-operators">
            {operators.map((btn) => (
              <button onClick={() => handleClick(btn)} type="button" key={btn}>
                {btn}
              </button>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Calculator;
