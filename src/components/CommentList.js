import Comment from "./Comment";

function CommentList({comments}) {

	const commentsList = comments.map((cnt) => {
		return <Comment key={cnt.id} user={cnt.user} comment={cnt.comment} />
	});

	return (
		<div>
			<h1>{comments.length} Comments</h1>
			{commentsList}
		</div>
	);
}

export default CommentList;