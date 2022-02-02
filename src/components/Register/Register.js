import { useState } from "react";
import validator from "validator";
import isEmail from "validator/lib/isEmail";

const Register = ({loadUser, onRouteChange}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSignIn = () => {
    if (!this.state.name || !this.state.email || !this.state.password) {
      alert("You must fill out all input fields!");
    }
    else if (!isEmail(this.state.email)) {
      alert("Email needs to be a valid address.");
    }
    else if (!validator.isStrongPassword(this.state.password)) {
      alert("Choose a password with minimum 8 characterr, 1 uppercase, 1 lowercase, 1 digit and a special charater!");
    }
    else {
      fetch('https://serene-springs-15154.herokuapp.com/register', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              email: email,
              password: password,
              name: name
          })
      })
      .then(response => response.json())
      .then(user => {
          if(user.id){
            loadUser(user);
            onRouteChange('home');
          }
      })
    }
  }

    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90"
                  type="name"
                  name="name"
                  id="name"
                  onChange={onNameChange}
                  placeholder="John"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={onEmailChange}
                  placeholder="john@email.com"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={onPasswordChange}
                  placeholder="Pa$$w0rd"
                />
                <p className="db fw2 f7 dark-gray">The password must be minimum 8 character with at least 1 lowercase, 1 uppercase, 1 digit and a special character.</p>
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
}

export default Register;
