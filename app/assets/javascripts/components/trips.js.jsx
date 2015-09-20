// **Info For Dates**
// var months = {
//   '01': "January",
//   '02': "February",
//   '03': "March",
//   '04': "April",
//   '05': "May",
//   '06': "June",
//   '07': "July",
//   '08': "August",
//   '09': "September",
//   '10': "October",
//   '11': "November",
//   '12': "December"
// }

var eventIcons = {
  'restaurant': 'fa fa-cutlery',
  'lodging': 'fa fa-bed',
  'museum': 'fa fa-institution',
  'gas_station': 'fa fa-car',
}

var NewBlogPost = React.createClass({
  getInitialState: function(){
    return {lat: 0, long: 0}
  },
  componentWillMount: function(){
    navigator.geolocation.getCurrentPosition(function (position) {
      if(this.isMounted()){
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.latitude
        })
      }
    }.bind(this))
  },
  render: function () {
    console.log
    console.log("LAT:", this.state.lat);
    console.log("LONG:", this.state.long);
    return (
      <form action={'/users/'+window.location.pathname.split('/')[2]+'/trips/'+window.location.pathname.split('/')[4]+'/posts'} method='post'>
      <input type="hidden" name='post[latitude]' value={this.state.lat}/>
      <input type="hidden" name='post[longitude]' value={this.state.long}/>
      <input type="text" name='post[title]' placeholder="Title"/>
      <textarea cols="20" name='post[content]' rows="10" placeholder="What did you do today?"></textarea>
      <input type='submit' value='blog!' className='button'/>
      </form>
    )
  }
})

var newPostButton = React.createClass({
  getInitialState: function() {
    return { showResults: false };
  },
  onClick: function() {
    this.state.showResults === true ? this.setState({ showResults: false }) : this.setState({ showResults: true })
  },
  render: function() {
    return (
      <div>
      <button  onClick={this.onClick} ><span className='fi-pencil'></span> Add new blog post</button>
      { this.state.showResults ? <NewBlogPost /> : null }
      </div>
    );
  }
});

var NewDestinationButton = React.createClass({
  getInitialState: function() {
    return { showResults: false };
  },
  onClick: function() {
    this.state.showResults === true ? this.setState({ showResults: false }) : this.setState({ showResults: true })
  },
  render: function() {
    return (
      <div>
      <button  onClick={this.onClick} ><span className='fi-pencil'></span> Add a new trip destination</button>
      { this.state.showResults ? <NewDestinationForm /> : null }
      </div>
    );
  }
});

var NewDestinationForm = React.createClass({
  render: function () {
    return (
      <form action={'/users/'+window.location.pathname.split('/')[2]+'/trips/'+window.location.pathname.split('/')[4]+'/destinations'} method='post'>
        <input type="text" name='destination[name]' placeholder="City, State"/>
        <input type='submit' value='Add Stop' className='button'/>
      </form>
    )
  }
})

var BlogCarousel = React.createClass({
  getInitialState: function () {
    return {posts: ''}
  },
  componentDidMount: function(){
    $.get('/users/'+ window.location.pathname.split('/')[2]+'/trips/' + window.location.pathname.split('/')[4] + '/posts', function(results){
      if(this.isMounted()){
        this.setState({
          posts: results
        })
      }
    }.bind(this))
  },
  render: function () {
    var allPosts = this.state.posts
    console.log(allPosts)
    var displayPosts = [];
    for(var i = 0; i < allPosts.length; i++){
      displayPosts.push(< PostComponent key={allPosts[i].id} data={allPosts[i]} />)
    }
    return (
      <div className="display-posts">
        {displayPosts}
      </div>
    )
  }
})

var PostComponent = React.createClass({
  getInitialState: function(){
    return {lat: 0, long: 0}
  },
  componentWillMount: function(){
    navigator.geolocation.getCurrentPosition(function (position) {
      if(this.isMounted()){
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.latitude
        })
      }
    }.bind(this))
  },
  render: function () {
    var data = this.props.data
    var date = data.created_at.split('T')
    var endDate = date[0].split('-')
    var displayDate = (endDate[1].toString() + " " +  endDate[2].toString()+ " " + endDate[0].toString())
    return (
      <div className="post-container">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <p>{displayDate}</p>
      </div>
    )
  }
})

var Itinerary = React.createClass({
  getInitialState: function () {
    return {
      trip: "",
      start_date: "",
      end_date: "",
      destinations: []
    }
  },
  componentDidMount: function(){
    $.get('/users/'+ window.location.pathname.split('/')[2]+'/trips/' + window.location.pathname.split('/')[4] + '.json', function(results){
      if(this.isMounted()){
        // var start_atts = results.start_date.split("-")
        var events = results.events
        // var start_date = months[start_atts[1]] + " " + start_atts[2] + ", " + start_atts[0];
        // var end_atts = results.end_date.split("-")
        // var end_date = months[end_atts[1]] + " " + end_atts[2] + ", " + end_atts[0];
        var destinations = results.destinations.map(function (e) {
          var destEvents = []
          events.forEach(function (event) {
            if (event.destination_id === e.id){
              destEvents.push(event);
            }
          })
          return {name: e.name, events: destEvents, lat: e.lat, lng: e.lng, place_id: e.place_id};
        });
        this.setState({
          trip: results,
          // start_date: start_date,
          // end_date: end_date,
          destinations: destinations
        })
      }
    }.bind(this))
  },
  render: function () {
    var trip = this.state.trip
    // This date was showing below h3 Ended In
    // <h3>{this.state.start_date} to {this.state.end_date}</h3>
    return (
      <div>
        <h1>{trip.name}</h1>
        <h3>Started in {trip.start_location}</h3>
        <h3>Ended in {trip.end_location}</h3>
        {this.state.destinations.map(function (e) {
          return (<Destination name={e.name} events={e.events} key={e.id} placeid={e.place_id} lat={e.lat} lng={e.lng}/>)
        }, this)}
      </div>
    )
  }
})

var Activities = React.createClass({
  getInitialState: function () {
    return {
      trip: "",
      // start_date: "",
      // end_date: "",
      destinations: [],
      lat: 0,
      long: 0
    }
  },
  componentDidMount: function(){
    navigator.geolocation.getCurrentPosition(function (position) {
      if(this.isMounted()){
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.latitude
        })
      }
    }.bind(this))
    $.get('/users/'+ window.location.pathname.split('/')[2]+'/trips/' + window.location.pathname.split('/')[4] + '.json', function(results){
      if(this.isMounted()){
        // var start_atts = results.start_date.split("-")
        var events = results.events
        // var start_date = months[start_atts[1]] + " " + start_atts[2] + ", " + start_atts[0];
        // var end_atts = results.end_date.split("-")
        // var end_date = months[end_atts[1]] + " " + end_atts[2] + ", " + end_atts[0];
        var destinations = results.destinations.map(function (e) {
          var destEvents = []
          events.forEach(function (event) {
            if (event.destination_id === e.id){
              destEvents.push(event);
            }
          })
          return {name: e.name, events: destEvents, id: e.id, lat: e.lat, lng: e.lng, place_id: e.place_id};
        });
        this.setState({
          trip: results,
          // start_date: start_date,
          // end_date: end_date,
          destinations: destinations
        })
      }
    }.bind(this))
  },
  setLocationHere: function () {
    $('#loclat').html(this.state.lat)
    $('#loclong').html(this.state.long)
  },
  render: function () {
    var trip = this.state.trip
    return (
      <div>
        <div className='hideMe'>
          <div id='loclat' className='hidden'>{this.state.lat}</div>
          <div id='loclong' className='hidden'>{this.state.long}</div>
          <div id='destinationid' className='hidden'></div>
          <div id='category' className='hidden'></div>
        </div>
        <div className='large-4 columns'>
          <label for="range">Distance (Miles)</label>
          <select className="small" id="range" name="range">
            <option value="1600">1</option>
            <option value="8047">5</option>
            <option value="16093">10</option>
            <option value="32187">20</option>
          </select>
          <button className="small" onClick={this.setLocationHere} >Here & Now</button>
          {this.state.destinations.map(function (e) {
            return (<Destination name={e.name} events={e.events} destinationid={e.id} placeid={e.place_id} lat={e.lat} lng={e.lng}/>)
          }, this)}
        </div>
        <div className='large-8 columns'>
          <PlacesForm/>
        </div>
      </div>
    )
  }
})

var Destination = React.createClass({
  getInitialState: function () {
    return {
      togglePlacesForm: false,
      info: ''
    }
  },
  onClick: function() {
    $('#loclat').html(this.props.lat)
    $('#loclong').html(this.props.lng)
    $('#destinationid').html(this.props.destinationid)
    this.state.togglePlacesForm === true ? this.setState({ togglePlacesForm: false }) : this.setState({ togglePlacesForm: true })
  },
  getInfo: function (placeId) {
    $.get("/show_info?place_id="+placeId, function(results){
      if(this.isMounted()){
        console.log(results);
        this.setState({
          info: results
        })
      }
    }.bind(this))
  },
  render: function () {
    var eventList = this.props.events.map(function (e) {
      return (<div className="eventlisting">
          <p>
            <i className={eventIcons[e.category]}></i>&nbsp;&nbsp;
            {e.name}&nbsp;&nbsp;
            <MoreInfoModalButton placeid={e.place_id}/>
            <i className="fa fa-close right"></i>&nbsp;
          </p>
        </div>)
    }, this)
    return (
      <div>
        <h3 className='destination' onClick={this.onClick}>{this.props.name}</h3>
        {eventList}
      </div>
    )
  }
})

var PlacesForm = React.createClass({
  getInitialState: function() {
    return {
      searchResults: []
    }
  },
  onClick: function (lat, lng, category, range) {
    var lat = $('#loclat').html();
    var lng = $('#loclong').html();
    var range = $('#range').val();
    $('#category').html(category)
    $.get('/find_places?lat='+lat+'&lng='+lng+'&range='+range+'&category='+category, function(results){
      if(this.isMounted()){
        console.log(results);
        this.setState({
          searchResults: results
        })
      }
    }.bind(this))
  },
  render: function () {
    return (
      <div>
        <div className="icon-bar three-up">
          <a className="item" onClick={this.onClick.bind(this, this.props.lat, this.props.lng, "restaurant", "500")}>
            <label>Food</label>
          </a>
          <a className="item" onClick={this.onClick.bind(this, this.props.lat, this.props.lng, "lodging", "500")}>
            <label>Hotels</label>
          </a>
          <a className="item" onClick={this.onClick.bind(this, this.props.lat, this.props.lng, "museum", "500")}>
            <label>Activities</label>
          </a>
        </div>
        <PlacesResults results={this.state.searchResults}/>
      </div>
    )
  }
})

var PlacesResults = React.createClass({
  getInitialState: function () {
    return ({
      info: ''
    })
  },
  getInfo: function (placeId) {
    $.get("/show_info?place_id="+placeId, function(results){
      if(this.isMounted()){
        console.log(results);
        this.setState({
          info: results
        })
      }
    }.bind(this))
  },
  saveEvent: function (placeId, name) {
    var destinationId = $('#destinationid').html();
    var category = $('#category').html();
    $.post("/users/"+window.location.pathname.split('/')[2]+"/trips/" + window.location.pathname.split('/')[4] + "/destinations/"+destinationId+"/events?event[place_id]="+placeId+"&event[name]="+name+"&event[category]="+category, function(results){
      if(this.isMounted()){
        console.log(results);
        this.setState({
          info: results
        })
      }
    }.bind(this))
  },
  render: function () {
    if (this.props.results.data){
      var listings = this.props.results.data.results.map(function (result) {
        return (<div className="row">
            <button type='submit' onClick={this.saveEvent.bind(this, result.place_id, result.name)} className="button tiny success left">Save</button>
            <MoreInfoModalButton placeid={result.place_id}/>
            <h3 className="left">{result.name}</h3>
          </div>);
      }, this);
    }
    return (
      <div>
        {listings}
      </div>
    )
  }
})

var MoreInfoModalButton = React.createClass({
  getInitialState: function () {
    return ({
      info: ''
    })
  },
  getInfo: function (placeId) {
    $.get("/show_info?place_id="+placeId, function(results){
      if(this.isMounted()){
        console.log(results);
        this.setState({
          info: results
        })
      }
    }.bind(this))
  },
	handleClick: function(e){
    this.getInfo(this.props.placeid)
		if(e && typeof e.preventDefault == 'function') {
			e.preventDefault();
		}
		var contentDiv = $("<div><h1>HELLO</h1><p>"+this.state.info+"</p></div>");
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
        <button onClick={this.handleClick} className="button tiny info">More Info</button>
			</div>
		);
	}
});
