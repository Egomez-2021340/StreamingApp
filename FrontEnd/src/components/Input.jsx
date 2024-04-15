
export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMesage,
    validationMessage,
    onBlurHandler,
    textArea

}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }
    const handleBlur = (event) => {
        onBlurHandler(field)
    }

    return (
        <><div>
            <div className="auth-form-label">
                <span>{label}</span>
            </div>
        </div>
            {textArea ? (
                <textArea
                    type={type}
                    value={value}
                    onChange={handleEventChange}
                    onBlur={handleInputBlur}
                    rows={5}
                    style={{ maxWdith: '400px' }}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleBlur}
                />
            )}
            <span className='auth-form-validation-message'>
                {showErrorMessage && validationMessage}
            </span>

        </>
    )
}

