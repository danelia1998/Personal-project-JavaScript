
export class LMSModel {
    constructor(){
        this.data = new Map()
    }
    async add(obj){
        if(!obj || typeof obj == "object"){
            this.data.set(obj.id,obj)
        }else{
            throw new Error("Must be an object")
        }
    }
    async remove(obj){
        if(obj || typeof obj == "object" ){

            this.data.delete(obj.id)
        }else if(!(this.data.get(obj))){
            throw new Error("There isn't object like this")
        }
    }
    async verify(obj){
        return this.data.has(obj.id)
    }
    async readAll(){
        if(arguments.length > 0){
            throw new Error("readAll method can't take arguments!")
        }else{
            return Array.from(this.data.values())
        }
    }
}
