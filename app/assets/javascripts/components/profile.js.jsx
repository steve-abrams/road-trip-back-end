var SettingsButtons = React.createClass({
  getInitialState: function() {
    return { showResults: true, edited: false };
  },
  toggleForm: function() {
    this.state.showResults === true ? this.setState({ showResults: false }) : this.setState({ showResults: true })
  },
  doStuff: function () {
    this.setState({ showResults: true, edited: true })
    console.log(this.state.edited, this.state.showResults);
    var name = $("#editName").val()
    var hometown = $('#editHometown').val()
    var favoriteLoc = $('#editFavoriteLocation').val()

    $.post('/users/' + window.location.pathname.split('/')[2], {'user[name]': name, 'user[hometown]': hometown, 'user[favorite_place]': favoriteLoc, "_method": "patch"})
      .done(function (data) {
      })
  },
  render: function() {
    return (
      <div className="profile-settings">
        <a href="#"><i className='fi-widget edit-settings'></i></a>
        <a href="#"><i className='fi-pencil edit-profile' onClick={this.toggleForm}></i></a>
          { this.state.showResults ? this.state.edited ? <EditedProfileInfo/> : <ProfileInfo /> : <EditProfileInfo onClick={this.doStuff} /> }
      </div>
    )
  }
});

var ProfileInfo = React.createClass({
  getInitialState: function() {
    return { showResults: true, edited: false };
  },
  toggleForm: function() {
    this.state.showResults === true ? this.setState({ showResults: false, edited: true }) : this.setState({ showResults: true, edited: false })
  },
  render: function () {
    var name = $('#profileName').html()
    var hometown = $('#profileHometown').html()
    var favoriteLoc = $('#favoriteLocation').html()
    var currentLoc = $('#currentLocation').html()
    return (
      <div>
        <img className="profile-pic" src="http://onlyinark.com/wp-content/uploads/2015/05/IMG_8270-1024x1024.jpg" alt=""></img>
        <h1>{name}</h1>
        <p> Miles Traveled&#58; 1,204 </p>
        <p> Trips Taken&#58; 3 </p>
        <p> Hometown&#58; {hometown}</p>
        <p> Favorite Place in the World&#58;</p>
        <p> {favoriteLoc}</p>
        <p> Interests and Activities&#58;</p>
        < Interest />< Interest />< Interest />< Interest />< Interest />
      </div>
    )
  }
})

var EditedProfileInfo = React.createClass({
  render: function () {
    var name = $('#editName').val()
    var hometown = $('#editHometown').val()
    var favoriteLoc = $('#editFavoritePlace').val()
    return (
      <div>
        <img className="profile-pic" src="http://onlyinark.com/wp-content/uploads/2015/05/IMG_8270-1024x1024.jpg" alt=""></img>
        <h1>{name}</h1>
        <p> Miles Traveled&#58; 1,204 </p>
        <p> Trips Taken&#58; 3 </p>
        <p> Hometown&#58; {hometown}</p>
        <p> Favorite Place in the World&#58;</p>
        <p> {favoriteLoc}</p>
        <p> Interests and Activities&#58;</p>
        < Interest />< Interest />< Interest />< Interest />< Interest />
      </div>
    )
  }
})

var EditProfileInfo = React.createClass({
  render: function () {

    return (
      <div>
        <img className="profile-pic" src="http://onlyinark.com/wp-content/uploads/2015/05/IMG_8270-1024x1024.jpg" alt=""></img>
        <input id='editName' type='text' name='user[name]' placeholder="Your Name"/>
        <p> Miles Traveled&#58; 1,204 </p>
        <p> Trips Taken&#58; 5 </p>
        <input id='editHometown' type='text' name='user[hometown]' placeholder="Hometown"/>
        <div className="switch round small">
          <p>Show Current City&#58; </p>
          <input id="yes-no" name='user[show_city]' type="checkbox" />
          <label htmlFor="yes-no">
            <span className="switch-on"> On </span>
            <span className="switch-off"> Off </span>
          </label>
        </div>
        <input id='editFavoritePlace' type='text' name='user[favorite_place]' placeholder="Your favorite place"/>
        <input type='hidden' name='_method' value='patch'/>
        <button className='button round' id='editProfileButton' value='Update Profile' onClick={this.props.onClick}>Update Profile</button>
        <p> Interests and Activities&#58;</p>
        < Interest />< Interest />< Interest />< Interest />< Interest />
        <a href={'/users/' + window.location.pathname.split('/')[2]} data-method='delete' rel='nofollow' className='button round'>Delete</a>
      </div>
    )
  }
})

var Interest = React.createClass({
  render: function () {
    return (
      <button className='interests button round tiny'> keyword </button>
    )
  }
})

var NewTripButton = React.createClass({
  getInitialState: function() {
    return { showResults: false };
  },
  toggleForm: function() {
    this.state.showResults === true ? this.setState({ showResults: false }) : this.setState({ showResults: true })
  },
  render: function () {
    return (
      <div>
        <button id="new-trip-button" className='new-trip button round tiny' onClick={this.toggleForm}><span className='fi-plus'></span> Create New Trip </button>
        { this.state.showResults ? <NewTripForm /> : null }
      </div>
    )
  }
})

var NewTripForm = React.createClass({
  render: function () {
    return (
      <div>
        <form method="post" action={'/users/'+window.location.pathname.split('/')[2]+'/trips'}>
          <div className="row">
            <div className="small-8">
              <div className="row">

              <div className="small-9 columns">
                <input name="trip[name]" type="text" id="right-label" placeholder="Trip name" />
              </div>

              <div className="small-9 columns">
                <input name="trip[start_location]" type="text" id="right-label" placeholder="Starting City" />
              </div>

              <div className="small-9 columns">
                <input name="trip[end_location]" type="text" id="right-label" placeholder="Ending City" />
              </div>

              <div className="small-9 columns">
                <input name="trip[start_date]" type="date" id="right-label" placeholder="Start Date" />
              </div>

              <div className="small-9 columns">
                <input name="trip[end_date]" type="date" id="right-label" placeholder="End Date" />
              </div>

              <div className="small-9 columns">
                <input className="button round tiny" type="submit" value="Create Trip"/>
              </div>

            </div>
          </div>
        </div>
      </form>
      </div>
    )
  }
})



var GetTiles = React.createClass({
  getInitialState: function(){
    return {
      value: "",
      sortBy: "id",
      sortProp: "Date Created",
      asc: 1,
      sortOrder: "Ascending"}
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
        <ul className="button-group round even-1">
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
  render: function () {
    console.log(this.props.data);
    return (
      <li>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeyuoh_rxsx6d2_XTYo0SyorCaBJUAAH1m_58wqEgqn-G46oeE" alt=""></img>
        <a href={'/users/'+ window.location.pathname.split('/')[2]+'/trips/' + this.props.data.id }><p> {this.props.data.name} </p></a>
      </li>
    )
  }
})
