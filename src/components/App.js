import React from "react";
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";

const KEY = "AIzaSyDcpUks4W-MtemF3B23-_Jrs8yjfIvy0Tw";
class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
