var SettingsButtons = React.createClass({
  getInitialState: function() {
    return { showResults: true,
              name: "",
              hometown_city: "",
              hometown_state: "",
              favoriteloc: "",
              trips: ""};
  },
  componentDidMount: function(){
      $.get('/users/'+ window.location.pathname.split('/')[2]+'/trips', function(results){
        if(this.isMounted()){
          var finishedTrips = results.filter(function (trip) {
            return trip.finished
          })
          this.setState({
            trips: finishedTrips.length
          })
        }
      }.bind(this));
      $.get('/users/' + window.location.pathname.split('/')[2] + '.json', function(results){
        console.log(results);
          if(this.isMounted()){
            var name = results.name.charAt(0).toUpperCase() + results.name.substring(1).toLowerCase()
            var hometown_city = results.hometown_city
            var hometown_state = results.hometown_state
            var favoriteloc = results.favorite_place
            this.setState({
              name: name,
              hometown_city: hometown_city,
              hometown_state: hometown_state,
              favoriteloc: favoriteloc,
            })
          }
        }.bind(this))
  },
  toggleForm: function() {
    this.state.showResults === true ? this.setState({ showResults: false }) : this.setState({ showResults: true })
  },
  doStuff: function () {
    var name = $("#editName").val()
    var hometown_city = $('#editHometown_city').val()
    var hometown_state = $('#editHometown_state').val()
    // var favoriteloc = $('#editFavoritePlace').val()
    // Removed from the post params, not sure if we are using it
    // 'user[favorite_place]': favoriteloc,
    $.post('/users/' + window.location.pathname.split('/')[2], {'user[name]': name, 'user[hometown_city]': hometown_city, 'user[hometown_state]': hometown_state, "_method": "patch"})
      .done(function (data) {
      })
      this.componentDidMount()
      this.setState({ showResults: true})
  },
  render: function() {
    return (
      <div className="profile-settings small-12 columns">
        <div className="small-12 columns edit-pencil">
          <a href="#"><i id="edit-intro" className='fi-pencil edit-profile' onClick={this.toggleForm}></i></a>
        </div>
        <div className="small-12 columns">
          {this.state.showResults ? <ProfileInfo name={ this.state.name} hometown_city= {this.state.hometown_city} hometown_state= {this.state.hometown_state} trips= {this.state.trips} /> :
          <EditProfileInfo onClick={this.doStuff} name={ this.state.name} hometown_city= {this.state.hometown_city} hometown_state= {this.state.hometown_state} trips= {this.state.trips} /> }
        </div>
      </div>
    )
  }
});

var ProfileInfo = React.createClass({
  render: function () {
    return (
      <div>
        <img className="profile-pic" src="http://images.amcnetworks.com/sundancechannel.com/wp-content/uploads/2013/09/fear-and-loathing-in-las-vegas.jpg" alt=""></img>
        <h2>Hello, {this.props.name}!</h2>
        <p> Miles Traveled&#58; 1,204 </p>
        <p> Trips Taken&#58; {this.props.trips} </p>
        <p> Hometown&#58; {this.props.hometown_city}, {this.props.hometown_state}</p>
      </div>
    )
  }
})
var EditProfileInfo = React.createClass({
  render: function () {
      var name = $('#editName').val()
      var hometown = $('#editHometown').val()
      var favoriteloc = $('#editFavoritePlace').val()
    return (
        <div>
          <div className="small-12">
            <img className="profile-pic" src="http://images.amcnetworks.com/sundancechannel.com/wp-content/uploads/2013/09/fear-and-loathing-in-las-vegas.jpg" alt=""></img>
            <br></br>
            <a href="#" className="medium"><i className="fi-camera"></i></a>
          </div>
          <div className="row">
            <div className="large-12 small-centered columns">
              <div className="row collapse">
                <div className="small-3 columns">
                    <span href="#" className="prefix">Name</span>
                </div>
                <div className="small-9 columns">
                  <input  id='editName' type="text" value={this.props.name} name="user[name]"/>
                </div>
              </div>
            </div>
          </div>
        <div className="row">
          <div className="large-12 small-centered columns">
            <div className="row collapse">
              <div className="small-12 columns">
                  <span href="#" className="prefix">Hometown</span>
              </div>
              <div className="small-7 columns">
                <input  id='editHometown_city' type="text" value={this.props.hometown_city} placeholder="City" name="user[hometown]"/>
              </div>
              <div className="small-5 columns">
                <input  id='editHometown_state' type="text" value={this.props.hometown_state} placeholder="State" name="user[hometown]"/>
              </div>
            </div>
          </div>
        </div>
          <div className="row">
          <input type='hidden' name='_method' value='patch'/>
          <button className='button small' id='editProfileButton' value='Update Profile' onClick={this.props.onClick}>Update Profile</button>
          </div>
          <div className="row">
            <a href={'/users/' + window.location.pathname.split('/')[2]} data-method='delete' rel='nofollow' className="delete">Delete Account</a>
          </div>
        </div>
    )
  }
})

//
// var NewTripButton = React.createClass({
//   getInitialState: function() {
//     return { showResults: false };
//   },
//   toggleForm: function() {
//     this.state.showResults === true ? this.setState({ showResults: false }) : this.setState({ showResults: true })
//   },
//   render: function () {
//     return (
//       <div>
//         <button id="new-trip-button" className='new-trip button tiny' onClick={this.toggleForm}><span className='fi-plus'></span> Create New Trip </button>
//         { this.state.showResults ? <NewTripForm /> : null }
//       </div>
//     )
//   }
// })

var NewTripButton = React.createClass({
	handleClick: function(e){
		if(e && typeof e.preventDefault == 'function') {
			e.preventDefault();
		}
		var anchor = $('<a class="close-reveal-modal">&#215;</a>');
		var reveal = $('<div class="reveal-modal" data-reveal>').append($('#modal').html()).append($(anchor));
		$(reveal).foundation().foundation('reveal', 'open');
		$(reveal).bind('closed.fndtn.reveal', function(e){
      React.unmountComponentAtNode(this);
    });

		if(React.isValidElement(this.props.revealContent)) {
			React.render(this.props.revealContent, $('#modal')[0]);
		}
		else {
			$('#modal').append(this.props.revealContent);
		}
	},
	render: function(){
		return (
			<div>
      <button class='new-trip button tiny' onClick={this.handleClick}><span className='fi-plus'></span> Create New Trip</button>
			</div>
		);
	}
});

//
// var NewTripForm = React.createClass({
//   render: function () {
//     return (

//     )
//   }
// })


var GetTiles = React.createClass({
  getInitialState: function(){
    return {
      value: "",
      sortBy: "id",
      sortProp: "Date Created",
      asc: 1,
      sortOrder: "Ascending",
      flipped: true}
  },
  componentDidMount: function(){
    $.get('/users/'+ window.location.pathname.split('/')[2]+'/trips', function(results){
      if(this.isMounted()){
        this.setState({
          value: results
        })
      }
    }.bind(this))
  },
  sortByProp: function (input) {
    this.state.sortBy === "id" ? this.setState({ sortBy: "name", sortProp: "Trip Name" }) : this.setState({ sortBy: "id", sortProp: "Date Created"})
  },
  sortByAsc: function (input) {
    this.state.asc === 1 ? this.setState({ asc: -1, sortOrder: "Descending" }) : this.setState({ asc: 1, sortOrder: "Ascending"  })
  },
  render: function () {
    var trips = this.state.value
    var allTrips = []
    for (var i = 0; i < trips.length; i++) {
      allTrips.push(<TripTile key={trips[i].id} ref={trips[i]} data={trips[i]}/>)
    }
    allTrips.sort(function (a, b) {
      var prop = this.state.sortBy
      var asc = this.state.asc
      if(a.ref[prop] > b.ref[prop]) return asc;
      if(a.ref[prop] < b.ref[prop]) return (0 - asc);
      return 0;
    }.bind(this))
    return (
      <div>
        <ul className="button-group even-1">
          <li onClick={this.sortByProp}><a className="tiny button" href="#">{this.state.sortProp}</a></li>
          <li onClick={this.sortByAsc}><a className="tiny button" href="#">{this.state.sortOrder}</a></li>
        </ul>
        <ul className="polaroids large-12 columns">
          {allTrips}
        </ul>
      </div>
    );
  }
})


var TripTile = React.createClass({
  getInitialState: function(){
    return {
      flipped: true}
  },
  flipTrip: function() {
    this.state.flipped ? this.setState({ flipped: false }) : this.setState({ flipped: true })
  },
  updateTrip: function () {
    var name = $("#editTripName").val()
    $.post('/users/'+ window.location.pathname.split('/')[2]+'/trips/' + this.props.data.id, {'trip[name]': name, "_method": "patch"})
      .done(function (data) {
      })
      this.componentDidMount()
      this.setState({ flipped: true})
  },
  render: function () {
    return (
      <li>
        {this.state.flipped ? <TripFront flip={this.flipTrip} key={this.props.key} ref={this.props.ref} data={this.props.data} /> :
                              <TripBack flip={this.flipTrip} key={this.props.key} ref={this.props.ref} data={this.props.data} />}
      </li>
    )
  }
})

var TripFront = React.createClass({
  render: function () {
    return (
      <div className={this.props.data.finished ? "finished" : undefined}>
        <a href={'/users/'+ window.location.pathname.split('/')[2]+'/trips/' + this.props.data.id }>
          <img src="http://www.usnews.com/dims4/USNEWS/e4ce14a/2147483647/resize/652x%3E/quality/85/?url=%2Fcmsmedia%2F2e%2Fc1%2F90572c4e46c997c90ff60b17be58%2F140624-summerroadtrip-stock.jpg" alt=""></img>
          <p className="trip-name">{this.props.data.finished ? this.props.data.name + " (finished)" : this.props.data.name}</p>
        </a>
        <div className="small-centered small-12 columns edit-gear">
          <a onClick={this.props.flip}><span className="fi-widget"></span></a>
          <a href="#"><span className="fi-camera"></span></a>
        </div>
      </div>
    )
  }
})

var TripBack = React.createClass({
  render: function () {
    return (
      <div>
      <div className="small-centered small-12 columns">
        <a onClick={this.props.flip}><span className="fi-arrow-left"> Back</span></a>
      </div>
      <div className="small-centered small-12 columns">
        <form method="post" action={'/users/'+ window.location.pathname.split('/')[2]+'/trips/' + this.props.data.id}>
          <div className="row">
          <input type='hidden' name='_method' value='patch'/>
            <div className="small-12">
              <div className="row">
                <div className="small-centered small-12 columns">
                  <input id="editTripName" name="trip[name]" type="text" id="right-label" placeholder="Trip name" />
                  </div>
              </div>
            </div>
          </div>
            <div className="row">
              <div className="small-12">
                <div className="row">
                  <div className="small-centered small-12 columns edit-gear">
                    <input type="submit" className="button tiny"  value="Edit Trip"/>
                    </div>
                </div>
              </div>
            </div>
        </form>
      </div>
        <div className="small-centered small-12 columns edit-gear">
          <a href={'/users/'+ window.location.pathname.split('/')[2]+'/trips/' + this.props.data.id} data-method='delete' rel='nofollow'>Delete Trip</a>
        </div>
      </div>
    )
  }
})





    // ******** Went in the edit profile page, not sure if we wanted favorite place **********
    // <div className="row">
    //   <div className="large-12 small-centered columns">
    //     <div className="row collapse">
    //       <div className="small-5 columns">
    //           <span href="#" className="prefix">Favorite Place</span>
    //       </div>
    //       <div className="small-7 columns">
    //         <input  id='editFavoritePlace' type="text" placeholder={this.props.favorite} name="user[favorite_place]"/>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // ******** Went in the new trip form with start and end date ************
    //  <div className="small-9 columns">
    //    <input name="trip[start_date]" type="date" id="right-label" placeholder="Start Date" />
    //  </div>
     //
    //  <div className="small-9 columns">
    //    <input name="trip[end_date]" type="date" id="right-label" placeholder="End Date" />
    //  </div>
