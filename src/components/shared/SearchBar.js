import React from "react";
import ImageButton from "./ImageButton";
import "./SearchBar.css";

/**
 * @data field [name] [placeholder]
 * @callback props [onSubmit] [onClearClick]
 *
 */
class IconInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  handleChange = async e => {
    const keyword = e.target.value;
    await this.setState({ keyword });
  };

  handleSubmit = async e => {
    if (e) e.preventDefault();
    const { keyword } = this.state;
    this.props.onSubmit(keyword);
  };

  // newHandleEnterSumbit = () => {
  //   this.props.handleEnterSumbit(this.state.keyword);
  // }

  handleClear = async () => {
    if (this.props.onClearClick) this.props.onClearClick();
    await this.setState({ keyword: "" });
  }

  render() {
    const { keyword } = this.state;
    const { name, placeholder } = this.props;
    //=====================================================================================================

    return (
      <form className="filter-item-container" onSubmit={this.handleSubmit}>
        <div id="filter-item-icon" className="d-flex align-items-center">
          <ImageButton
            image={`${process.env.PUBLIC_URL}/img/search.png`}
            type="submit"
            size={24}
            onClick={this.handleSubmit} />
        </div>
        <input
          id={this.props.name}
          name={this.props.name}
          onChange={this.handleChange}
          value={keyword}
          placeholder={placeholder || "search"}
          className={this.props.className}
        />
        <div id="filter-item-icon-reverse" className="d-flex align-items-center">
          <ImageButton
            icon={<i class="fas fa-times text-muted"></i>}
            size={20}
            onClick={this.handleClear}
          />
        </div>
      </form>
    );
  }
}

export default IconInput;
