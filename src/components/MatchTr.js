
import React, { Component } from 'react'
import m from 'moment';
import {Link} from 'react-router';

export default class MatchTr extends Component {

  render() {
    //const lang = this.state.lang;
    
    return (<tr key={`match_${match.id}`}>
      <td className="player-name">
        <div className="table-matches-title">
          <span className="first-team">{match.team1.name}</span> <span className="count">{match.score}</span> <span className="second-team">{match.team2.name}</span>
        </div>
        <div className="table-matches-subtitle">
          <span className="place">{match.team2.name}</span>,&nbsp;
          <span className="date">{m(match.match_date).format('DD MMMM YYYY - HH:mm')}</span>
        </div>
        <Link to={`/matches/${match.id}`}  className="table-matches-info-full-link" >#</Link>
      </td>
    </tr>);
  }
};

module.exports = MatchTr;
