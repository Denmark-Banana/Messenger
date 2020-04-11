import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const incomingAnim = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const sendingAnim = keyframes`
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const uploadAnim = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const progressAnim = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

const Container = styled.li`
  display: flex;
  margin-bottom: 20px;

  align-self: ${(props) => (props.isIncomingType ? 'flex-start' : 'flex-end')};
  animation: ${(props) => (props.isIncomingType ? incomingAnim : sendingAnim)} 0.4s
    ease-out forwards;
`;

const Content = styled.div``;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  width: 150px;
  height: 150px;
  background-size: cover;
  border-radius: 15px;
  background-position: center center;
  transition: opacity 0.1s linear;
  animation: ${uploadAnim} 4s ease-out forwards;
  margin-bottom: 5px;
`;

const Progressbar = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  width: 150px;
  height: 10px;
  border-radius: 10px;
  background-color: #a4a6b0;
`;

const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  background-color: ${props => props.theme.primary};
  width: 150px;
  height: 10px;
  border-radius: 5px;
  animation: ${progressAnim} 4s ease-out;
`;

const Text = styled.span`
  background-color: white;
  display: block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 12px;
  border-radius: 10px;

  background-color: ${(props) => (props.isIncomingType ? 'white' : props.theme.primary)};
  color: ${(props) => (props.isIncomingType ? 'inherit' : 'white')};
`;

const Message = ({ type, chat, imageUrl }) => (
  <Container isIncomingType={type === 'incoming' ? 1 : 0}>
    <Content>
      {imageUrl ? (
        <>
          <Image
            bgUrl={
              imageUrl
                ? require(`../assets/picture/${imageUrl}`)
                : require('../assets/poster/no_poster.png')
            }
          />
          <Progressbar>
            <Progress />
          </Progressbar>
        </>
      ) : (
        <Text isIncomingType={type === 'incoming' ? 1 : 0}>{chat}</Text>
      )}
    </Content>
  </Container>
);

Message.propTypes = {
  type: PropTypes.string.isRequired,
  chat: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Message;
