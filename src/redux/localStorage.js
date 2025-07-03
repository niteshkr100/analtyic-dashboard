export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('teamPulseState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Failed to load from localStorage', err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      members: state.members,
      role: state.role,
    });
    localStorage.setItem('teamPulseState', serializedState);
  } catch (err) {
    console.error('Failed to save to localStorage', err);
  }
};
