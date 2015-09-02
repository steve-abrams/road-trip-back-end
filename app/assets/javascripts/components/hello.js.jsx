var HelloWorld = React.createClass({
  render: function(){
    return <h1>Hello World</h1>;
  }
})

React.render(<HelloWorld />, document.getElementById('content'));
