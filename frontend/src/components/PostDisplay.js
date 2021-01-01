import React from 'react';
import "./PostDisplay.css";

/** Display a post:
 *
 * - show edit/delete buttons (& call parent on action)
 * - show vote count and +/- buttons (& call parent on action)
 *
 */

function PostDisplay({ doVote, toggleEdit, deletePost, post }) {
  const { title, description, body, votes, comments } = post;
  console.log("POSST", post)

  return (
    <div className="lineBlock">
      <div className="PostDisplay">
        <div>
          <h2>{title}</h2>
          <p><i>{description}</i></p>
          <div>{body}</div>
        </div>

        <div className="PostDisplay-right">
          <div className="PostDisplay-edit-area">
            <i className="fas fa-edit text-primary"
              onClick={toggleEdit} />
            <i className="fas fa-times text-danger"
              onClick={deletePost} />
          </div>
          <div className="PostDisplay-votes">
            <b>votes: {votes > 0 ? <span className="votes-count-pos">{votes}</span> : <span className="votes-count-neg">{votes}</span>}</b>

            <i className="fas fa-thumbs-up text-success"
              onClick={evt => doVote("up")} />
            <i className="fas fa-thumbs-down text-danger"
              onClick={evt => doVote("down")} />
          </div>
          <div>
            <b>comments: <span>{comments.length != 0 ? comments.length : "none"}</span></b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDisplay;