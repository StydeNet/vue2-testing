export const allTasks = state => state.tasks;

export const completedTasks = state => state.tasks.filter(t => t.done);

export const uncompletedTasks = state => state.tasks.filter(t => !t.done);
