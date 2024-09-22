import {useState, useEffect} from 'react'
import {MdDelete} from 'react-icons/md'
import {
  ListItem,
  Avatar,
  NameAndCommentContainer,
  NameText,
  CommentText,
  HorizontalLine,
  DeleteButtonContainer,
  Delete,
} from './styledComponents'

const avatarColors = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#F1C40F',
  '#8E44AD',
  '#E67E22',
  '#FF9F00',
  '#FF4081',
  '#00BFFF',
  '#7FFF00',
  '#FF1493',
  '#FFD700',
  '#00FA9A',
  '#8A2BE2',
  '#FF4500',
]

const generateRandomBg = () => {
  const randomIndex = Math.floor(Math.random() * avatarColors.length)
  return avatarColors[randomIndex]
}

const CommentItem = props => {
  const {commentsList, deleteComment} = props
  const {name, commentText, id} = commentsList

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const [avatarColor, setAvatarColor] = useState('')

  useEffect(() => {
    setAvatarColor(generateRandomBg())
  }, [commentsList])

  return (
    <>
      {name && commentText && (
        <>
          <ListItem>
            <Avatar avatarColor={avatarColor}>{name[0].toUpperCase()}</Avatar>
            <NameAndCommentContainer>
              <NameText>{name}</NameText>
              <CommentText>{commentText}</CommentText>
            </NameAndCommentContainer>
            <DeleteButtonContainer>
              <Delete onClick={onDeleteComment}>
                <MdDelete />
              </Delete>
            </DeleteButtonContainer>
          </ListItem>
          <HorizontalLine />
        </>
      )}
    </>
  )
}

export default CommentItem
