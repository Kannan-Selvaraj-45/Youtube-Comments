import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  width: 100%;
  margin-top: 20px;
  list-style-type: none;
`

export const Avatar = styled.p`
  flex-shrink: 0;
  text-align: center;
  color: #ffffff;
  background-color: ${({avatarColor}) => avatarColor};

  font-family: 'Roboto';
  font-size: 16px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin: 0px;
  padding: 7px;
`

export const NameAndCommentContainer = styled.div`
  margin-left: 12px;
`

export const NameText = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
`

export const CommentText = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 12px;
`

export const HorizontalLine = styled.hr`
  border: 1px solid #cbd5e140;
`
export const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`
export const Delete = styled.button`
  width: 100px;
  height: 30px;
  background-color: transparent;
  font-size: 24px;
  border-width: 0;
  cursor: pointer;
`
