import _ from 'lodash';

export const merge = <T>(obj: T, ...slices: Array<Partial<T>>): T => {
  return _.merge({...obj}, ...slices);
}
