import React from 'react';
import './Article.scss';


var Article = React.createClass({
  render: function() {
    return (
      <li className="article">
        <img className="main-image" src={this.props.image} width="60px" height="60px" />
        <div className="title">{this.props.article.title}</div>
        <div className="summary"> {this.props.name} </div>
        <div className="author"> {this.props.phoneNumber} </div>
        <div className="time"> {this.props.phoneNumber} </div>
      </li>
    );
  }
});

module.exports = Article;
