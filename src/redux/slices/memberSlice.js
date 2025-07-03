import { createSlice } from '@reduxjs/toolkit';

const membersSlice = createSlice({
  name: 'members',
  initialState: {
    list: [], // array of member 
  },
  reducers: {
    setMembers: (state, action) => {
      state.list = action.payload;
    },
    updateStatus: (state, action) => {
      const { userId, status } = action.payload;
      const member = state.list.find((m) => m.id === userId);
      if (member) {
        member.status = status;
      }
    },
    assignTask: (state, action) => {
      const { userId, task } = action.payload;
      const member = state.list.find((m) => m.id === userId);
      if (member) {
        if (!member.tasks) member.tasks = [];
        member.tasks.push(task);
      }
    },
    updateTaskProgress: (state, action) => {
    const { userId, taskId, change } = action.payload;
    const member = state.list.find((m) => m.id === userId);
    if (member) {
        const task = member.tasks?.find((t) => t.id === taskId);
        if (task) {
        task.progress = Math.min(100, Math.max(0, task.progress + change));
        }
    }
    }

  },
});

export const { setMembers, updateStatus, assignTask, updateTaskProgress, } = membersSlice.actions;
export default membersSlice.reducer;
