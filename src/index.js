import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';



//youtube api key
const API_KEY = 'AIzaSyB4S5TwLurDQnqlQYwU3AFz33UIpCz3z7w';




//Create a new component, produce html
class App extends Component {


	constructor(props) {
		super(props);
	
		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => { 
		this.setState({ videos });
		//this.setState({ videos: videos }): means the same as ^
		});
	};

 	render(){
		return( 
			<div> 
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	};
};



// take components generated html and put it in the dom


ReactDOM.render(<App />, document.querySelector('.container'));
