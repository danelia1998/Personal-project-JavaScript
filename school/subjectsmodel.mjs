
export class SubjectsModel {
    constructor(dict) {
        
        if(!dict || typeof dict == "object" && typeof dict.title == 'string' && typeof dict.lessons == 'number' ){
            this.title = dict.title;
            this.lessons = dict.lessons;
            this.id = Math.floor(Math.random() * 100000000)
            if (dict.description && typeof dict.description == 'string'){
                this.description = dict.description}
        }else{
            throw new Error("Must be an object")
        }
    }
}



