class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(lenght) {
        this.innerLength += lenght;
    }

    decrease(lenght) {

        this.innerLength -= lenght;

       this.innerLength = this.innerLength <= 0 ? 0 : this.innerLength;
       // if (this.innerLength < 0) {
       //     this.innerLength = 0;
       // }

    }

    toString(){
        let output = this.innerString;

        if (this.innerLength === 0) {
            return  output = '...';
        }else if (this.innerLength >= this.innerString.length) {
            return  output = `${this.innerString}`
        }

        return output = `${this.innerString.slice(0, this.innerLength)}...`;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
