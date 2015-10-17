var React = require('react');
var ReactDOM = require('react-dom');

var data = [
  {name: "Rick", text: "You are suppose to turn the boots on."},
  {name: "Morty", text: ":("},
  {name: "Alvin", text: "i love hackathons"},
  {name: "Donald Trump", text: "i iz smart"}	
];

var Shleem = React.createClass({
  	render: function() {
	    return (
	    	<div className="shleem">
	        	<h3>Name: {this.props.shleem.name}</h3>
	        	<h3>Text: {this.props.shleem.text}</h3>
	        	<h2>--------------------------------------------------------------------</h2>
	      	</div>
	    );
 	}
});

var ShleemStream = React.createClass({
    render: function() {
    	var shleemNodes = data.map(function (shleem) {
			return (
		        <Shleem shleem={shleem}></Shleem>
      		);
  		});
        return (
        	<div className="shleemStream">
				{shleemNodes}
			</div>
      	);
    }
});

ReactDOM.render(React.createElement(ShleemStream), document.body);