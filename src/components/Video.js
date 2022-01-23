import CommentList from "./CommentList";

function Video({data, onChangeHandle}) {

	function upVote(){
		onChangeHandle({
			...data,
			upvotes: data.upvotes+1
		});
	}

	function downVote(){
		onChangeHandle({
			...data,
			downvotes: data.downvotes+1
		});
	}

	return (
		<>
			<iframe
				width="919"
				height="525"
				src={data.embedUrl}
				frameBorder="0"
				allowFullScreen
				title={data.title}
			>
			</iframe>
			<h1>{data.title}</h1>
			<p>{data.views} Views | Uploaded {data.createdAt}</p>
			<button onClick={upVote}>{data.upvotes}👍</button>
			<button onClick={downVote}>{data.downvotes}👎</button>
			<hr />
			<CommentList comments={data.comments}/>
		</>
	);
}

export default Video;