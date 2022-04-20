/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import "./index.css";

export default function Input() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <article className="container">
      <form>
        <div className="input-wrap">
          <label className="input__label" htmlFor="email">
            E-mail
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="input-wrap">
          <label className="input__label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
    </article>
  );
}
