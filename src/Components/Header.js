import React from 'react';
import styled from 'styled-components';
import {
  Signal,
  Lock,
  Wifi,
  Clock,
  LocationArrow,
  BatteryFull,
} from '@styled-icons/fa-solid';
import { BluetoothB } from '@styled-icons/fa-brands/';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #5b36ac;
  color: white;
`;

const Column = styled.div`
  display: flex;
  padding: 5px;
`;

const Time = styled.span`
  text-align: center;
  padding-left: 40px;
`;

const Icon = styled.i`
  height: 10px;
  svg {
    height: 100%;
  }
  margin-left: 7px;
`;

const IconSignal = styled(Signal)``;

const IconWifi = styled(Wifi)``;

const IconLock = styled(Lock)``;

const IconLocationArrow = styled(LocationArrow)``;

const IconClock = styled(Clock)``;

const IconBluetoothB = styled(BluetoothB)``;

const IconBatteryFull = styled(BatteryFull)``;

const BatteryLevel = styled.span``;

export default () => {
  const date = new Date();
  return (
    <Header>
      <Column>
        <Icon>
          <IconSignal />
        </Icon>
        <Icon>
          <span>Carrier</span>
        </Icon>
        <Icon>
          <IconWifi />
        </Icon>
      </Column>
      <Column>
        <Time>
          {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:
          {date.getMinutes()} {date.getHours() >= 12 ? ' PM' : ' AM'}{' '}
        </Time>
      </Column>
      <Column>
        <Icon>
          <IconLock />
        </Icon>
        <Icon>
          <IconLocationArrow />
        </Icon>
        <Icon>
          <IconClock />
        </Icon>
        <Icon>
          <IconBluetoothB />
        </Icon>
        <Icon>
          <BatteryLevel>100%</BatteryLevel>
        </Icon>
        <Icon>
          <IconBatteryFull />
        </Icon>
      </Column>
    </Header>
  );
};
