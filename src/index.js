import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from'youtube-api-search';
import _ from 'lodash';
import axios from 'axios';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC1YxAMc8Ebts_EvzeAhwneZbUnvEtfvOA';
class App extends Component {
	constructor(props){
		super(props);
		this.state = { videos: [] };
		this.videoSearch('surfboards');
	}
	videoSearch(term){
		YTSearch({ key: API_KEY, term: term }, videos => {
			const id = videos[0].id.videoId;
			axios.get('https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=AIzaSyC1YxAMc8Ebts_EvzeAhwneZbUnvEtfvOA&part=snippet,contentDetails,statistics,status')
			.then(response => {
				this.setState({videos: videos, selectedVideo : response});
			})
			.catch(error => {
				console.log(error);
			});
		});
	}
	videoSelect(id){
		axios.get('https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=AIzaSyC1YxAMc8Ebts_EvzeAhwneZbUnvEtfvOA&part=snippet,contentDetails,statistics,status')
			.then(response => {
				this.setState({selectedVideo: response});
			})
			.catch(error => {
				console.log(error);
			});
	}
	render(){
		const videosearch = _.debounce(term => { this.videoSearch(term) }, 1000);
		return (<div>
			<div className = 'logo'><img className = 'logo-size' src= 'src/components/images/yt_logo_rgb_light.png' /></div>
			<SearchBar onSearchTermChange = {videosearch} />
			<VideoDetail video = {this.state.selectedVideo} />
			<VideoList onVideoSelect = {selectedVideo => this.videoSelect(selectedVideo)} videos = {this.state.videos} />
		</div>);
	}
}
ReactDOM.render(<App />, document.querySelector('.container'));
//AIzaSyCoy__H8Xkxej2dEFuXjgV36D-0czkn0AU YT API key