// import "./registerstyle.css"

const SignUp = () => {
  return (
    <div>
    <div className="form-container">
    <h1>Get <span className="highlight">started</span></h1>
    <p>A great travel starts with a great profile!</p>
    <form action="/signup" method="POST">
    <div className="input-group">
      <input type="text" id="first_name" name="first_name" placeholder="First name" required />
      <span className="icon"><i className="fas fa-user" /></span>
    </div>
    <div className="input-group">
      <input type="text" id="last_name" name="last_name" placeholder="Last name" required />
      <span className="icon"><i className="fas fa-user" /></span>
    </div>
    <div className="input-group">
      <input type="email" id="email" name="email" placeholder="Email" required />
      <span className="icon"><i className="fas fa-envelope" /></span>
    </div>
    <div className="input-group">
      <input type="password" id="password" name="password" placeholder="Password" required />
      <span className="icon"><i className="fas fa-lock" /></span>
    </div>
    <button type="submit">Sign up</button>
  </form>
  <p>Already have an account? <a href="/login">Log in</a></p>
  <div className="social-login">
    <button className="google-btn"><i className="fab fa-google" /></button>
    <button className="apple-btn"><i className="fab fa-apple" /></button>
    <button className="facebook-btn"><i className="fab fa-facebook-f" /></button>
  </div>
  </div>

    </div>
  )
}

export default SignUp