import expect from 'expect';
import { getCompletedTasks } from './selectedTasksComplete.js';

describe('Selected task', () => {
   it('should return selected task', () => {
      const tasks = [
         {
            "taskListId": 102,
            "id": 10,
            "title": 'Read',
            "checked": true,
            "message": 'read that magazine'
         },
         {
            "taskListId": 102,
            "id": 108,
            "title": 'Read',
            "checked": false,
            "message": 'read that book'
         },
         {
            "taskListId": 109,
            "id": 108,
            "title": 'Read',
            "checked": true,
            "message": 'read that book'
         }
      ];

      const currentTaskListId = 102;
      const expected = 1;

      expect(getCompletedTasks(tasks, currentTaskListId)).toEqual(expected);
   });
});
