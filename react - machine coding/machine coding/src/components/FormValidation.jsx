// Validate form name (must not be empty and less than 100 characters allow); age (between 18-99) email(valid email) password(at least 8 characters) re-password(password and re-password same) show error message in the alert box!

import React, { useState } from 'react'

const FormValidation = () => {
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = async (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const validateForm = async () => {
        const { name, age, email, password, confirmPassword } = form
        if (!name || name.length >= 100) {
            alert('name is required and should be under 100')
            return
        }
        if (!age || 18 < age > 99) {
            alert('age must be within 18 to 99')
            return
        }
        if (!email) {
            alert('email is required')
            return
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('should be a valid email format')
            return
        }
        if (!password || !password.length >= 8) {
            alert('password is required and should of atleast 8 characters')
            return
        }
        if (!confirmPassword || confirmPassword !== password) {
            alert('confirm password is required and should be equal to password')
            return
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (validateForm()) {
            console.log(form)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name='name'
                value={form.name}
                placeholder='Enter your name...'
                onChange={handleChange}
            />
            <input type="number" name='age' value={form.age} placeholder='Enter your age...' onChange={handleChange} />
            <input type="email" name='email' value={form.email} placeholder='Enter your email...' onChange={handleChange} />
            <input type="password" name='password' value={form.password} placeholder='Enter your password...' onChange={handleChange} />
            <input type="password" name='confirmPassword' value={form.confirmPassword} placeholder='Confirm your password...' onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default FormValidation