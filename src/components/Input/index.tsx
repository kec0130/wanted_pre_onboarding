/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import classNames from 'classnames'
import styles from './Input.module.scss'

export default function Input() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [emailValid, setEmailValid] = useState(false)
  const [showEmailError, setShowEmailError] = useState(false)

  const validateEmail = (emailString: string) => {
    const emailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    setEmailValid(emailFormat.test(emailString))
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setEmail(value)
    validateEmail(value)
    setShowEmailError(!value && false)
  }

  return (
    <article className='container'>
      <h3 className='title'>Input</h3>
      <form>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor='email'>
            E-mail
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              placeholder='E-mail'
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleEmailChange}
              onBlur={() => email && setShowEmailError(!emailValid)}
              autoComplete='off'
            />
            <BsFillCheckCircleFill
              className={classNames(styles.checkIcon, { [styles.valid]: emailValid })}
              aria-label='email validation'
            />
          </div>
          {showEmailError && <span className={styles.emailError}>Invalid e-mail address.</span>}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor='password'>
            Password
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type='button'
              className={styles.eyeIcon}
              onClick={() => setShowPassword((current) => !current)}
              aria-label='toggle password'
            >
              {showPassword ? <ImEye /> : <ImEyeBlocked />}
            </button>
          </div>
        </div>
      </form>
    </article>
  )
}
