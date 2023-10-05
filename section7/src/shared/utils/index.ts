// // see https://stackoverflow.com/a/34926643 for a concise explanation on barrels
// export * from './objects.utils';

import * as lang from './lang.utils';
import * as objects from './objects.utils';

const u = {
  ...objects,
  ...lang
}; // to be augmented

export default u;
