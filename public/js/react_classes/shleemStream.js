var React = require('react');
var ReactDOM = require('react-dom');


var data = require('../../../data/shleems.js');


var Shleem = React.createClass({
        render: function() {
            return (
                <div className="shleem">
                        <Sound url={this.props.shleem.media} />
                        <h3>{this.props.shleem.name}</h3>
                        <h3>{this.props.shleem.text}</h3>
                        <h3>Likes: {this.props.shleem.likes}</h3>
                                <button onClick={this.myFunction}>Like ♫</button>
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
                                <button onClick={this.myFunction}>Feed</button>
                        </div>
        );
    },
    myFunction: function() {
        data.unshift({name: 'Leeroy Jenkins', text: 'Leeeeeeroy!', media: 'https://soundcloud.com/tommisch/lianne-la-havas-what-you-dont-do-tom-misch-remix'});
        ReactDOM.render(React.createElement(Page), document.body);
    }
});

var Page = React.createClass({
        render: function() {
            return (
                <div className="page">
                        <h1>♪ Shleem ♪</h1>
                        <PostButton />
                        <ShleemStream />
                </div>
            );
        }
});


var Sound = React.createClass({
        render: function() {
                var url = this.props.url;
                var url = "http://w.soundcloud.com/player/?url=" + url;
            return (
                <div className = "sound">
                        <iframe id="soundcloud_widget"
                             src={url}
                             width="320"
                             height="120"
                             frameborder="no"></iframe>
                                <script src="js/scripts.js"></script>
                        </div>
            );
        }
});

ReactDOM.render(React.createElement(Page), document.body);
