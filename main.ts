let cls : string[] = []; // only assign type for variable
// -> fix : let cls : string[] = [];

cls.push('add new string'); // no error when compile

// ERR: runtime Environment will error
// ERROR : Cannot read property 'push' of undefined

// -> compilation time & run time
console.log(cls);
