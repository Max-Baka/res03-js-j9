class Field {
    #element;
    #errors;
    #name;
    
    constructor(element, errors, name)
    {
        this.#element = element;
        this.#errors = errors;
        this.#name = name;
    }

    get element () {
        return this.#element;
    }
    
    set element (){
        this.#element = element
    }

    get errors () {
        return this.#errors;
    }

    set errors () {
        this.#errors = errors;
    }
    get name () {
        return this.#name;
    }

    set name () {
        this.#name = name;
    }
    serialize(){
        
    }