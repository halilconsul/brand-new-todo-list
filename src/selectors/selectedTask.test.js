import expect from 'expect';
import { getCurrentTask } from './selectedTask.js';

describe('Selected task', () => {
   it('should return selected task', () => {
      const tasks = [
         {
            "taskListId": 102,
            "id": 10,
            "title": 'Read',
            "checked": false,
            "message": 'read that magazine'
         },
         {
            "taskListId": 109,
            "id": 108,
            "title": 'Read',
            "checked": false,
            "message": 'read that book'
         }
      ];

      const currentTaskId = 108;

      const expected = {
         "taskListId": 109,
         "id": 108,
         "title": 'Read',
         "checked": false,
         "message": 'read that book'
      }
      expect(getCurrentTask(tasks, currentTaskId)).toEqual(expected);
   });
});
