const math = require('./ex1');

test('ex1', () => {
  math.randomNumber = jest
    .fn()
    .mockReturnValue(10);
  
  expect(math.randomNumber()).toEqual(10);
  expect(math.randomNumber).toHaveBeenCalled();
  expect(math.randomNumber).toHaveBeenCalledTimes(1);
});
