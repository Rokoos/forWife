import React from 'react'
import { v4 as uuidv4 } from 'uuid';

// import {saveAplication } from '../utils'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]) 
})

const Form = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

const submitForm = (data) => {
  console.log('data', data)
  const newApp = {
    id: uuidv4(),
    name: data.firstName,
    lastName: data.lastName,
    password: data.password,
    age: data.age,
    email: data.email
  }
  // saveAplication(newApp)
}

  return (
    <div className="form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)} >
          <input type="text" placeholder='First Name' {...register('firstName')} />
          <p>{errors.firstName && 'Musisz podać imię'}</p>
          <input type="text" placeholder='Last Name' {...register('lastName')} />
          <p>{errors.lastName?.message}</p>
          <input type="text"  placeholder='Email' {...register('email')}/>
          <p>{errors.email?.message}</p>
          <input type="text"  placeholder='Age' {...register('age')}/>
          <p>{errors.age?.message}</p>
          <input type="text"  placeholder='Password' {...register('password')}/>
          <p>{errors.password?.message}</p>
          <input type="text"  placeholder='Confirm Password' {...register('confirmPassword')} />
          <p>{errors.confirmPassword && 'Passwords shold match'}</p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Form
