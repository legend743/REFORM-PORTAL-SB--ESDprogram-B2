import React, { Component } from 'react'



class SignupComponent extends Component {
  constructor(props) {
    
    super(props)
    this.state = {
     
      fname: '',
      lname: '',
      tsec: '',
      phone: '',
      email: '',
      isSubmit: false,

      emailRex: /\S+@\S+\.\S+/,
     
    }
    this.submitForm = this.submitForm.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
   
  }
  submitForm = () => {
    this.setState({ isSubmit: true });
    console.log(this.state.emailRex.test(this.state.email));
    if (this.state.email != '' && this.state.password !== '' && this.state.password.length > 6 && this.state.emailRex.test(this.state.email)) {
      let angel = {

        email: this.state.email,
        name: this.state.fname,
        lastname: this.state.lname,
        typ: this.state.tsel,
        phone: this.state.phone,



      }

    }
  }
  changeEmail = (event) => {
    this.setState({ email: event.target.value });

  }
 changeFname = (event) => {
        this.setState({ fname: event.target.value });
    }
    changeFname = (event) => {
      this.setState({ fname: event.target.value });
  }
    changetyp= (event) => {
      this.setState({ typ: event.target.value });
  }
  changephone = (event) => {
    this.setState({ phone: event.target.value });
}

  render() {


    return (
      <div>
        <section className="form my-4 mx-5" >
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-5">
                <img src="cutebaby2.jpg" className="img-fluid" style={{ height: "100%" }} alt="" />
              </div>

              <div className="col-lg-7 px-5 pt-5">
                <h1 className="font-weight-bold col-lg-3 py-2" style={{ marginLeft: "-22px" }}>Signup</h1>
                <h4 className='col-lg-5 px-1' style={{ marginLeft: "-18px" }}></h4>
                <br />
                <form class="row g-3 needs-validation" novalidate />
                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label"></label>
                  <input type="text" name='fname' class="form-control" id="validationCustom01" placeholder='Enter Your First Name' onChange={this.changeFname}required />
                  <b>{(this.state.isSubmit && (this.state.fname == '' || this.state.fname.length < 3)) ? <span className="text-danger form-error">Name Required min. 3 character</span> : ''}</b>
             
                  <div class="valid-feedback">
                  
                  </div>
                  
                </div>
                
                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label"></label>
                  <input type="text" name='lname' class="form-control" id="validationCustom02" placeholder='Enter Your Last Name' required />
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-3">
                  <label for="validationServer04" className="form-label"></label>
                  <select class="form-control" name="type" style={{width:"223px"}} onChange={this.typ}  required>
                    <option selected disabled value="" >Select..</option>
                    
                    <option>Individual</option>
                    <option>organization</option>
                    
                  </select>
                  <b>{(this.state.isSubmit && (this.state.typ == '' || this.state.fname.length < 3)) ? <span className="text-danger form-error">typeRequired</span> : ''}</b>
                </div>
               
                <div class="col-md-3" className="formdesign" >
                <label for="validationCustom05" class="form-label"></label>
                <input type="text" style={{ width: "223px" }} name="fmobile" class="form-control" id="fmobile" placeholder="Enter your Mobile" onChange={this.changephone}required/>
                
                </div>
                <br/>
                <div><b>{(this.state.isSubmit && (this.state.phone == '' || this.state.phone.length < 10 || this.state.phone.length>16)) ? <span className="text-danger form-error" style={{marginLeft:"-459px"}}>InvalidNumber</span> : ''}</b>
                </div>
               

                <div class="col-md-4" className="formdesign" id="email" style={{ width: "fit-content", marginLeft: "px" }}>
                  <label for="validationServer03" class="form-label"></label>
                  <div class="input-group has-validation" style={{ marginTop: "-5px" }}>
                    <span class="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="email" name="email" class="form-control" placeholder="xyz@" onChange={this.changeEmail} required/>
                  </div>
                  <div class="col-12">
                    <b>  {this.state.isSubmit && !this.state.emailRex.test(this.state.email) ? <span className="text-danger form-error">Invalid Email</span> : ''}</b>
                    <br /><input class="btn btn-primary" type="submit" value="Sign-up"
                      style={{
                        padding: "8px 107px",
                        marginTop: "11px",
                        marginBottom: "15px",
                        marginLeft: " 0px",
                      }} onClick={this.submitForm}/>
                  </div>
                </div>


              </div>

            </div>





          </div>
        </section>

      </div>)
  }
}

export default SignupComponent