var signinNavbar = React.createClass({
  getInitialState: function() {
    return { showResults: false};
  },
  toggleForm: function() {
    this.state.showResults ? this.setState({ showResults: false}) : this.setState({ showResults: true})
  },
  render: function(){
    return (
      <nav className="top-bar" data-topbar="" role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1>
            <a href="/"> Home</a>
            </h1>
          </li>
          <li className="toggle-topbar menu-icon">
            <a href="#"><span>Menu</span></a>
          </li>
        </ul>
        <section className="top-bar-section">
        <ul className='right'>
          {this.state.showResults ? <LogInForm/> : <LogInButton  onClick={this.toggleForm}/>}
        </ul>
        </section>
      </nav>
    );
  }
})

var logoutNavbar = React.createClass({
  render: function(){
    return (
      <nav className="top-bar" data-topbar="" role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1>
            <a href="/"> Home</a>
            </h1>
          </li>
          <li className="toggle-topbar menu-icon">
            <a href="#"><span>Menu</span></a>
          </li>
        </ul>
        <section className="top-bar-section">
          <ul className="right">
            <li className="active">
              <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
})

var LogInButton = React.createClass({
  render: function () {
    return (
        <li className="active">
            <a href="#" onClick={this.props.onClick}> Login</a>
        </li>
          )
  }
})


var SignUpForm = React.createClass({
  render: function () {
    return (
      <form method='post' action='/users'>
        <input type='text' name='user[email]' placeholder='Email'/>
        <input type='password' name='user[password]' placeholder='Password'/>
        <input type='password' name='user[password_confirmation]' placeholder='Confirm Password'/>
        <input type='submit' className='button small' value='Sign up'/>
      </form>
    )
  }

})

var LogInForm = React.createClass({
  render: function () {
    return (

                  <form action="/users/sign_in" method='post'>
                   <li>
                     <input type="text" placeholder="email" name='user[email]'/>
                   </li>
                   <li>
                     <input type="password" name='user[password]' placeholder="password"/>
                   </li>
                   <li>
                     <input className='button small' type='submit' value='Login!'/>
                   </li>
                 </form>
    )
  }

})
