export class Validator{

    static validator(data,schema){
        let valid = true
        for (const [key, value] of Object.entries(schema)){
            if (data.hasOwnProperty(key)){
                if (Array.isArray(data[key])){
                    for (let each of data[key]){
                        this.validator(each, schema[key][0])
                    }
                }else if(typeof data[key] === 'object'){
                    valid = this.validator(data[key], schema[key])
                }else if (typeof data[key] !== 'object' && typeof data[key] !== schema[key]){
                    valid = false
                }

                if (!valid) {
                    throw new Error('error')
                }
            }
        }
        return valid
    }
}    
