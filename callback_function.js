function person(name, age, task) {
    console.log("Name:", name);
    console.log("Age:", age);
    task();
}
 function readBook(task) {
    console.log("Read some book in your leisure time")
 }
 function cook(task) {
    console.log("Try to cook some new dish")
 }

 var result = person("Tahmina", 15, cook);  //!calling function
 var result = person("Zoyeb", 20, readBook); 