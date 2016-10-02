// main.js
var React = require('react'),
    ReactDOM = require('react-dom'),
    Data = require('./data.jsx');

var GetSositem = React.createClass({
  render: function () {
    return(
      <div className="col s12 m6 l3">
        <div className="sos">
          <div className="img">
            <img src={this.props.item.img} />
          </div>
          <div className="sos-item">
            <span className="stitle">{this.props.item.title}</span>
            <p><span>{this.props.item.name}</span>
              {this.props.item.text}
            </p>
            <a href={this.props.item.url} className="round-button">Visit</a>
          </div>
        </div>
      </div>
    );
  }
});
var Soslist = React.createClass({
  num: 0,
  render: function() {
    var self = this;
    return (
        <div className="row">
          {this.props.data.map(function(item) {
            self.num += 1;
            return <GetSositem key={self.num} item={item} />;
          })}
        </div>
    );
  }
});
ReactDOM.render(
  <Soslist data={Data.data} />,document.getElementById('site')
);
