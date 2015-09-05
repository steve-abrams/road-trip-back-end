var CenterBlock = React.createClass({
  render: function () {
    return (
      <div>
        < AboutUs />
      </div>
    )
  }
})

var AboutUs = React.createClass({
  render: function () {
    return (
      <div className="large-8 columns large-centered about-us">
        <h1> Welcome to Road Trip! </h1>
        <p> Jujubes cheesecake cake jelly beans pie. Ice cream donut jelly beans. Chocolate cake gummies cupcake tootsie roll pastry chocolate bar candy toffee marzipan. Jujubes chocolate cake cheesecake halvah candy canes jelly beans. Chocolate bar biscuit tiramisu cotton candy cake tart wafer chocolate bar. Danish donut icing chocolate. </p>
        < SignupLoginButtons />
      </div>
    )
  }
})
//
var SignupLoginButtons = React.createClass({
  render: function () {
    return (
      <div className="button-group round landing-buttons">
      <a href="/users/sign_up"><button className="tiny"> Sign Up </button></a>
      <a href="/users/sign_in"><button className="tiny"> Log In </button></a>
      </div>
    )
  }
})

// var Login = React.createClass({
//   render: function () {
//     return (
//
//     )
//   }
// })
