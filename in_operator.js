let bio={
    name:"john",
    age:21,
    dob:2004
}

//" in " operator is used to check whether the key is present in object..it returns boolean result
console.log('name' in bio) //key should be in string //returns true
console.log('spec' in bio) //retuns false

// how to display all the elements within the object...we use "For loop with 'in' operator"
for(key in bio){
    console.log(bio[key]) // it returns all the values in the objects
     // it returns only the key names
}
// to display only keys
for (key in bio){
console.log(key)
}