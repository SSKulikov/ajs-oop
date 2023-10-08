import Bowman from '../Bowman';

test('test create Bowman', () => {
  expect(new Bowman('Strelok')).toEqual({
    name: 'Strelok',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});
