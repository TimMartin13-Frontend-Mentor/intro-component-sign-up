import React from 'react';
import { TextWrapper, Text, Link } from './styles';

const Attribution = () => {
  return (
    <TextWrapper>
      <Text>
        Challenge by{' '}
        <Link
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </Link>
        .
      </Text>
      <Text>
        Coded by{' '}
        <Link
          href='https://www.frontendmentor.io/profile/TimMartin13'
          target='_blank'
          rel='noreferrer'
        >
          Tim Martin
        </Link>
        .
      </Text>
    </TextWrapper>
  );
};

export default Attribution;
