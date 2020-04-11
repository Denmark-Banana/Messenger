import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Bars, ChevronLeft, Search } from '@styled-icons/fa-solid';
import { User, Image } from '@styled-icons/fa-regular';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5b36ac;
  color: white;
`;

const Column = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;

  :nth-child(2) {
    justify-content: center;
  }
  :nth-child(3) {
    justify-content: flex-end;
  }
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;
`;

const Icon = styled.div`
  height: 15px;
  svg {
    height: 100%;
  }
  margin-left: 15px;
  cursor: pointer;
  display: ${(props) => (props.current ? 'block' : 'none')};
`;

const IconBars = styled(Bars)``;

const IconChevronLeft = styled(ChevronLeft)``;

const IconSearch = styled(Search)``;

const IconUser = styled(User)``;

const IconImage = styled(Image)``;

const Navigation = ({ location: { pathname }, name, clickAlbum }) => {

  const isList = pathname === '/list';

  return (
    <Container>
      <Column>
        <Icon current={isList}>
          <IconBars />
        </Icon>
        <Icon current={!isList}>
          <Link to="/list">
            <IconChevronLeft></IconChevronLeft>
          </Link>
        </Icon>
      </Column>
      <Column>
        <Title>
          {isList ? '채팅' : name}
        </Title>
      </Column>
      <Column>
        <Icon current={isList}>
          <IconUser />
        </Icon>
        <Icon onClick={clickAlbum} current={!isList}>
          <IconImage  />
        </Icon>
        <Icon current={!isList}>
          <IconSearch />
        </Icon>
      </Column>
    </Container>
  );
};

Navigation.propTypes = {
  pathname: PropTypes.string,
  name: PropTypes.string,
  clickAlbum: PropTypes.func,
};


export default withRouter(Navigation);