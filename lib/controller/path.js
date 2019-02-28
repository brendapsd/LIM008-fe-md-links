const path = require('path');

export const pathIsAbsolute = (pathEvaluate) => {
    return path.isAbsolute(pathEvaluate) 
}

export const convertRelativeToAbsolute = (pathRelative) => {
    return path.resolve(pathRelative)
}
