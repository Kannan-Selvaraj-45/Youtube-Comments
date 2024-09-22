import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  //  const [comment, setComment] = useState({name: '', commentText: ''})
  const [commentsList, setCommentsList] = useState([])

  const onAddComment = event => {
    event.preventDefault()
    // setComment({name, commentText})
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentsList(prevState => [...prevState, newComment])
    setName('')
    setCommentText('')
  }

  const deleteComment = id => {
    setCommentsList(prevState => [
      ...prevState.filter(eachItem => eachItem.id !== id),
    ])
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachItem => (
          <CommentItem
            commentsList={eachItem}
            key={eachItem.id}
            deleteComment={deleteComment}
          />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
