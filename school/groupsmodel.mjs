import {Validator} from "./validator"

export class GroupsModel{

    constructor(){
        this._map = new Map();
        this._tmp = [];
    }

    async add(rom){
        let obj = {};
        obj.room = rom;
        obj.id = Math.floor(Math.random() * 100000000);
        this._map.set(obj.id, obj);
        return obj.id;
    }

    async read(id){
        if(!this._map.get(id)){
            throw new Error('There is no user with this id !');
        }else{
            return this._map.get(id);
        }
    }

    async remove(id){
        if(!this._map.get(id)){
            throw new Error('There is no user with this id !');
        }else{
            this._map.delete(id);
        }
    }

    async update(id, obj){
        let oldid = this._map.get(id).id;
        if(!this._map.get(id)){
            throw new Error('There is no user with this id !');
        }else{
            obj.id = oldid;
            this._map.set(id, obj);
        } 
    }

    async readAll(){
        let mas = [];
        this._map.forEach((key) => {
            mas.push(this._map.get(key));
        });
        return mas;
    }

    async addPupil(groupId, pupil){
        if(this._map.get(groupId)){
            this._tmp.push({group:this._map.get(groupId), pupilId:pupil.id, "pupil": pupil.id});
        }
        else{
            throw new Error('There is no such id !');
        }
    }

    async removePupil(groupId, pupil){
        for(let i=0; i<this._tmp.length; i++){
            if(this._tmp[i].group.id == groupId && this._tmp[i].pupilId == pupil.pid){
                this._tmp.slice(i,i);
            }
        }
    }
}