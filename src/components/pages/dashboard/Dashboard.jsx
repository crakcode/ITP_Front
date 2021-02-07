import { Paper, TableBody, TableCell, TableRow, TextField } from '@material-ui/core'
import { addCommunity, getCommunityById, getCommunitys } from '../../../lib/community';
import React, { Component } from 'react';
const API = "https://jsonplaceholder.typicode.com/users";

class Dashboard extends Component {
  state = {
    monsters: [],
    monstersData: [],
    userInput: "",
  };

  componentDidMount = () => {
    fetch(API, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        this.setState({ monsters: result, monstersData: result });
      });
  };

  searchUser = (e) => {
    this.setState({ userInput: e.target.value });
  };

  filterUser = () => {
    const filterMonsters = this.state.monstersData.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.userInput);
    });
    this.setState({ monsters: filterMonsters });
  };

  render() {
    return (
      <div className="Monsters">
        <h1>컴포넌트 재사용 연습!</h1>
        {/* <SearchBox
          handleChange={this.searchUser}
          handleFilter={this.filterUser}
        />
        <CardList monsters={this.state.monsters} /> */}
      </div>
    );
  }
}

export default Dashboard;