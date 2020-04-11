import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 40px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  cursor: pointer;
`;

const Picture = ({ id, title, imageUrl, clickPicture }) => (
  <Container>
    <Image
      id={id}
      title={title}
      bgUrl={
        imageUrl
          ? require(`../assets/picture/${imageUrl}`)
          : require('../assets/poster/no_poster.png')
      }
      onClick={clickPicture}
    />
  </Container>
);

Picture.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  clickPicture: PropTypes.func,
};

export default Picture;
