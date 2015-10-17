var React = require('react');
var ReactDOM = require('react-dom');

var data = require('../../../data/shleems.js');

data.push({name: 'poop', text: 'extra poop', media: 'poop song'});

var Shleem = React.createClass({
  	render: function() {
	    return (
	    	<div className="shleem">
	        	<h3>Name: {this.props.shleem.name}</h3>
	        	<h3>Text: {this.props.shleem.text}</h3>
	        	<h3>Media: {this.props.shleem.media}</h3>
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

var PostButton = React.createClass({
    render: function() {
        return (
        	<div className="postButton">
				<button onClick={this.myFunction}>CLICK ME</button>
			</div>
      	);
    },
    myFunction: function() {
    	data.unshift({name: 'poop', text: 'extra poop', media: 'poop song'});
    	ReactDOM.render(React.createElement(Page), document.body);
    }
});

var Page = React.createClass({
  	render: function() {
	    return (
	    	<div className="page">
	    		<h1>WELCOME TO SHLEEM</h1>
	       		<ShleemStream />
	       		<PostButton />
	      	</div>
	    );
 	}
});


ReactDOM.render(React.createElement(Page), document.body);





