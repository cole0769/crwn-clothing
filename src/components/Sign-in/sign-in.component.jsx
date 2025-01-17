import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

// See lesson 85
class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an Account</h2>
                <span>Sign in with you email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label='email'
                        required 
                    />
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        label='password'
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                            Google Sign In
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn