import operate from '../operate';

it('Addition operation to provide collect result', () => {
  const test1 = operate(6, 4, '+');
  const test2 = operate(25, 25, '+');
  const test3 = operate(1, 100, '+');

  expect(test1).toBe('10');
  expect(test2).toBe('50');
  expect(test3).toBe('101');
});

it('Substraction operation to provide collect result', () => {
  const test1 = operate(6, 4, '-');
  const test2 = operate(25, 25, '-');
  const test3 = operate(1, 100, '-');

  expect(test1).toBe('2');
  expect(test2).toBe('0');
  expect(test3).toBe('-99');
});

it('Division operation to provide collect result', () => {
  const test1 = operate(4, 2, '÷');
  const test2 = operate(25, 0, '÷');

  expect(test1).toBe('2');
  expect(test2).toBe("Can't divide by 0.");
});

it('Multiplication operation to provide collect result', () => {
  const test1 = operate(6, 4, 'x');
  const test2 = operate(25, 25, 'x');
  const test3 = operate(-1, 10, 'x');

  expect(test1).toBe('24');
  expect(test2).toBe('625');
  expect(test3).toBe('-10');
});

it('Module operation to provide collect result', () => {
  const test1 = operate(6, 4, '%');
  const test2 = operate(25, 25, '%');
  const test3 = operate(-1, 10, '%');
  const test4 = operate(6, 0, '%');

  expect(test1).toBe('2');
  expect(test2).toBe('0');
  expect(test3).toBe('-1');
  expect(test4).toBe("Can't find modulo as can't divide by 0.");
});
