import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Icon } from './styles';

function AlertIcon() {
  return (
    <Icon>
      <FontAwesomeIcon icon={faCircleExclamation} size='lg' />
    </Icon>
  );
}

export default AlertIcon;
