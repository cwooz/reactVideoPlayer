import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyB8sPzLRQDO2Zti7_j_0fPEitMihDfaNpI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, tem: 'surfboards'}, (videos) => {
      // this.setState({ videos: videos })
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );  
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
