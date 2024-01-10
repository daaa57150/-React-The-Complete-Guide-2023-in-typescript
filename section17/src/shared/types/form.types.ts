// export type FormRef = Record<
//   string,
//   React.MutableRefObject<HTMLInputElement | null> | FormRef
// >;

export interface FormRef {
  [key: string]: React.MutableRefObject<HTMLInputElement | null> | FormRef | undefined;
  current?: never;
};

export type FormRefData<T extends FormRef> = { [K in keyof T]: string|null };
export namespace FormRef {

  const isRef = (ref: any): ref is React.MutableRefObject<HTMLInputElement | null> => {
    return 'current' in ref && ref.current !== undefined;
  }

  export function extract<T extends FormRef>(form: T): FormRefData<T> {

    const entries = Object
      .entries(form)
      .map(([k, v]) => ({
        [k]: isRef(v) ? (v?.current?.value || null) : v === undefined ? undefined : extract(v)
      }));
    return Object.assign({}, ...entries) as FormRefData<T>;
  }
}

// example:
/*
  const form = {
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null)
  } satisfies FormRef;
*/
