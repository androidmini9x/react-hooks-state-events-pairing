import {useState} from "react";
import Comment from "./Comment";

function CommentList({comments}) {

	const [isHide, setHide] = useState(false);

	const commentsList = comments.map((cnt) => {
		return <Comment key={cnt.id} user={cnt.user} comment={cnt.comment} />
	});

	return (
		<div>
			<button onClick={() => setHide(!isHide)}>{isHide ? "Show Comments" : "Hide Comments"}</button>
			<hr />
			<h1>{comments.length} Comments</h1>
			{isHide ? "" : commentsList}
		</div>
	);
}

export default CommentList;