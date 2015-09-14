var months = {
  '01': "January",
  '02': "February",
  '03': "March",
  '04': "April",
  '05': "May",
  '06': "June",
  '07': "July",
  '08': "August",
  '09': "September",
  '10': "October",
  '11': "November",
  '12': "December"
}

var TripsDash = React.createClass({
  render: function(){
  return(
        <div id='map' className='map large-8 columns'></div>
      )
  }

})

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
  render: function () {
    var data = this.props.data
    return (
      <div className="post-container">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </div>
    )
  }
})

var TripInfo = React.createClass({
  getInitialState: function () {
    return {
      trip: "",
      start_date: "",
      end_date: ""
    }
  },
  componentDidMount: function(){
    $.get('/users/'+ window.location.pathname.split('/')[2]+'/trips/' + window.location.pathname.split('/')[4] + '.json', function(results){
      if(this.isMounted()){
        var start_atts = results.start_date.split("-")
        var start_date = months[start_atts[1]] + " " + start_atts[2] + ", " + start_atts[0];
        var end_atts = results.end_date.split("-")
        var end_date = months[end_atts[1]] + " " + end_atts[2] + ", " + end_atts[0];
        this.setState({
          trip: results,
          start_date: start_date,
          end_date: end_date
        })
      }
    }.bind(this))
  },
  render: function () {
    var trip = this.state.trip
    return (
      <div>
        <h1>{trip.name}</h1>
        <h3>Started in {trip.start_location}</h3>
        <h3>Ended in {trip.end_location}</h3>
        <h3>{this.state.start_date} to {this.state.end_date}</h3>
      </div>
    )
  }
})
