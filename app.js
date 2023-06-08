 const users = [
    {name: ' Mike', age:25},
    {name: 'Bob', age:32},
    {name: 'Nikola', age:17}
]
const newData = [
  {name: 'Anna', age:24},
  {name: 'Tom' , age: 52}
]
const fs = require('fs')
const os = require('os')
fs.writeFile('C:/Users/user/data.json',JSON.stringify(users, null ,2
), err => {
  if (err) {
    console.error(err);
} else {
    console.log('Data written to file');
}

});
console.log('Home directory: ' + os.homedir());
fs.promises.readFile('C:/Users/user/Desktop/Study UP/lesson 60/data.json', 'utf8').then(data => {
	return fs.promises.appendFile('C:/Users/user/Desktop/Study UP/lesson 60/data.json', JSON.stringify(newData, null ,2
    ) );
}).catch(err => {
	console.log('ошибка');
});

fs.access("C:/Users/user/Desktop/Study UP/lesson 60/data.json", function(error){
  if (error) {
      console.log("Файл не найден");
  } else {
      console.log("Файл найден");
  }
});