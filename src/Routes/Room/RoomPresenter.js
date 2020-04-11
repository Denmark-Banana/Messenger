import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Message from 'Components/Message';
import Section from 'Components/Section';
import Picture from 'Components/Picture';
import Error from 'Components/Error';
import Loader from 'Components/Loader';
import Navigation from 'Components/Navigation';
import { Email } from '@styled-icons/material';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.room};
`;

const Content = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const List = styled.ul`
  height: 72vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Form = styled.div`
  background-color: ${props => props.theme.room};
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 20px;
  justify-content: space-between;
`;

const Input = styled.input`
  padding: 7px 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  color: #444444;
  font-weight: 600;
  font-family: inherit;
  background-color: white;
  margin-right: 10px;
  resize: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &::placeholder {
    font-weight: 300;
    color: rgba(0, 0, 0, 0.7);
  }
`;

const Button = styled.div`
  display: flex;
  padding: 8px;
  background-color: ${props => props.theme.primary};
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  svg {
    height: 100%;
  }
  cursor: pointer;
`;

const RoomPresenter = ({
  chats,
  name,
  allPictures,
  error,
  loading,
  handleSubmit,
  handleKeyPress,
  sendMessage,
  updateTerm,
  clickPicture,
  clickAlbum,
  isAlbum,
}) => (
  <>
    {loading ? (
      <Loader />
    ) : (
      <>
        <Navigation name={name} clickAlbum={clickAlbum} />
        {isAlbum ? (
          <Section>
            {allPictures.map((item) => (
              <Picture
                id={item.id}
                key={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                clickPicture={clickPicture}
              />
            ))}
          </Section>
        ) : null}
        <Container>
          <Content>
            {chats && chats.length > 0 && (
              <List>
                {chats.map((item) => (
                  <Message
                    key={item.id}
                    type={item.type}
                    chat={item.chat}
                    imageUrl={item.imageUrl}
                  ></Message>
                ))}
              </List>
            )}
          </Content>
          <Form>
            <Input
              onKeyPress={handleKeyPress}
              value={sendMessage}
              onChange={updateTerm}
              placeholder={'메시지를 입력하세요.'}
            ></Input>
            <Button onClick={handleSubmit}>
              <Email />
            </Button>
          </Form>
          {error && <Error text={error} color="#e74c3c" />}
        </Container>
      </>
    )}
  </>
);

RoomPresenter.propTypes = {
  chats: PropTypes.array,
  name: PropTypes.string.isRequired,
  allPictures: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleKeyPress: PropTypes.func,
  sendMessage: PropTypes.string,
  updateTerm: PropTypes.func,
  clickPicture: PropTypes.func,
  clickAlbum: PropTypes.func,
  isAlbum: PropTypes.bool.isRequired,
};

export default RoomPresenter;
