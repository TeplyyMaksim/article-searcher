import React from 'react';
import './Article.scss';


var Article = React.createClass({
  render: function() {
    return (
      <li className="article">
        <img className="main-image" src={this.props.article.mainImage} width="200px" height="200px" />
        <div className="title">{this.props.article.title}</div>
        <div className="summary"> {this.props.article.summary} </div>
        <div className="author"> {this.props.article.author} </div>
        <div className="time"> {this.props.article.time} </div>
      </li>
    );
  }
});

module.exports = Article;
