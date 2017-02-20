import expect from 'expect';
import { getCompletedTaskLists } from './selectedTaskListsCompleted.js';

describe('Selected task', () => {
   it('should return selected task', () => {
      const taskLists = [
         {
            "id": 1025301245615,
            "title": 'Learn',
            "isComplete": true
         },
         {
            "id": 1025301245626,
            "title": 'Listen',
            "isComplete": true
         },
         {
            "id": 1025301245626,
            "title": 'Listen',
            "isComplete": false
         }
      ];

      const expected = 2;

      expect(getCompletedTaskLists(taskLists)).toEqual(expected);
   });
});
