import { h } from 'preact'
import { Link } from 'preact-router/match'
// import { Layout, Section } from "preact-layout";
import style from './style.css'

// If user is signed in, will display input box. Otherwise, just the comments.
const CommentsSection = (props) => {
  let comments = props.comments;
  let isSignedIn = false;
  return (
    <div class={style['comments-section']}>

      {/* Comment Input Box. If user is signed in will show comment input otherwise, there will be a prompt to log in */}
      <div class={style['comments-input-section']}>
        {isSignedIn ?
        <label for='comments-input-form'>Leave a Comment Below: </label>
        :<p><Link href="/">Log in</Link> to leave a comment!</p>}
        {isSignedIn ?

        <form action='/action_page.php' class={style['comments-input-form']}>
          <textarea class={style['comments-input']} name='comment' form='comments-input-form' placeholder="Start typing here...">

          </textarea><input type="submit" value="Send"/>
        </form>: ''}

      </div>

     {/* Display all comments and all comment replies */}
      <div class={style['comments-listing']}>
          <p>Comments (Most Popular)</p>
          {comments.map(comment =>
              <div>
                <div class={style['comment-single']} >
                <p class={style['comment-single-header']}><Link href={`/profile/${comment.userName}`}>{comment.userName}</Link> says:</p>
                <p class={style['comment-single-text']}>{comment.comment}</p>
                <p class={style['reply-prompt']} ><Link href='/reply' >Click Here to Reply</Link></p>
                </div>
                {comment.replies ? comment.replies.map(comment =>
                    <div  class={style['comment-reply']}>
                    <p class={style['comment-reply-header']}><Link href={`/profile/${comment.userName}`}>{comment.userName}</Link> says:</p>
                    <p class={style['comment-reply-text']}>{comment.comment}</p>
                    <p class={style['reply-prompt']} ><Link href='/reply' >Click Here to Reply</Link></p>
                    </div>
                ):''}
              </div>
        )}

        <button class={style['load-more-button']}>Load More </button>


      </div>

    </div>
  )
}

export default CommentsSection
