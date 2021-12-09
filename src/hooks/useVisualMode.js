/* eslint-disable no-unused-vars */
import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace) {
      history.pop();
    }
    history.push(newMode);
    setMode(newMode);
  }
  function back() {
    if (history.length !== 1) {
      setMode(history[history.length - 2]);
      history.pop();
    }
  }

  return { mode, transition, back };
}
