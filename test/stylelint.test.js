import test from 'ava';
import config from '../stylelint';

test('should return a object', (t) => {
  t.is(typeof config, 'object');
});

test('should return a object2', (t) => {
  t.pass();
});
