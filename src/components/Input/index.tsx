import { useState } from 'react'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import classNames from 'classnames'
import styles from './Input.module.scss'

export default function Input() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isEmailErrorShown, setIsEmailErrorShown] = useState(false)

  const validateEmail = (emailString: string) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    setIsEmailValid(emailRegex.test(emailString))
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setEmail(value)
    validateEmail(value)
    setIsEmailErrorShown(!value && false)
  }

  const handleEmailInputBlur = () => email && setIsEmailErrorShown(!isEmailValid)

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setPassword(value)
  }

  const handlePasswordToggle = () => setIsPasswordShown((prev) => !prev)

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
              onBlur={handleEmailInputBlur}
              autoComplete='off'
            />
            <BsFillCheckCircleFill
              className={classNames(styles.checkIcon, { [styles.valid]: isEmailValid })}
              aria-label='email validation'
            />
          </div>
          {isEmailErrorShown && <span className={styles.emailError}>Invalid e-mail address.</span>}
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor='password'>
            Password
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              placeholder='Password'
              type={isPasswordShown ? 'text' : 'password'}
              id='password'
              name='password'
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type='button'
              className={styles.eyeIcon}
              onClick={handlePasswordToggle}
              aria-label='toggle password'
            >
              {isPasswordShown ? <ImEye /> : <ImEyeBlocked />}
            </button>
          </div>
        </div>
      </form>
    </article>
  )
}
