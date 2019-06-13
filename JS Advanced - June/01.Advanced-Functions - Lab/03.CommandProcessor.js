function solution() {

    let str = '';

    return {

        append: (s) => str += s,

        removeStart: (n) => str = str.substring(n),

        removeEnd: (n) => str = str.substring(0, str.length - n),

        print: () => console.log(str)

    }

}

//let test = solution();
//test.append("123456")
//test.print()
//test.removeEnd(3)
//test.removeStart(2);
//test.print()

