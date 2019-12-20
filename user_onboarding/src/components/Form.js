import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from "yup";
// const validate =({name, email, password, termsOfService}) => {
//     const toShortString ='Too few characters entered!';
//     const errors= {};
    
//     if (!name){
//         errors.name='No name entered!'
//     }
//     else if(name.length<3){
//         errors.name= toShortString
//     }
//     if (!email){
//         errors.name='No email entered!'
//     }
//     else if(name.length<6){
//         errors.name= toShortString
//     }

//     if (!name){
//         errors.name='You need a name!'
//     }
    
// }

//Going to do this with Yup



const elRequired='* Is Required';

const UserForm = () => {
   const [users, setUsers] = useState([]);
   const [status, setStatus] =useState(false);
   const handelSubmit = (values, tools)=>{
    //console.log({values, tools});
    axios
    .post('https://reqres.in/api/users',values)
    .then(res=> {
        console.log(res);
        setStatus(true)
        setUsers([...users, res.data ]);
        tools.resetForm();
    })
    .catch(err => console.log(err.response));
    
}
//    useEffect(()=>{
//        console.log('status has changed', status);
//        status && setUsers((el)=>[...el, status]);
//    }, [status])
    return(
        <Formik
            initialValues={
                {name:'',
                email:'',
                password:'',
                termsOfService: false }}
            onSubmit={handelSubmit}
            validationSchema= {Yup.object().shape({
                name: Yup.string()
                .required( elRequired)
                .min(3)
                ,
                email: Yup.string().required(elRequired)
                .min(5),
                password: Yup.string().required(elRequired)
                .min(3),
                termsOfService: Yup
                .boolean()
                .required( elRequired)
                .oneOf([true], '*Must Accept Terms and Conditions'),
            
            })
            }
                
            render={props => {
                return(
                <>
                <Form>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <Field name='name'
                                type='text'
                                placeholder='enter name'
                        />
                        <ErrorMessage name='name'
                                        component='div'
                                        className='red'
                        />
                    </div>
                    <div>
                    <label htmlFor='email'>Email:</label>
                    <Field name= 'email'
                            type='email'
                            placeholder='enter email'
                    />
                    <ErrorMessage name='email'
                                    component='div'
                                    className='red'
                        />
                    </div>
                    <div>
                    <label htmlFor='password'>Password:</label>
                    <Field name= 'password'
                            type='password'
                            placeholder='enter password'
                    />
                    <ErrorMessage name='password'
                                    component='div'
                                    className='red'
                        />
                    </div>
                    <div>
                    <label htmlFor='termsOfService'>Agree to Terms of Service:</label>
                    <Field name = 'termsOfService'
                            type= 'checkbox'
                    />
                    <ErrorMessage name='termsOfService'
                                        component='div'
                                        className='red'
                        />
                    </div>
                    <div>
                    <label>Submit</label>
                    <input type='submit'/>
                    </div>
                    
                </Form>
                <div>
                {users.map( el => (<h2>{`Name: ${el.name} Email:${el.email}`}</h2>))}
                </div>
                </>
                );
            }
            }
        />
    )
}
export default UserForm;