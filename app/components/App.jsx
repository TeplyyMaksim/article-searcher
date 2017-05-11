import React from 'react';
import './App.scss';
import Article from './Article/Article.jsx';
import remoteArticles from './articles.json'

var App = React.createClass({
  getInitialState: function() {
    return {
      displayedArticles: remoteArticles
    };
  },
  handleSearch: function(event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedArticles = remoteArticles.filter(function(el) {
      var searchValue = `${el.title.toLowerCase()} ${el.author.toLowerCase()} ${el.summary.toLowerCase()}`;
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({
      displayedArticles: displayedArticles
    });
  },
  render() {
    return (
      <div className="article-block">
        <h1>List of greatest articles</h1>
        <input type="text" placeholder="Search article" className="search-field" onChange={this.handleSearch} />
        <ul className="article-list">
          {
            this.state.displayedArticles.map(function(el) {
              return <Article
                key={el.id}
                article={el}
                />;
            })
          }
        </ul>
      </div>
    );
  }
})

module.exports = App;
