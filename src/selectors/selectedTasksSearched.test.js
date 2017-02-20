import expect from 'expect';
import { getCompletedTasks } from './selectedTasksSearched.js';

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
            "title": 'Buy',
            "checked": false,
            "message": 'read that book'
         },
         {
            "taskListId": 109,
            "id": 108,
            "title": 'Reading',
            "checked": true,
            "message": 'read that book'
         }
      ];

      const searchedTaskName = 'Read';
      const expected = [
         {
            "taskListId": 102,
            "id": 10,
            "title": 'Read',
            "checked": true,
            "message": 'read that magazine'
         },
         {
            "taskListId": 109,
            "id": 108,
            "title": 'Reading',
            "checked": true,
            "message": 'read that book'
         }
      ];

      expect(getCompletedTasks(tasks, searchedTaskName)).toEqual(expected);
   });
});
