// var React = require('react');
// var ReactDOM = require('react-dom');

// var data = [
//   {name: "Rick", text: "You are suppose to turn the boots on.", url: 'http://placekitten.com/250/350'},
//   {name: "Morty", text: ":(", url: 'http://placecorgi.com/250'},
//   {name: "Alvin", text: "i love hackathons", url: 'http://nicenicejpg.com/350'},
//   {name: "Donald Trump", text: "i iz smart", url: 'http://fillmurray.com/g/350/350'}
// ];
var data = require('../../../data/shleems.js');

//data.push({id:name: 'poop', text: 'extra poop', media: 'poop song'});

var Shleem = React.createClass({
  	render: function() {
	    return (
        // <div class="mdl-card mdl-shadow--2dp">
        //   <div class="mdl-card__title mdl-card--expand">
        //     <h2 class="mdl-card__title-text">{this.props.shleem.url}</h2>
        //   </div>
        //   <div class="mdl-card__supporting-text">
        //     <h3>Name: {this.props.shleem.name}</h3>
        //   </div>
        //   <div class="mdl-card__supporting-text">
        //     <h3>Text: {this.props.shleem.text}</h3>
        //   </div>
        // </div>
	    	<div className="shleem">
	        	<h3>Name: {this.props.shleem.name}</h3>
	        	<h3>Text: {this.props.shleem.text}</h3>
	        	<h3>Media: {this.props.shleem.media}</h3>
	        	<h3>Likes: {this.props.shleem.likes}</h3>
				<button onClick={this.myFunction}>CLICK ME TO LIKE</button>
	      	</div>
	    );
 	},
 	myFunction: function() {
 		console.log('liked');
 		this.props.shleem.likes++;
 		ReactDOM.render(React.createElement(Page), document.body);
 	}
});

var ShleemStream = React.createClass({
    render: function() {
    	var shleemNodes = data.map(function (shleem) {
			return (
				<div>
			        <Shleem shleem={shleem}></Shleem>
			       	<h2>--------------------------------------------------------------------</h2>
			    </div>
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

var LikeButton = React.createClass({
    render: function() {
        return (
        	<div className="likeButton">
				<button onClick={this.myFunction}>CLICK ME TO LIKE</button>
			</div>
      	);
    },
    myFunction: function() {

    	
    }
});

ReactDOM.render(React.createElement(Page), document.body);
