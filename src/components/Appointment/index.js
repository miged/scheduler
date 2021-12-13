import React from 'react';
import './styles.scss';

import useVisualMode from 'hooks/useVisualMode';
import Header from './Header';
import Empty from './Empty';
import Show from './Show';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
// import Error from './Error';

const EMPTY = 'EMPTY';
const SHOW = 'SHOW';
const CREATE = 'CREATE';
const SAVING = 'SAVING';
const DELETING = 'DELETING';
const DELETE_CONFIRM = 'DELETE_CONFIRM';

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };

    transition(SAVING);
    props.bookInterview(props.id, interview);
    transition(SHOW);
  }

  function cancelInterview(id) {
    transition(DELETING);
    props.cancelInterview(id);
    transition(EMPTY);
  }

  return (
    <>
      <Header time={props.time}></Header>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          id={props.id}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(DELETE_CONFIRM)}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
        />
      )}
      {mode === SAVING && <Status message={'Saving...'} />}
      {mode === DELETING && <Status message={'Deleting...'} />}
      {mode === DELETE_CONFIRM && (
        <Confirm
          id={props.id}
          message={'Are you sure you would like to delete?'}
          onConfirm={cancelInterview}
          onCancel={() => back()}
        />
      )}
    </>
  );
}
