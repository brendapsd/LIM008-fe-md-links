const path = require('path');
const fs = require('fs'); 

export const pathIsAbsolute = (pathEvaluate) => {
    return path.isAbsolute(pathEvaluate) 
}

export const convertRelativeToAbsolute = (pathRelative) => {
    return path.resolve(pathRelative)
}

export const pathIsDirectory = (pathEvaluate) => {
    return fs.lstatSync(pathEvaluate).isDirectory();
}

export const pathIsFile = (pathEvaluate) => {
    return fs.lstatSync(pathEvaluate).isFile();
}

export const readDirectory = (directory) => {
    return fs.readdirSync(directory); 
}

export const fileIsMD = (file) => {
   return path.extname(file);
}

export const readFiles = (info) => {
    return fs.readFileSync(info, 'utf8');
}

export const getMDFiles = (router) => {
    let arrayMDFiles = [];
    if (pathIsFile(router) === true){
        if (fileIsMD(router) === '.md'){
            arrayMDFiles.push(router);
        }
    }
    if (pathIsDirectory(router) === true){
      const arrNameContent =  readDirectory(router);
      arrNameContent.forEach(name => {
          const newRouter = path.join(router, name)
           arrayMDFiles = arrayMDFiles.concat(getMDFiles(newRouter));
      })

    }
    return arrayMDFiles; 
}

// console.log(pathIsDirectory('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba'))
