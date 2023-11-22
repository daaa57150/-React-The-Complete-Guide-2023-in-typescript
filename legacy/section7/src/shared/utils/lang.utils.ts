import _ from 'lodash';

export function isNilOrWhitespace(str: string) {
  return _.isNil(str) || str.replace(/\s/g, '').length === 0;
}
