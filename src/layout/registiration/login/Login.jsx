// import "./registerstyle.css"
const Login = () => {
  return (
    <div>
   <div className="form-container">
  <h1>Log In</h1>
  <form action="/login" method="POST">
    <div className="input-group">
      <input type="email" id="email" name="email" placeholder="Email" required />
      <span className="icon">📧</span>
    </div>
    <div className="input-group">
      <input type="password" id="password" name="password" placeholder="Password" required />
      <span className="icon">🔒</span>
    </div>
    <button type="submit">Log in</button>
  </form>
  <div className="social-login">
    <button className="google-btn"><i className="fab fa-google" /></button>
    <button className="apple-btn"><i className="fab fa-apple" /></button>
    <button className="facebook-btn"><i className="fab fa-facebook-f" /></button>
  </div>
  <p>Dont have an account? <a href="/signup">Sign up</a></p>
</div>

    </div>
  )
}

export default Login