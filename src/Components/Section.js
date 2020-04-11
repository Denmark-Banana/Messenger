import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const fadeInAnim = keyframes`
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
`;

const Container = styled.div`
  background-color: ${props => props.theme.primary};
  animation: ${fadeInAnim} 0.3s ease-in-out;
`;

const Grid = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 40px);
  grid-gap: 8px;
`;

const Section = ({ children }) => (
  <Container>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
