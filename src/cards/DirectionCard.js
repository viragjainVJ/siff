import '../css/Directioncard.css';
import React from 'react';
import North from '../images/North.jpg';
import East from '../images/East.jpg';
import West from '../images/West.jpg';
import South from '../images/South.jpg';

class DirectionCard extends React.Component {
    state = {
        articles: {
            'article': {
              "color": "FEC006",
              "thumbnail": North,
              "category": "North Zone"
            },
            'article-1': {
              "color": "2196F3",
              "thumbnail": East,
              "category": "East Zone"
            },
            'article-2': {
              "color": "FE5621",
              "thumbnail": West,
              "category": "West Zone"
            },
            'article-3': {
              "color": "673AB7",
              "thumbnail": South,
              "category": "South Zone"
            }
          }
    }
     renderArticle = (key) => {
        return (
          <div className="column">
            <Article key={key} index={key} details={this.state.articles[key]} openTab={this.props.openTab}/>
          </div>
        )
      }

      render() {
        return (
          <div className="app">
            <div className="container">
              {Object.keys(this.state.articles).map(this.renderArticle)}
            </div>
          </div>
        )
      }
}
  /*
    Article
    <Article />
  */
 class Article extends React.Component {
     openPage = (value) => {
         
         alert('HI' + value);
     }
     render() {
        var details = this.props.details,

        styles = {
          backgroundColor: '#' + details.color
        };
        return (
            <article className="article">
              <h3 className="article__category" style={styles}>{details.category}</h3>
              <div><img src={details.thumbnail} className='thumbnail' alt={details.thumbnail}></img></div>
              <button className="article__category article-button" style={styles} onClick={() => this.props.openTab(details.category)}>Get Contact Details</button>
            </article>
          )
     }
 }
  
  
  export default DirectionCard;