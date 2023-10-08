import Magician from '../Magician';

test('test create Magician', () => {
  expect(new Magician('Garri')).toEqual({
    name: 'Garri',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});
