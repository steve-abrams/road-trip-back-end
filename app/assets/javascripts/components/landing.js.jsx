var CenterBlock = React.createClass({
  getInitialState: function() {
    return { showResults: true};
  },
  toggleForm: function() {
    this.state.showResults === true ? this.setState({ showResults: false}) : this.setState({ showResults: true})
  },
  render: function () {
    return (
      <div className="large-8 columns large-centered about-us">
        <h3>{this.props.message}</h3>
        { this.state.showResults ? <AboutUs toggle={this.toggleForm} /> : <SignUpForm toggle={this.toggleForm} /> }
      </div>
    )
  }
})

var AboutUs = React.createClass({
  render: function () {
    return (
      <div>
        <h1> Welcome to Road Trip</h1>
        <p> Choose your destination, and we will create your trip! We will find you Hotels, Resturaunts, Events, and other
        activities to make your trip the best ever! Create, Plan, and Ride!
        </p>
        <div className="button-group landing-buttons centered">
          <button className="small-4" onClick={this.props.toggle}> Sign Up </button>
        </div>
      </div>
    )
  }
})



var SignUpForm = React.createClass({
    render: function () {
      return (
        <div>
        <form action="/users" method="post">
          <div className="row">
            <div className="large-10 small-centered columns">
              <div className="row collapse">
                <div className="small-2 columns">
                    <span href="#" className="prefix fi-torso"></span>
                </div>
                <div className="small-10 columns">
                  <input  id='email' type="email" placeholder="email" name="user[email]"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="large-10 small-centered columns">
              <div className="row collapse">
                <div className="small-2 columns">
                    <span href="#" className="prefix fi-lock"></span>
                </div>
                <div className="small-10 columns">
                <input id='password' type="password" placeholder="password" name="user[password]"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="large-10 small-centered columns">
              <div className="row collapse">
                <div className="small-2 columns">
                    <span href="#" className="prefix fi-lock"></span>
                </div>
                <div className="small-10 columns">
                  <input  id='password_confirmation' type="password" placeholder="confirm password" name="user[password_confirmation]"/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="reverse">
              <a href="#" onClick={this.props.toggle} className="back-arrow"><i className="fi-arrow-left"></i></a>
            </div>
            <div className="small-12 columns small-centered">
              <div className="small-5 small-centered columns">
                <input type="submit" className='button small-12' name="name" value="Sign Up"/>
              </div>
            </div>
          </div>
        </form>
        </div>
      )
    }
})




var ModalBitches = React.createClass({
	handleClick: function(e){
		if(e && typeof e.preventDefault == 'function') {
			e.preventDefault();
		}
		var contentDiv = $('<div>'+{SignUpForm}+'</div>');
    console.log(SignUpForm)
    console.log(contentDiv)
		var anchor = $('<a class="close-reveal-modal">&#215;</a>');
		var reveal = $('<div class="reveal-modal" data-reveal>').append($(contentDiv)).append($(anchor));
		$(reveal).foundation().foundation('reveal', 'open');
		$(reveal).bind('closed.fndtn.reveal', function(e){
      React.unmountComponentAtNode(this);
    });

		if(React.isValidElement(this.props.revealContent)) {
			React.render(this.props.revealContent, $(contentDiv)[0]);
		}
		else {
			$(contentDiv).append(this.props.revealContent);
		}
	},
	render: function(){
		return (
			<div>
      <button onClick={this.handleClick}>Sign Up Modal</button>
			</div>
		);
	}
});
