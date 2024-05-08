const fn = (a, ...arg) => {
    for (let index = 0; index < arg.length; index++) {
        console.log(arg[index]);;
        
    }
    console.log(arg);
}

fn(1, 2, 3, 4, 5, 6);