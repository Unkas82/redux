import React, { PropTypes, Component } from 'react'
import axios from 'axios';
//import configureStore from '../store/configureStore';
//import MatchTr from './MatchTr';

export default class Page extends Component {
  onYearBtnClick(e) {
    //this.props.setYear(+e.target.innerText)
    //this.props.getMatches()
    //var mmm = this.props.matches
    //this.context.store.dispatch(fetchMatchInfo(this.props.match.match_id))
    //console.log('this.store');
    //console.log(this.props);
    //console.log(this);


    // jQuery!/* 
    /*
 axios
  .get("http://localhost:3000/api/v1/matches.json")
  .then(function(result) {    
    mmm = result.data.matches;
    //console.log(result.data.matches);
  });
  this.props.matches = mmm;
  */
}

/*
 Page() {
    return $.getJSON('http://localhost:3000/api/v1/matches.json')
      .then((data) => {
        this.setState({ photos: data.results });
      });
  }
*/



 componentWillMount() {
    axios.get("http://localhost:3000/api/v1/matches.json")
      .then(res => {
        const matches = res.data.matches;
        this.setState({ matches });
      });

  }

      //console.log('this.state');


   /*renderMatches() {

        return (
           <tr >
                  
                </tr>
          )        
  }*/

  render() {

    const { year, photos } = this.props
    return <div className='ib page'>
      <p>
        <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2016</button>{' '}
        <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2015</button>{' '}
        <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2014</button>
      </p>
      <h3>{year} год</h3>
      <p>У тебя {photos.length} фото.</p>



            <table className="table table-striped team-stats matches-list">
              <thead>
                <tr className="table-header">
                  <th className="player-name">Matches</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* this.renderMatches() */}

                { this.state != null? 
                  this.state.matches.map( (m) => (

                     <div className="table-matches-subtitle">
                      <span className="place">{m.team2.name_en}</span>,&nbsp;
                    </div>

                    )
                  ) 
                  : 
                  <div></div>
                }

              </tbody>
            </table>
    </div>

    
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
}