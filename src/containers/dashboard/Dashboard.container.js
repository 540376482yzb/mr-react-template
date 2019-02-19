import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class DashboardContainer extends Component {
  render() {
    return (
      <main>
        Hello
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {})(withRouter(DashboardContainer))

