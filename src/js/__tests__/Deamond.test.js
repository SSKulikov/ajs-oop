import Daemon from '../Daemon';

test('test create Daemon', () => {
  expect(new Daemon('Chaos')).toEqual({
    name: 'Chaos',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});
