import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import Matches from '../components/Matches'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page } = this.props
    //const { setYear } = this.props.pageActions
    const { getMatches } = this.props.pageActions

    return <div className='row'>
      <Page photos={page.photos} year={page.year}  getMatches={getMatches} matches={page.matches} />
      <User name={user.name} />
      <Matches />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)