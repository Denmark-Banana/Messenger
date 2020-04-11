import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Chat from 'Components/Chat';
import Navigation from 'Components/Navigation';
import Error from 'Components/Error';
import Loader from 'Components/Loader';

const Container = styled.div`
  padding: 20px;
`;

const List = styled.div``;

const ListPresenter = ({ allChats, error, loading }) => (
  <>
    {loading ? (
      <Loader />
    ) : (
      <>
        <Navigation />
        <Container>
          {allChats && allChats.length > 0 && (
            <List>
              {allChats.map((chat) => (
                <Chat
                  key={chat.id}
                  id={chat.id}
                  name={chat.name}
                  imageUrl={chat.imageUrl}
                  lastTime={chat.lastTime}
                  messageCount={chat.messageCount}
                  chats={chat.chats}
                />
              ))}
            </List>
          )}
          {error && <Error text={error} color="#e74c3c" />}
        </Container>
      </>
    )}
  </>
);

ListPresenter.propTypes = {
  allChats: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default ListPresenter;
