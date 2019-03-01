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