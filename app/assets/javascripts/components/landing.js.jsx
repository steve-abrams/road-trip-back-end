var CenterBlock = React.createClass({
  getInitialState: function() {
    return { showResults: true, message: "signUp"};
  },
  toggleForm: function() {
    this.state.showResults === true ? this.setState({ showResults: false, message: "about" }) : this.setState({ showResults: true, message: "signUp"})
  },
  render: function () {
    return (
      <div className="large-8 columns large-centered about-us">
        { this.state.showResults ? <AboutUs /> : <SignUpForm />}
        <div className="button-group round landing-buttons">
          <button className="tiny" onClick={this.toggleForm}> {this.state.message} </button>
        </div>
      </div>
    )
  }
})

var AboutUs = React.createClass({
  render: function () {
    return (
      <div>
        <h1> Welcome to Road Trip! </h1>
        <p> Jujubes cheesecake cake jelly beans pie. Ice cream donut jelly beans. Chocolate cake gummies cupcake tootsie roll pastry chocolate bar candy toffee marzipan. Jujubes chocolate cake cheesecake halvah candy canes jelly beans. Chocolate bar biscuit tiramisu cotton candy cake tart wafer chocolate bar. Danish donut icing chocolate. </p>
      </div>
    )
  }
})



var SignUpForm = React.createClass({
    render: function () {
      return (
        <form action="/users" method="post">
          <label htmlFor="email">Email </label>
          <input id='email' type="email" name="user[email]"/>
          <label htmlFor="password">Password </label>
          <input id='password' type="password" name="user[password]"/>
          <label htmlFor="password_confirmation">Confirm </label>
          <input id='password_confirmation' type="password" name="user[password_confirmation]"/>
          <input type="submit" className='button small round' name="name" value="sing"/>
        </form>
      )
    }
})
