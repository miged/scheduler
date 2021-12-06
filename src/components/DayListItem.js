import React from 'react';
import classNames from 'classnames';

import './DayListItem.scss';

export default function DayListItem(props) {
  const buttonClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0,
  });

  let spotsText = props.spots;
  if (props.spots > 1) {
    spotsText += ' spots remaining';
  } else if (props.spots === 1) {
    spotsText += ' spot remaining';
  } else {
    spotsText = 'no spots remaining';
  }

  return (
    <li className={buttonClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spotsText}</h3>
    </li>
  );
}
