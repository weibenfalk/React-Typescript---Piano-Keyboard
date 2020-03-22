import React from 'react';
import styled from 'styled-components';

const Black = styled.button`
  width: 40px;
  height: 130px;
  background: black;
  border: solid black 1px;
  position: absolute;
  margin: 1px;
  margin-left: -20px;

  :active {
    background: #333;
  }
`;

const White = styled.button`
  width: 60px;
  height: 200px;
  background: white;
  border: solid black 1px;
  box-shadow: 2px 5px;
  margin: 1px;
  margin-left: '-20px';
  box-sizing: border-box;

  :active {
    background: #eee;
  }
`;

type Props = {
  color: string;
  note: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Note: React.FC<Props> = ({ color, note, onClick }) =>
  color === 'white' ? (
    <White value={note} onClick={onClick} />
  ) : (
    <Black value={note} onClick={onClick} />
  );

export default Note;
