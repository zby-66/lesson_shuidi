let fs = require('fs');
let join = require('path').join;

function findSync(startPath) {
  let result = [];
  function finder(path) {
    // console.log(path, '------------')
    let files = fs.readdirSync(path);
    // console.log(files, '------')
    files.forEach((val, index) => {
      let fPath = join(path, val);
      let stats = fs.statSync(fPath);
      if (stats.isDirectory()) finder(fPath)
      if (stats.isFile()) result.push(fPath)
    });
  }
  // console.log(join(process.cwd(), startPath), '---------');
  finder(join(process.cwd(), startPath));
  return result;
}

exports.findSync = findSync