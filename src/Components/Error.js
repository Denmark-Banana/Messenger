import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Text = styled.span`
  font-weight: bold;
  color: ${(props) => props.color};
`;

const Error = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Error.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Error;
