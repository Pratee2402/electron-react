import React, { Component } from "react";
import userdata from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: [],
      searchedData: "",
      showRightConatiner: false,
      fetchedData: {}
    };
  }
  handleSearchChange = (event) => {
    let data = event.target.value;
    let data1 = {};
    this.setState({ searchedData: event.target.value });
    console.log(this.state.searchedData);
    this.setState({ showRightConatiner: true });
    for (var i = 0; i < this.state.userDetails.length; i++) {
      if (this.state.userDetails[i] === data) {
        data1.name = data.Name;
        data1.email = data.Emailid;
        data1.mobile = data.Mobileno;
        data1.gender = data.Gender;
        data1.nationality = data.Nationality;
      }
    }
    this.setState({ fetchedData: data1 });
  };
  componentDidMount() {
    this.setState({ userDetails: userdata });
    console.log(this.state.searchedData);
  }
  render() {
    console.log(this.state.userDetails);

    return (
      <div className="flex-container">
        <div className="left-container">
          <form>
            <input
              type="text"
              placeholder="Search"
              name="search"
              value={this.state.searchedData}
              onChange={this.handleSearchChange}
            />
            {/* <button type="submit"><i className="fa fa-search"></i></button> */}
          </form>
          {this.state.userDetails.map((data, key) => {
            return <ul key={key}>{data.Name}</ul>;
          })}
        </div>
        <div className="right-container">
          {this.state.showRightConatiner && (
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Gender</th>
                <th>Nationality</th>
              </tr>
              <tr>
                <td>{this.state.fetchedData.name}</td>
                <td>{this.state.fetchedData.email}</td>
                <td>{this.state.fetchedData.mobile}</td>
                <td>{this.state.fetchedData.gender}</td>
                <td>{this.state.fetchedData.nationality}</td>
              </tr>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default App;
