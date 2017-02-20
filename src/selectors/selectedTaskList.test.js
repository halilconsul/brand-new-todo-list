import expect from 'expect';
import { getCurrentTaskList } from './selectedTaskList.js';

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
            "id": 128,
            "title": 'Read',
            "checked": false,
            "message": 'read that book'
         },
         {
            "taskListId": 102,
            "id": 108,
            "title": 'Read',
            "checked": false,
            "message": 'read that book'
         }
      ];

      const currentTaskListId = 102;

      const expected = [
         {
            "taskListId": 102,
            "id": 10,
            "title": 'Read',
            "checked": false,
            "message": 'read that magazine'
         },
         {
            "taskListId": 102,
            "id": 108,
            "title": 'Read',
            "checked": false,
            "message": 'read that book'
         }
      ];

      expect(getCurrentTaskList(tasks, currentTaskListId)).toEqual(expected);
   });
});
