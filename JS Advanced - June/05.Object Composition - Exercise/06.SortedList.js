function solve (){
    
    let myObj = {
        list: [], 
        size: 0,
        add: function (el){
            this.list.push(el);
            this.size++;
           this.list =  this.list.sort((a,b) => a - b);
        },
        remove: function (index){

            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1)
                this.size--;
            }
        },
        get: function (index){
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }           
        }
    }
    return myObj;
}

let listElements = solve();
listElements.add(5);
listElements.add(7);
listElements.add(3);
listElements.remove(1);
console.log(listElements.list);
console.log(listElements.get(1))