import React, { useState } from 'react';
import classNames from 'classnames';

import './InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList(props) {
  const items = props.interviewers.map((i) => (
    <InterviewerListItem
      {...i}
      selected={i.id === props.interviewer}
      setInterviewer={(event) => props.setInterviewer(i.id)}
    />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{items}</ul>
    </section>
  );
}
