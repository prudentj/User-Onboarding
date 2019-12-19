import React from 'react';
import ReactDOM from 'react-dom'
import {Formik, Form, Field} from 'formik';

const UserForm = () => {
    return(
        <Formik
            initialValues={
                {name:'',
                email:'',
                password:'',
                termsOfService: false }}
            onSubmit={(values, tools)=>{
                console.log({values, tools});
                tools.resetForm()
            }}
            render={
                <Form>
                    <Field name='name'
                            type='text'
                            placeholder='enter name'
                    />
                    <Field name= 'email'
                            type='email'
                            placeholder='enter email'
                    />
                    <Field name= 'password'
                            type='password'
                            placeholder='enter password'
                    />
                    <Field name = 'termsOfService'
                            type= 'checkbox'
                    />
                    <input type='submit'/>
                </Form>
            }
        />
    )
}
export default UserForm;