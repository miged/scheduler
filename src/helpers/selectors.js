export function getAppointmentsForDay(state, day) {
  let filteredDay = state.days.filter((d) => d.name === day)[0];
  let appointments = [];

  if (filteredDay && filteredDay.appointments.length > 0) {
    for (const id of filteredDay.appointments) {
      appointments.push(state.appointments[id]);
    }
  }

  return appointments;
}

export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }

  interview.interviewer = state.interviewers[interview.interviewer];

  if (!interview.interviewer) {
    return null;
  }

  return interview;
}
