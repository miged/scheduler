import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  // calculate number of spots
  for (const dayId in state.days) {
    let spots = 0;
    for (const appId of state.days[dayId].appointments) {
      if (!state.appointments[appId].interview) {
        spots += 1;
      }
    }
    state.days[dayId].spots = spots;
  }

  function setDay(day) {
    setState({ ...state, day });
  }

  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, {
        interview,
      })
      .then(() => {
        setState({
          ...state,
          appointments,
        });
      });
  }

  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`).then(() => {
      const appointments = {
        ...state.appointments,
      };
      appointments[id].interview = null;
      setState({
        ...state,
        appointments,
      });
    });
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
