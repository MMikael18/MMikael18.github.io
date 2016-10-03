// main.js
var React = require('react'),
    ReactDOM = require('react-dom'),
    Data = require('./data.jsx');

var GetSositem = React.createClass({
  render: function () {
    return(
      <div className="col s12 m6 l3">
        <div className="sos">
          <div className="sosimg">
            <img src={this.props.item.img} />
          </div>
          <div className="soscontent">
            <span className="sostitle">{this.props.item.title}</span>
            <span>{this.props.item.name}</span>
            <p>{this.props.item.text}</p>
            <a href={this.props.item.url} className="round-button">Visit</a>
          </div>
        </div>
      </div>
    );
  }
});
var Soslist = React.createClass({
  render: function() {
    return (
        <div className="row">
          {this.props.data.map(function(item) {
            return <GetSositem key={item.key} item={item} />;
          })}
        </div>
    );
  }
});
ReactDOM.render(
  <Soslist data={Data.data} />,document.getElementById('site')
);
