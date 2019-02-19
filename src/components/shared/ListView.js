import React, { Component } from "react";
import Pagination from './Pagination';
import { getPageIndex } from '../../actions/utilities.action'
import SearchBar from './SearchBar'
import NoRecord from './NoRecord'
import "./ListView.css";


/**
 * ListView
 * @onPageChange (already proper format)
 * @title
 * @fieldnames [title of arr]
 * @totalCount 
 * @hideNavigation hide pagination
 * @hideCondition hide show more less button
 * @onSearch
 * @onClear
 */
class ListView extends Component {
  state = {
    isLess: true
  }

  handlePageChange = (page) => {
    if (this.props.onPageChange) this.props.onPageChange(page)
  }

  handleSubmit = (keywords) => {
    if (this.props.onSearch) this.props.onSearch(keywords)
  }

  handleClear = () => {
    if (this.props.onClear) this.props.onClear('')
  }

  showMore = () => {
    this.setState(states => ({ isLess: !states.isLess }));
  }

  renderList = (list = []) => {
    if (!this.props.totalCount) {
      const cols = this.props.fieldNames.length;
      return <NoRecord howManyCol={cols} />
    }
    if (this.state.isLess) {
      return list.slice(0, 5).map(item => item)
    }
    return list.map(item => item)
  }

  render() {
    /** @data field
     * {fieldNames, color} = props
     */
    const renderFieldNames = (names = []) => {
      return names.map((name, key) => (
        <th
          scope="col"
          key={key}
          className="text-dark text-left"
        >
          {name}
        </th>
      ));
    };

    return (
      <div className="table-responsive rounded border bg-white">
        <section className="d-flex justify-content-between p-3 border-bottom shadow-sm">
          <title className="d-block d-flex align-items-center h6">{this.props.title}</title>
          <div><SearchBar name="search_deposit" onSubmit={this.handleSubmit} onClearClick={this.handleClear} /></div>
        </section>
        <table className="table">
          <thead>
            <tr>{renderFieldNames(this.props.fieldNames)}</tr>
          </thead>
          <tbody>
            {this.renderList(this.props.children)}
          </tbody>
        </table>
        {this.props.hideCondition && this.state.isLess && <button className="btn btn-link" onClick={this.showMore}>
          Show More...</button>
        }
        {this.props.hideCondition && !this.state.isLess && <button className="btn btn-link" onClick={this.showMore}>
          Show Less...</button>
        }
        {!this.props.hideNavigation && !this.state.isLess
          && <Pagination onPageChange={this.handlePageChange}
            count={this.props.totalCount}
          />}
      </div>
    );
  }
}

export default ListView;
