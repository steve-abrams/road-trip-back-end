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
    var displayPosts = [];
    for(var i = 0; i < this.state.posts.length; i++){
      displayPosts.push(<div>
                    <h4>{this.state.posts[i].title}</h4>
                    <p>{this.state.posts[i].content}</p></div>
                      )
    }
    return (
      <div className="gallery js-flickity">
        {displayPosts.map(function (post,i) {
          return(
            <div className='gallery-cell' key={i}>{post}</div>
          )
        })}
      </div>
    )
  }
})
