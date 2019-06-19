import {Validator} from "./validator"

export class GroupsModel{
    constructor(pupil){
        this.data = new Map()
        this.pupil = pupil;
        this.schema = {
            "id": "string",
            "room": "number"
        }
    }
    async add(room){
        if(typeof room != "number"){
            throw new Error('Must be a number!');
        }else{
            const id = Symbol();
            this.data.set(id, {room, pupils: new Set() });
            return id;
        }
    }

    async addPupil(id, pupil){
        if(this.data.has(id)) {
            this.data.get(id).pupils.add(pupil);
        }
        else throw new Error('We dont have such ID!');
    }

    async remove(id){
        if(!this.data.has(id)){
            throw new Error("We dont have user with ID like this!");
        }else{
            this.data.delete(id);
        }
    }
    
    async removePupil(id, pupil){
        if(this.data.has(id)) {
            this.data.get(id).pupils.delete(pupil);
        }
        else throw new Error('We dont have such ID!');
        }

    async read(id){
        if(!this.data.has(id)){
            throw new Error('We dont have user with ID like this!');
        }else{
            return { id, ...this.data.get(id) };
        }
    }

    async update(id, profile){
        if(!this.data.has(id)){
            throw new Error('we dont have user with ID like this!');
        }else if(!Validator.validator(profile,this.schema)){
            throw new Error("Validation of New Profile gone Wrong!")
        }else{
            this.data.set(id, profile);
        }
    }

    async readAll(){
        const Arrayz = [];
        this.data.forEach(value => {
            Arrayz.push(value);
        })
        console.log()
        return Arrayz;
    }
}