import React, { Component } from 'react';
class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = { term: '' };
	}
	render(){
		return <input 
		value = {this.state.term}
		onChange = {event => this.onInputChange(event.target.value)} />;
	}
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;