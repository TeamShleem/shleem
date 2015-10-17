var React = require('react');
var ReactDOM = require('react-dom');

var data = [
  {name: "Rick", text: "You are suppose to turn the boots on."},
  {name: "Morty", text: ":("}
];

var Shleem = React.createClass({
  	render: function() {
	    return (
	    	<div className="shleem">
	        	<h2>I am a shleem within a shleemStream...</h2>
	        	Name: {this.props.author}
	      	</div>
	    );
 	}
});

var ShleemStream = React.createClass({
    render: function() {
        return (
      		<div className="shleemStream">
      			<h1>I am the shleemStream!</h1>
      			<Shleem author="Alvin Zablan" />
      		</div>
      	);
    }
});

ReactDOM.render(React.createElement(ShleemStream), document.body);