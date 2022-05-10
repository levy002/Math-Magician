import calculate from '../calculate';

it('return "null" as value to every property when "AC" button is clicked', () => {
  const obj1 = { total: null, next: null, operation: null };
  const obj2 = { total: 10, next: null, operation: null };

  expect(calculate(obj1, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
  expect(calculate(obj2, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
});

it('Test calculate logic on operations', () => {
  const obj1 = { total: 10, next: 5, operation: '+' };
  const obj2 = { total: 10, next: 5, operation: '-' };
  const obj3 = { total: 10, next: 5, operation: 'x' };
  const obj4 = { total: 10, next: 5, operation: '÷' };

  expect(calculate(obj1, '=')).toStrictEqual({ total: '15', next: null, operation: null });
  expect(calculate(obj2, '=')).toStrictEqual({ total: '5', next: null, operation: null });
  expect(calculate(obj3, '=')).toStrictEqual({ total: '50', next: null, operation: null });
  expect(calculate(obj4, '=')).toStrictEqual({ total: '2', next: null, operation: null });
});

it('returns the correct error message when using modulo with zero', () => {
  const obj = { total: '110', next: '0', operation: '%' };

  expect(calculate(obj, '=')).toStrictEqual({
    total: "Can't find modulo as can't divide by 0.",
    next: null,
    operation: null,
  });
});

it('returns the correct error message when dividing by zero', () => {
  const obj = { total: '13', next: '0', operation: '÷' };

  expect(calculate(obj, '=')).toEqual({
    total: "Can't divide by 0.",
    next: null,
    operation: null,
  });
});

it('returns the correct result when "DOT" is clicked', () => {
  const obj = { total: '13', next: '15', operation: null };

  expect(calculate(obj, '.')).toEqual({ total: '13', next: '15.', operation: null });
});

it('returns the correct reusult when "+/-" button is clicked', () => {
  const obj1 = { total: '13', next: '5', operation: null };
  const obj2 = { total: '13', next: '-5', operation: null };
  const obj3 = { total: '13', next: null, operation: null };
  const obj4 = { total: '-13', next: null, operation: null };

  expect(calculate(obj1, '+/-')).toEqual({ total: '13', next: '-5', operation: null });
  expect(calculate(obj2, '+/-')).toEqual({ total: '13', next: '5', operation: null });
  expect(calculate(obj3, '+/-')).toEqual({ total: '-13', next: null, operation: null });
  expect(calculate(obj4, '+/-')).toEqual({ total: '13', next: null, operation: null });
});
