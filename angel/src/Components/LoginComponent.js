import React, { Component } from 'react'
import LoginService from '../Services/LoginService';


class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

            email: '',
            password: '',
            result: '',
            isSubmit: false,
            emailRex: /\S+@\S+\.\S+/
        }
        this.submitForm = this.submitForm.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    submitForm = () => {
        this.setState({ isSubmit: true });
        console.log(this.state.emailRex.test(this.state.email));
        if (this.state.email != '' && this.state.password != '' && this.state.password.length > 6 && this.state.emailRex.test(this.state.email)) {
            let angel = {

                email: this.state.email,
                password: this.state.password
            }
         
        }
    }




    changeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }




    render() {
        return (
            <div>

                <section className="form my-4 mx-5" >
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-5">
                                <img src="bw.jpg" className="img-fluid" style={{ height: "100%" }} alt="" />
                            </div>

                            <div className="col-lg-7 px-5 pt-5">
                                <h1 className="font-weight-bold col-lg-3 py-2" style={{ marginLeft: "-34px" }}>Login</h1>
                                <h4 className='col-lg-5 px-1' style={{ marginLeft: "-18px" }}>Login to your account</h4>
                                <br />

                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="email" name="email" id="" className="form-control" placeholder="Email address"
                                            onChange={this.changeEmail} required />
                                        <b>  {this.state.isSubmit && !this.state.emailRex.test(this.state.email) ? <span className="text-danger form-error">Invalid Email</span> : ''}</b>
                                    </div>


                                </div>
                                <br />
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <div className="formdesign" id="pass">
                                            <input type="password" name="fpass" id="inputValidationEx2" className="form-control validate"
                                                onChange={this.changePassword}
                                                placeHolder="*********" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  />
                                        </div><b>{(this.state.isSubmit && (this.state.password == '' || this.state.password.length < 6)) ? <span className="text-danger form-error">Password must be greater than 6 digits</span> : ''}</b>

                                    </div>
                                </div>

                                <br />
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <button type="submit" className="btn1 mt-3 mb-5" onClick={this.submitForm}  >login</button>
                                        <a className="fo" href="#">Forgot password</a>
                                        <p>Don't have an account? <a className="fo" href="/SignupComponent">Sign-up</a></p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>)
    }
}

export default LoginComponent