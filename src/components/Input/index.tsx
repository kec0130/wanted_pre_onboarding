/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./index.css";

export default function Input() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const validateEmail = (emailString: string) => {
    const emailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setEmailValid(emailFormat.test(emailString));
  };

  return (
    <article className="container">
      <form>
        <div className="single-input">
          <label className="input__label" htmlFor="email">
            E-mail
          </label>
          <div className="input-wrap">
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => {
                const { value } = event.target;
                setEmail(value);
                validateEmail(value);
              }}
              autoComplete="off"
            />
            <span
              className={`icon email-icon ${
                emailValid ? "email-icon--valid" : ""
              }`}
            >
              <BsFillCheckCircleFill />
            </span>
          </div>
        </div>
        <div className="single-input">
          <label className="input__label" htmlFor="password">
            Password
          </label>
          <div className="input-wrap">
            <input
              className="input"
              type={passwordShown ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="button"
              className="icon password-icon"
              onClick={() => setPasswordShown((current) => !current)}
            >
              {passwordShown ? <ImEye /> : <ImEyeBlocked />}
            </button>
          </div>
        </div>
      </form>
    </article>
  );
}
