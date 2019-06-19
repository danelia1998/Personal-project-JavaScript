import {SubjectsModel,LMSModel,TeachersModel,PupilsModel,GroupsModel,GradebooksModel} from "./school"


(async () => {
  const history = new SubjectsModel({
    title: 'History',
    lessons: 24,
    description: "david"
  });

  const m = new SubjectsModel({
    title: 'm',
    lessons: 14
  });

  history.id

  
  const lms = new LMSModel();
  await lms.add(history);
  await lms.add(m);
  await lms.remove(m);
  await lms.verify(history)
  await lms.readAll()
  
  let data = {
    name: {
      first: "david",
      last: "danelia"
    },
    image: "georgia",
    dateOfBirth: "ten september nnn", // format date
    emails: [
      {
        email: "daneliatemur@gmail.com",
        primary: true
      }
    ],
    phones: [
      {
        phone: "995557345566",
        primary: true
      }
    ],
    sex: "male", // male or female
    subjects: [
      {
        subject: "history"
      }
    ],
    description: "me",
  }

  let updatedProfile = {
    name: {
      first: "nika",
      last: "vaaxo"
    },
    image: "sdasdsf",
    dateOfBirth: "ten sepstember nnn", // format date
    emails: [
      {
        email: "daneliatesdasdmur@gmail.com",
        primary: true
      }
    ],
    phones: [
      {
        phone: "99553423457345566",
        primary: true
      }
    ],
    sex: "string", // male or female
    subjects: [
      {
        subject: "string"
      }
    ],
    description: "string",
  }

  const teachers = new TeachersModel();
  

  const teacherId = await teachers.add(data);

  await teachers.read(teacherId)

  const teacherId2 =await teachers.update(teacherId, updatedProfile)

  await teachers.remove(teacherId2)

  const pupil = new PupilsModel();
  
  const pupilId =await pupil.add(data);

  const room = 236;
  const groups = new GroupsModel();

  const groupId =await groups.add(room);

  await groups.update(groupId, {
  id: 'JEF5H43H',
  room: 237
  });

  await groups.read(groupId)
  await groups.readAll()

  const level = 1;
  const grade = await new GradebooksModel(groups, teacherId, lms);
  const gradebook = await grade.add(level, groupId);

  const record = {
    "pupilId": pupilId,
    "teacherId": teacherId,
    "subjectId": history.id,
    "lesson": 1,
    "mark": 9
  };
  await grade.addRecord(gradebook, record);

  const oliver = await grade.read(gradebook, pupilId);
  const everyone = await grade.readAll(gradebook);
  console.log(everyone)
})()









