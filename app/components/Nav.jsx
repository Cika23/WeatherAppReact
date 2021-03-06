var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
      e.preventDefault();
      alert('Not yet wired up!');
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
