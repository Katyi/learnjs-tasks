function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  callback();
}

function doHomework1(subject, callback) {
  callback();
  console.log(`Starting my ${subject} homework.`);
}

function alertFinished(){
  console.log('Finished my homework');
}

// doHomework('math', alertFinished);
doHomework1('math', alertFinished);