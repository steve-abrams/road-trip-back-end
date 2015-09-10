var SignUpForm = React.createClass({
  render: function () {
    return (
      <form method='post' action='/users'>
        <input type='text' name='user[email]' placeholder='Email'/>
        <input type='password' name='user[password]' placeholder='Password'/>
        <input type='password' name='user[password_confirmation]' placeholder='Confirm Password'/>
        <input type='submit' value='Sign up'/>
      </form>
    )
  }

})
var LogInForm = React.createClass({
  render: function () {
    return (
      <form method='post' action='/users'>
        <input type='text' name='user[email]' placeholder='Email'/>
        <input type='password' name='user[password]' placeholder='Password'/>
        <input type='submit' value='Log In'/>
      </form>
    )
  }

})
