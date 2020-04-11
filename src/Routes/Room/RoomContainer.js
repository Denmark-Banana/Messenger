import React from 'react';
import RoomPresenter from './RoomPresenter';
import api from 'api';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      name: '',
      allPictures: [],
      isAlbum: false,
      sendMessage: '',
      loading: true,
      error: '',
    };
  }

  updateTerm = (event) => {
    const {
      target: { value: sendMessage },
    } = event;
    this.setState({
      sendMessage,
    });
  };

  handleSubmit = () => {
    const { sendMessage, chats } = this.state;
    const timeKey = new Date().getTime();
    if (sendMessage) {
      this.setState({
        chats: [...chats, { id: timeKey, type: 'sending', chat: sendMessage }],
        sendMessage: '',
      });
    }
  };
  
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  }

  clickAlbum = () => {
    const { isAlbum } = this.state;
    this.setState({
      isAlbum: !isAlbum
    });
  };

  clickPicture = (event) => {
    const { chats } = this.state;
    const timeKey = new Date().getTime();
    this.setState({
      chats: [...chats, { id: timeKey, type: 'sending', imageUrl: `picture${event.target.id}.png`}]
    })
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      return push('/list');
    }
    try {
      const { chats, name } = await api.chats(parsedId);
      const { allPictures } = await api.allPictures();

      this.setState({
        chats,
        name,
        allPictures,
      });
    } catch {
      this.setState({
        error: "Can't find message information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const {
      chats,
      name,
      allPictures,
      isAlbum,
      error,
      loading,
      sendMessage,
    } = this.state;
    return (
      <RoomPresenter
        chats={chats}
        name={name}
        allPictures={allPictures}
        error={error}
        loading={loading}
        sendMessage={sendMessage}
        handleSubmit={this.handleSubmit}
        handleKeyPress={this.handleKeyPress}
        updateTerm={this.updateTerm}
        isAlbum={isAlbum}
        clickAlbum={this.clickAlbum}
        clickPicture={this.clickPicture}
      />
    );
  }
}
