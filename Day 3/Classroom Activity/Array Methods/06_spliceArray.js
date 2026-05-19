// Splice Array is used to add or remove a part of the array using index
// Syntax array.splice(start index, delete count, ele1, ele2)

let names = ["mohan", "karthik", 'manoj', "kishore"]
names.splice(1, 2, "john", "christoper") // removes karthik and manoj and adds the new names // 1 represents the 1st index // 2 represents the count of names to be deleted from the index number 1
console.log(names)