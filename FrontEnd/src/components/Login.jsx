import { useState } from "react"
import { Logo } from "./Logo"
import { Input } from './Input'
import {
    emailValidationMessage,
    validateEmail,
    validatePasswordMessage,
    ValidatePassword

} from '../shared/validators'
import { useLogin } from "../shared/hooks"

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useState({
        email{
        value: '',
        isValid: false,
        showError: false,
    }

        password{
        value: '',
        isValid: false,
        showError: false,
    }
    })
}


const handleInputValidationOnBlur = (value, field) => { let isValid = falseswitch(field){ case'email': isValid validateEmail (value)breakcase 'password' }


export const Login = ({ switchAuthHandler }) => {
    return (
        <div className="login-container">
            <Logo text={'Login Kinal Cast'} />
            <form className="auth-form">
                <Input
                    field='password'
                    label='Password'
                    value={formState.passwor.value}
                    onChangeHandler={handleInputValidationOnBlur}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMesage={formState.passworr.showError}
                    validationMessage={validatePasswordMessage}
                />
                <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                    Log in
                </button>     
            </form>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Este es el componente Login
            </span>
        </div>
    )
}