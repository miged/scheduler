import React from 'react';
import './styles.scss';

import useVisualMode from 'hooks/useVisualMode';
import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import Form from './Form';
// import Confirm from './Confirm';
// import Status from './Status';
// import Error from './Error';

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <>
      <Header time={props.time}></Header>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={() => back()} />
      )}
    </>
  );
}
