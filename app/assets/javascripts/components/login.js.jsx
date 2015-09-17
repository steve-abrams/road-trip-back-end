var signinNavbar = React.createClass({
  getInitialState: function() {
    return { showResults: false};
  },
  toggleForm: function() {
    this.state.showResults ? this.setState({ showResults: false}) : this.setState({ showResults: true})
  },
  render: function(){
    return (
      <nav className="top-bar" data-topbar role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1>
              <a href="/"> Home</a>
            </h1>
          </li>
          <li className="toggle-topbar menu-icon">
            <a href="#"><span></span></a>
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

var LogInButton = React.createClass({
  render: function () {
    return (
        <li className="active">
            <a href="#" onClick={this.props.onClick}> Login</a>
        </li>
          )
  }
})


var LogInForm = React.createClass({
  render: function () {
    return (
      <form action="/users/sign_in" method='post'>
         <li className="login-form">
           <input type="text" placeholder="email" name='user[email]'/>
         </li>
         <li className="login-form">
           <input type="password" name='user[password]' placeholder="password"/>
         </li>
         <li className="login-form">
           <input className='button small' type='submit' value='Login!'/>
         </li>
     </form>
    )
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
