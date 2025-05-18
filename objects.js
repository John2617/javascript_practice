//objects are the collection of key and value pairs, we ca;; each pair as property
//defining object 
let obj={
    name : "john", // we can use any type of names including keywords in the keys..
    age : 21,     // every pair should be end with comma
    skills:"html,css,js,react,vue.js,dj3.js",
    exp: 4
}
// accessing values using keys

console.log(obj.skills,age)

// adding new keys in object

obj['education'] ="B.Sc . CS";

//deleting an property in obj

delete(obj.age)

//we can use spaces in key..but we should use it with double quotues

let yui={
    name:"john",
    "education qualification" : "cs,ds" // here i use spaces in the key..so i use double quotes


}
//how can we access while we used spaces in keys

console.log(yui['education qualification'])

//we can also assign function within the object

let uiu={
    Price:21,
    add(){
        return this.Price+2; // without using this keyword , we cannot access the "Price" key..becoz it is outside the function..so in this case we use this keyword to refer that this key is in this object.
    }
}

//to access the function within the object
console.log(uiu.add())
 //trivia

 let name={
    ji:"john"
}
console.log(name.ji + "AJ")
delete(name.ji)
console.log(name)