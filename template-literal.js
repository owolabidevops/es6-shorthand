// we no longer have to use '+' to concatenate multiple  variables into a string
// with es6  all we need to do is use the backtick and ${} to enclose our variables

//longhand
const welcome=`you have logged in as`+first+''+last+'';
const db=`http://`+host+port+'/'+database;

//shorthand
const welcome=`you have logged in as ${first} ${first}`;
const db=`http://${host}${port}/${database}`;