import chatDatas from './data/chatDatas.json';
import pictureDatas from './data/pictureDatas.json';

const api = {
  allChatsInfo: () => {
    if(chatDatas.statusCode === 200 || chatDatas.statusCode === 204)
      return chatDatas;
  },
  allPictures: () => {
    if(pictureDatas.statusCode === 200 || pictureDatas.statusCode === 204)
      return pictureDatas;
  },
  chats: id => {
    if (id) {
      const { allChats } = chatDatas;
      const result = allChats.find(chat => id === chat.id);
      return result;
    }
  }, 
};

export default api;
