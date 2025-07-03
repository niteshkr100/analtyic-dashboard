 import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus } from '../redux/slices/memberSlice';

const useAutoStatusReset = () => {
  const dispatch = useDispatch();//
  const { currentUser } = useSelector((state) => state.role);
  const members = useSelector((state) => state.members.list);
  const timer = useRef(null);

  const userId = members.find((m) => m.name === currentUser)?.id;
  
  //useEffect
  useEffect(() => {
    if (!userId) return;

    //
    const resetStatus = () => {
      dispatch(updateStatus({ userId, status: 'Offline' }));
    };

    //timer set
    const resetTimer = () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(resetStatus, 10 * 60 * 1000); // 10 min
    };

    //tracking the activity
    const events = ['mousemove', 'keydown', 'click', 'touchstart'];

    events.forEach((event) => window.addEventListener(event, resetTimer));
    resetTimer(); // start timer on load

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      clearTimeout(timer.current);
    };
  }, [dispatch, userId]);
};

export default useAutoStatusReset;
