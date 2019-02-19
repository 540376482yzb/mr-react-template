import React, { Component } from "react";
import Pagination from "react-js-pagination";
import { getPageCount, getPageIndex } from "../../actions/utilities.action";
import './Pagination.css';
export default class ANPagination extends Component {

  state = {
    activePage: 1
  }

  handlePageChange = async (data) => {
    // console.log(data)
    await this.setState({ activePage: data })
    if (this.props.onPageChange) this.props.onPageChange(getPageIndex(data))
  }
  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={30}
          totalItemsCount={this.props.count}
          pageRangeDisplayed={6}
          onChange={this.handlePageChange}
          activeClass={'pagination-active'}
        />
      </div>
    )
  }

}
