import React, { Component } from 'react';
import { connect } from 'react-redux';
import Field from './field';
import { formError, signIn } from '../action';


class SignIn extends Component {
    handleSignIn(event){
        event.preventDefault();
        const { email, password } = this.props.values
        const errors = [];

        if(!email){
            errors.push('Please enter an email');
        }

        if(!password){
            errors.push('Please enter a password');
        }

        
        this.props.formError(errors)

        if(errors.length === 0){
           // Submit Form
           this.props.signIn({email, password});
        }

    }
    render(){
        const inputs = [
            {
                label: 'Email Address',
                type: 'text',
                placeholder: 'Enter your email',
                name: 'email'
            },
            {
                label: 'Password',
                type: 'Password',
                placeholder: 'Enter your password',
                name: 'password'
            }
            
        ];

        const { values, errors } = this.props;

        console.log('ERRORS: ', errors)

        const fields = inputs.map((field, index) => {
            return <Field key={index} {...field} value={values[field.name] || ''}/>
        });

        return(
            <div>
                <h1 className="text-center">Sign In</h1>
                <div className="row justify-content-center">
                    <div className="card col-8 bg-primary">
                        <div className="card-body">
                                <form onSubmit={this.handleSignIn.bind(this)}>
                                   {fields}
                                   <div className="row">
                                        <button className="btn btn-light">Sign In</button>
                                   </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        values: state.form.values,
        errors: state.form.errors
    }
}

export default connect(mapStateToProps, {formError, signIn}) (SignIn);