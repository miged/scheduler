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

export function getInterviewersForDay(state, day) {
  let filteredDay = state.days.filter((d) => d.name === day)[0];
  let interviewers = [];

  if (filteredDay && filteredDay.interviewers.length > 0) {
    for (const id of filteredDay.interviewers) {
      interviewers.push(state.interviewers[id]);
    }
  }

  return interviewers;
}

export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }

  let newInterview = { ...interview };
  newInterview.interviewer = state.interviewers[interview.interviewer];

  // if (!interview.interviewer) {
  //   return null;
  // }

  return newInterview;
}
