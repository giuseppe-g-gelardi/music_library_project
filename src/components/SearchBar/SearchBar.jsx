import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchTerm: "",
      field : ""

    }
  }
  onChange=(event)=>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  handleSubmit=(e) =>{
    e.preventDefault()
    this.props.filter(this.state.field, this.state.searchTerm)
  }
  render() { 
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>

          <select name="field" onChange={this.onChange}>
            <option selected value="">Search</option>
            <option value="title">Title</option>
            <option value="album">Album</option>
            <option value="artist">Artist</option>
            <option value="release_date">Release Date</option>
          </select>

          <input onChange={this.onChange} name="searchTerm"></input>
          <button type="submit">Submit</button>
        </form>
      </div>

    );
  }
}
 
export default SearchBar;
