const fs = require('fs'); 
//Sync
// fs.writeFileSync("./test.txt", "Hi, this is the file created by writeFileSync method from file handling or fs operator present in node.");

// In this we are trying to read file synchronously so that the method 'readFileSync'
// can return the values in the result variable.
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// But in asynchronous the nothing will be returned, as it try to take callback.

fs.readFile("./contact.txt", "utf-8", (err, result) => {
    if(err){
        console.log("Error");
    }
    else{
        console.log(result);
    }
});

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', (err, files)=>{
    if(err){
        console.log('error',err);
    }
    else{
        console.log(files);
    }
});
