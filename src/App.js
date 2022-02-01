import React from "react";
import Header from "./Dashboard/Header/Header";
import Search from "./Dashboard/Searchbar/Searchbar";
import Emojis from "./Dashboard/Emojis/EmojiResults";
import Filter from "./Dashboard/Emojis/Filter"
import { PureComponent } from "react";
import './App.css';

export default class app extends PureComponent {

  state = {
    filteredEmojis: Filter("", 20)
  }

  inputChange = (event) => {
    this.setState({
      filteredEmojis: Filter(event.target.value, 15)
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Search inputChange={this.inputChange} />
        <Emojis emojiData={this.state.filteredEmojis} />
      </div>
    )
  }
}
