import validatePalidrome from './validatePalidrome';

test('validatePalidrome', () => {
  expect(validatePalidrome.defaultSolution('dasabcbafsdj')).toBeTruthy();
});
