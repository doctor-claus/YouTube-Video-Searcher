import React from 'react';
const VideoDetail = ({video}) => {
	if(!video){
		return <div>Loading...</div>;
	}
	console.log(video);
	const videoId = video.data.items[0].id;
	const url = 'https://www.youtube.com/embed/' + videoId;
	return (
		<div className = "video-detail col-md-8">
			<div className = "embed-responsive embed-responsive-16by9">
				<iframe className = "embed-responsive-item" src = {url}></iframe>
			</div>
			<div className = "details">
				<div className = "title">{video.data.items[0].snippet.localized.title}</div>
				<div className = "view-count">{video.data.items[0].statistics.viewCount} views</div>
				<div className = "dislike-count"><img className = "dislike-count-icon" src= "src/components/images/339-200.png" />{video.data.items[0].statistics.dislikeCount}</div>
				<div className = "like-count"><img className = "like-count-icon" src= "src/components/images/585e4e6ccb11b227491c339e.png" />{video.data.items[0].statistics.likeCount}</div>
			</div>
		</div>
	)
}
export default VideoDetail;