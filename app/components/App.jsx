import React from 'react';
import topImg from './es6-webpack-react-babel.png';
import './App.scss';
import Article from './Article/Article.jsx';

var App = React.createClass({
  getInitialState: function() {
    return {
      displayedArticles: Articles
    };
  },
  handleSearch: function(event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedArticles = Articles.filter(function(el) {
      var searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({
      displayedArticles: displayedArticles
    });
  },
  render() {
    return (
      <div className="article-list">
        <h1>List of greatest articles</h1>
        <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch} />
        <ul className="articles-list">
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
