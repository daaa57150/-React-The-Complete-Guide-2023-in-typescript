
import classNames from 'classnames';

export type Styles = Record<string, string>;
// Object containing the style name as a key and a boolean as a value
type StylesSwitches<T extends Styles> = Record<keyof T, boolean>;
// Either a style name or some StylesSwitches
type StylesPicker<T extends Styles> = keyof T | Partial<StylesSwitches<T>>

const extractActiveStyles = <T extends Styles>(switches: Partial<StylesSwitches<T>>) =>
  Object.entries(switches)
    .filter(([, val]) => val!!)
    .map(([key,]) => key);

/** Builds the full className of the styles given class names or switch objects */
export function buildCssClassName<T extends Styles>(styles: T, ...classes: Array<StylesPicker<T>>): string {
  const names = classes.flatMap(cssClass => {
    if(typeof(cssClass) === 'string') return [cssClass];
    return extractActiveStyles(cssClass as Partial<StylesSwitches<T>>);
  });
  const bound = names.map(name => styles[name]);
  return classNames(bound);
}

/** Returns a function that can extract the full className of the styles given class names or switch objects */
export function css<T extends Styles>(styles: T) {
  return (...classes: Array<StylesPicker<T>>) => buildCssClassName(styles, ...classes);
}
