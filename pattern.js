//w.a.program to print the diamond pattern


for (let i = 1; i <= 4; i++) {
    let str = '';

    for (let space = 4; space >= i; space--) {
        str += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {

            str += '*';

        } else {
            str +=  ' ';
        }
    }
    console.log(str);
}


for (let i = 3; i >= 1; i--) {
    let str = '';
    for (let space = 4; space >= i; space--) {
        str += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1) {

            str += '*';

        } else {
            str +=  ' ';
        }
    }
    console.log(str);
}
