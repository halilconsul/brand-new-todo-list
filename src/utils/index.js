export function formatTaskList(data) {
   return {
      id: data.taskListId || Date.now(),
      title: data.title,
      "isComplete": data.isComplete || true
   }
}

export function formatTask(data) {
   return {
      taskListId: data.taskListId,
      id: data.id || Date.now(),
      title: data.title || null,
      checked: data.checked || false,
      message: data.message || null
   }
}

export function updateTaskList(allTasks, taskList) {
   const updatedTask = allTasks.findIndex(task => task.id === taskList.taskListId);
   allTasks[updatedTask].title = taskList.title;;
   return allTasks;
}

export function updatedTaskStatus(allTasks, newTask) {
   const updatedTaskIndex = allTasks.findIndex(task => task.id == newTask.id);
   allTasks[updatedTaskIndex].checked = newTask.checked;
   allTasks[updatedTaskIndex].title = newTask.title || allTasks[updatedTaskIndex].title;
   allTasks[updatedTaskIndex].message = newTask.message || allTasks[updatedTaskIndex].message;
   return allTasks;
}

export function deleteTask(allTasks, taskId) {
   const newTasks = allTasks.filter(task => task.id != taskId);
   console.log(newTasks);
   return newTasks;
}

export function checkComplete(allTasks, taskList) {
   const updatedTaskListIndex = allTasks.findIndex(task => task.id == taskList.taskListId);
   allTasks[updatedTaskListIndex].isComplete = taskList.isComplete;
   return allTasks;
}
