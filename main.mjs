
// LMS

import {SubjectsModel,LMSModel} from "./school"

// {
//     "title": "string",
//     "lessons": "number",
//     "description": "string"
//   }
  
const history = new SubjectsModel({
    title: 'History',
    lessons: 24,
    description: "david"
});

const m = new SubjectsModel({
    title: 'm',
    lessons: 14
});
  
//   // will return subjectId

console.log(history.id)

  
const lms = new LMSModel();



lms.add(history);
lms.add(m);

lms.remove(m);
  
//   // will return true or false. Answer will be true if we added this subject to lms
console.log(lms.verify(history))

  
//   // will return array of registered subjects
console.log(lms.readAll())



