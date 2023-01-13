class Form {
    #fields;
    #submitted;
    
    constructor(fields, submitted)
    {
        this.#fields = [];
        this.#submitted = submitted;
    }

    get fields () {
        return this.#fields;
    }

    get submitted () {
        return this.#submitted;
    }

    set submitted () {
        this.#submitted = name;
    }
 
    addField(field){
        
    }
    submit(){
        
    }
    validate(){
        
    }
    toJSON(){
        
    }
    
    export { Form };
}