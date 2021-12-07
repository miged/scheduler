import React from 'react';

import './InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';

export default function InterviewerList(props) {
  const items = props.interviewers.map((i) => (
    <InterviewerListItem
      {...i}
      key={i.id}
      selected={i.id === props.interviewer}
      setInterviewer={() => props.onChange(i.id)}
    />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{items}</ul>
    </section>
  );
}
