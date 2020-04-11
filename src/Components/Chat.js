import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeInAnim = keyframes`
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  animation: ${fadeInAnim} 0.4s ease-in-out;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Name = styled.span`
  margin-bottom: 5px;
  font-weight: bold;
`;

const BottomText = styled.span`
  width: 210px;
  opacity: 0.6;
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LastTime = styled.span`
  width: 50px;
  opacity: 0.6;
  font-size: 11px;
  margin-bottom: 5px;
`;

const MessageCount = styled.div`
  font-size: 10px;
  background-color: ${props => props.theme.primary};
  width: 18px;
  height: 18px;
  display: block;
  border-radius: 50%;
  color: white;
  padding: 3px;
`;

const Chat = ({ id, name, imageUrl, lastTime, messageCount, chats }) => (
  <Link to={`/room/${id}`}>
    <Container>
      <Column>
        <Avatar
          src={
            imageUrl
              ? require(`../assets/poster/${imageUrl}`)
              : require('../assets/poster/no_poster.png')
          }
        />
        <Content>
          <Name>{name}</Name>
          <BottomText>{chats[chats.length - 1].chat}</BottomText>
        </Content>
      </Column>
      <Column>
        <Information>
          <LastTime>{lastTime}</LastTime>
          {messageCount > 0 ? (
            <MessageCount>{messageCount}</MessageCount>
          ) : null}
        </Information>
      </Column>
    </Container>
  </Link>
);

Chat.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  lastTime: PropTypes.string,
  messageCount: PropTypes.number,
  chats: PropTypes.array
};

export default Chat;
