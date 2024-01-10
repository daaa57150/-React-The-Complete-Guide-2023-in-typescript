import { FormRef } from "@shared/types/form.types";
import { useRef } from "react";
import Form from "./common/Form";

export default function Login() {

  // TODO: put those useRef() into FormRef ?
  const form = {
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
    bob: {
      a: useRef<HTMLInputElement>(null),
    }
  } satisfies FormRef;

  function onSubmit(/* event: React.FormEvent<HTMLFormElement> */) {
    console.log('submitted!!');
    const data = FormRef.extract(form);
    console.log('extracted: ', data);
  }

  return (
    <Form onSubmit={ onSubmit }>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={ form.email }/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={ form.password }/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </Form>
  );
}
