import React from 'react';
import './styles.scss';

import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import Confirm from './Confirm';
import Status from './Status';
import Error from './Error';

export default function Appointment(props) {
  const text = props.time ? `Appointment at ${props.time}` : 'No appointments';
  return <article className="appointment">{text}</article>;
}
