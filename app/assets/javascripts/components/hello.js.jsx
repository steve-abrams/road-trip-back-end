
// getInitialState: function() {
//   return {
//     username: '',
//     lastGistUrl: ''
//   };
// },


/// provided by the server via the DB
// componentDidMount: function() {
//   $.get('https://www.omdbapi.com/?s=disney', function(result) {
//     var lastGist = result.Search;
//     console.log(lastGist)
//     if (this.isMounted()) {
//       this.setState({
//         stuff: lastGist,
//         username: 'NICK',
//         lastGistUrl: 'https://api.github.com/users/octocat/gists'
//       });
//     }
//   }.bind(this));
// },
//
// render: function() {
//   return (
//     <div>
//     {this.state.username}s DISNEY API RESULTS
//     <a href={this.state.lastGistUrl}>HERE</a>.
//     <h2>There are {this.stuff} results:</h2>
//     <p>{this.state.stuff}</p>
//     </div>
//   );
// }
// });
//


// var BlogPosts = React.createClass({
//   render: function () {
//     return (
//       <ul className="example-orbit" data-orbit>
//       <li>
//       <img src="http://www.mrwallpaper.com/wallpapers/cute-kitty-1680x1050.jpg" alt="slide 1" />
//       <div className="orbit-caption">
//       Caption One.
//       </div>
//       </li>
//       <li className="active">
//       <img src="http://cdn7.staztic.com/app/a/3099/3099339/cute-kitty-wallpaper-hd-2-3-s-307x512.jpg" alt="slide 2" />
//       <div className="orbit-caption">
//       Caption Two.
//       </div>
//       </li>
//       <li>
//       <img src="http://en.people.cn/mediafile/201005/07/F201005070843311986125905.jpg" alt="slide 3" />
//       <div className="orbit-caption">
//       Caption Three.
//       </div>
//       </li>
//       </ul>
//     )
//   }
// })

// var TripTabs = React.createClass({
//   render: function () {
//     return (
//       <ul>
//         <li> Trip Info </li>
//         <li> Things to Do </li>
//         <li> Travel Blog </li>
//       </ul>
//     )
//   }
// })




//// *********** Examples *************

// var inputStuff = React.createClass({
//   getInitialState: function() {
//     return {value: 'Hello!'};
//   },
//   handleChange: function(event) {
//     this.setState({value: event.target.value});
//   },
//   render: function() {
//     var value = this.state.value;
//     return (
//       <div>
//       <div><h2>{value}</h2></div>
//       <input type="text" value={value} onChange={this.handleChange} /></div>
//     )
//   }
// })
//
// var inputPractice = React.createClass({
//   getInitialState: function() {
//     return {value: 'Hello!'};
//   },
//   handleChange: function(event) {
//     this.setState({value: event.target.value});
//   },
//   render: function() {
//     var value = this.state.value;
//     return (
//       <div>
//       <p>{value}</p>
//       <input type="text" value={value} onChange={this.handleChange} />
//       </div>
//     )
//   }
// })
//
// var selectFruit = React.createClass({
//   render: function(){
//     return(
//       <select>
//       <option value="A">Apple</option>
//       <option value="B">Banana</option>
//       <option value="C">Cranberry</option>
//       </select>
//     )
//   }
// })
//
// var LikeButton = React.createClass({
//   getInitialState: function() {
//     return {liked: false};
//   },
//   handleClick: function(event) {
//     this.setState({liked: !this.state.liked});
//   },
//   render: function() {
//     var text = this.state.liked ? 'like' : 'haven\'t liked';
//     return (
//       <p onClick={this.handleClick}>
//       You {text} this. Click ta Switch.
//       </p>
//     );
//   }
// });
