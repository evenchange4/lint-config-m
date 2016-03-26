import test from 'ava';
import config from '../eslint';

test('should return a object', t => {
  t.is(typeof config, 'object');
});

test('using babel-eslint', (t) => {
  t.is(config.parser, 'babel-eslint');
});
