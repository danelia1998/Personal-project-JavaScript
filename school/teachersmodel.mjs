import {Validator} from "./validator"

export class TeachersModel{
    constructor(){
        this.data = new Map()
        this.id = Math.floor(Math.random() * 100000000)
        this.sch = {
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "emails": [
              {
                "email": "string",
                "primary": "boolean"
              }
            ],
            "phones": [
              {
                "phone": "string",
                "primary": "boolean"
              }
            ],
            "sex": "string", // male or female
            "subjects": [
              {
                "subject": "string"
              }
            ],
            "description": "string",
          }
    }

    
    async add(obj){
        if(obj || typeof obj == "object"){
            if (Validator.validator(obj,this.sch)){
                obj.id = this.id
                this.data.set(obj.id,obj)
                return this.data.get(obj.id)            
            }else{
                throw new Error("Schema must be right written!")
            }
                
        }else{
            throw new Error("Must be an object")
        }
    }
    async read(obj){
        return this.data.get(obj.id)
    }
    async update(id, obj){
        if(!id || typeof id.id != "number"){
            throw new Error("ID required be a number")}
        else if(!obj || typeof obj != "object"){
            throw new Error("Must be an object")}

        const user = this.data.get(id.id)        
        if(user){
            if (Validator.validator(obj,this.sch)){
                this.data.set(id,{...user,...obj} )
                return this.data.get(id)
            }
            
        } else {
            throw new Error("No user with ID like this!")
        }
    }
    async remove(obj){
        if(obj || typeof obj == "object" ){
            this.data.delete(obj.id)
        }else if(!(this.data.get(obj))){
            throw new Error("There isn't object like this")
        }
    }

}