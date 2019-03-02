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

export const ifIsDir = (directory, fileArray) => {
    fileArray = [];
    const readDirectory = fs.readdirSync(directory);
    readDirectory.forEach((elem)=>{
        const joinDirectory = 
    })
}

// export const isDirOrFile = (root, fileArray) => {
//     fileArray = [];
//     const readDirectory = fs.readdirSync(root);
//     readDirectory.forEach((element) => {
//       const joinRoutes = path.join(root, element);
//       if (fs.statSync(joinRoutes).isDirectory() === true) {
//         fileArray = isDirOrFile(joinRoutes);
//       } else {
//         fileArray.push(joinRoutes);
//       }
//     });
//     return fileArray;
//   };

// const recorrerCarpeta = (ruta) => {
//     let listaArchivos = fs.readdirSync(ruta);
//     let arrayArchivos = [];
//       for(let i=0; i< listaArchivos.length; i++){
//         let rutaArchivos = ruta + '\\' + listaArchivos[i];
//         if(fs.statSync(rutaArchivos).isFile()){
//           arrayArchivos.push(rutaArchivos);
//         }else{
//           arrayArchivos.push(recorrerCarpeta(rutaArchivos));
//         }
//       }
//     return arrayArchivos;
//   }
  
//   function flattenDeep(arr1) {
//     return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
//   }
  
//   const rutaEsArchivo = (ruta) => {
//       let arrayRuta = [];
//       let esArchivo = fs.statSync(ruta).isFile();
//       if (esArchivo === true ){
//         arrayRuta.push(ruta);
//       } else{
//         arrayRuta.push(recorrerCarpeta(ruta));
//       }
//       return arrayRuta;
//    };
  
//    console.log(flattenDeep(rutaEsArchivo('C:\\Users\\Glory\\Documents\\Laboratoria 18-19\\LIM008-fe-md-links\\src\\cli.js')));

// export const openAdirectory = (route) => {
//     let arrRoutesFiles = [];
//     const file = fs.readdirSync(route);
//     file.forEach((element) => {
//       const directoryChild = path.join(route, element);
//       const stats = fs.lstatSync(directoryChild);
//       if (stats.isDirectory()) {
//         arrRoutesFiles = arrRoutesFiles.concat(openAdirectory(directoryChild));
//       } else if (stats.isFile()) { 
//         arrRoutesFiles.push(directoryChild);
//       }
//     });
//     return arrRoutesFiles;
//   };