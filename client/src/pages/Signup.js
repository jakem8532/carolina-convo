import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations.js'
import Auth from '../utils/auth'

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: ''})

    const [addUser, { error }] = useMutation(ADD_USER)

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        try {
            const { data } = await addUser({
                variables: {...formState}
            }) 

            Auth.login(data.addUser)
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <main className='flex-row justify-center mb-4'>
            <div className='col-12 col-md-6'>
                <div className='card'>
                    <h4 className='card-header'>Sign Up</h4>
                    <div className='card-body'>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className='form-input'
                                placeholder='Your username'
                                name='username'
                                type='username'
                                id='username'
                                value={formState.username}
                                onChange={handleChange}
                            />
                            <input
                                className='form-input'
                                placeholder='Your email'
                                name='email'
                                type='email'
                                id='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <input
                                className='form-input'
                                placeholder='*****'
                                name='password'
                                type='password'
                                id='password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <button className='btn d-block w-100' type='submit'>
                                submit
                            </button>
                            {error && <div>Signup failed!</div>}
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Signup