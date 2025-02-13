// Write a function that maps files to their extension names.

function getExtension(files) {
    // loop
    const result = [];
    for (let i = 0; i < files.length; i++) {
        let parts = files[i].split('.');
        result.push(parts[parts.length - 1]);
    }
    return result;

    // method
    // return files.map(file => file.split(".").pop())

    // return files.reduce((acc, file) => {
    //     acc.push(file.split('.').pop());
    //     return acc;
    // }, []);
}

console.log(getExtension(["code.html", "code.css"])); // ["html", "css"]
console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])); // ["jpg", "pdf", "mp3"]
console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])); // ["rb", "cpp", "py", "js"]