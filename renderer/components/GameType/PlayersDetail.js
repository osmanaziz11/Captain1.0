import Century from './Century';
import Single from './Single';
import Double from './Double';
import Points from './Points';
import React from 'react';

const PlayersDetail = ({ type }) => {
  const gameType = {
    Single: <Single />,
    Double: <Double />,
    Century: <Century />,
    Points: <Points />,
  };
  return gameType[type];
};

export default PlayersDetail;
