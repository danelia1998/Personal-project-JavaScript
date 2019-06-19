export class GradebooksModel{

    constructor(groups, teachers, lms){
        this.gradebook = new Map();
        this.mBook = [];
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
        this.id = "";
    }

    checkIdtype(id){
        if(typeof id !== "number"){
            throw new Error('invalid type');
        }
    }

    async add(level, idgr){
        let newobj = {};
        this.id = Math.floor(Math.random() * 100000000)
        newobj.id = this.id;
        newobj.level = level;
        newobj.groupid = idgr;
        this.checkIdtype(idgr);
        this.gradebook.set(this.id, newobj);
        return this.id;
    }

    async clear(){
        this.groups = null;
        this.teachers = null;
        this.lms = null;
    }

    async addRecord(gradebookId, record){
        let pupilName = "";
        for(let i=0; i<this.groups._tmp.length; i++){
            if( this.groups._tmp[i].pupil.id == record.pupilId){
                pupilName = this.groups._tmp[i].pupil.name.first;
            }
        }
        // console.log(this.teachers.data.get(record.teacherId).name.first)
        let newobj = {
            name: pupilName,
            records: [
              {

                teacher: this.teachers.data.get(record.teacherId).name.first,
                subject: this.lms.data.get(record.subjectId).title,
                lesson: record.lesson,
                mark: record.mark
              }
            ]
        };
        
        let finalobj = {gradebookid: gradebookId, record:  newobj, idpupil: record.pupilId};
        this.mBook.push(finalobj);
    }

    async read(first, second){
        for(let i=0; i<this.mBook.length; i++){
            if(this.mBook[i].gradebookid==first && this.mBook[i].idpupil==second)
            {
                return this.mBook[i].record;
            }
        }
    }

    async readAll(mainid){
        let result = [];
        for(let i=0; i<this.mBook.length; i++){
            if(this.mBook[i].gradebookid==mainid)
            {
                result.push(this.mBook[i].record);
            }
        }
        return result;
    }
}