
 class LinkedList {
    constructor(){
      this.list = [];
    }

    get length(){
        return this.list.length;
    }
    get head(){
        if( this.list.length < 1 ){
            return null;
        }else{
            return this.list[0]
        }
    }
    get tail(){
        if( this.list.length === 0 ){
            return null;
        }else{
            return this.list[this.list.length -1]
        }
    }
    push(arg0){
      this.list.push({ value: arg0});
    }

}

module.exports = { LinkedList }