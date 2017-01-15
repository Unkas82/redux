

import React, {  Component } from 'react'
import axios from 'axios';
//import Match from './MatchTr';
//import m from 'moment';
//import {Link} from 'react-router';

export default class Matches extends Component {

  /*getInitialState() {
    return {
      matches: [],
      offset: 0,
      pageNum: 0,
      limit: 40
    }
  }
*/
/*
  renderMatches() {
    //var mmatches = [];
     axios
      .get("http://localhost:3000/api/v1/matches.json")
      .then(function(result) { 

       // var match = result.data.matches[0];
        console.log('trtrtr');
        console.log( <tr > </tr>);
        return (
           <tr >
                  
                </tr>

          )        
      });
  }*/

  render() {
    //var i8n = this.context.i8n;
    return (<div>

      <div className="container content">
        <section className="main-info full-width">
          <a className="btn btn-primary" href="/matches/new">Новый матч</a>
          <div className="table-scroll-wrapper">
            <table className="table table-striped team-stats matches-list">
              <thead>
                <tr className="table-header">
                  <th className="player-name">Matches</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* this.renderMatches() */}

              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>);

  }
};
module.exports = Matches;