var users = [
    { id : 1, name : 'amir', family : 'jalali' , age : 21 , email : "amir@WebGLUniformLocation.com"},
    { id : 2, name : 'ali', family : 'jalali' , age : 22 , email : "ali@WebGLUniformLocation.com"},
    { id : 3, name : 'hasan', family : 'jalali' , age : 24 , email : "hasan@WebGLUniformLocation.com"},
]
var userName = prompt("enter your name")
var userFamily = prompt("enter your family")
var userAge = prompt("enter your age")
var userEmail = prompt("enter your email")

if (userName.length < 3 || userName.length > 10){
    alert("نام شما حداقل ۳ کاراکتر و حداکثر ۱۰")
} else if (userFamily.length < 3 || userFamily.length > 15) {
    alert("نام خانوادگی شما حداقل ۳ و حداکثر ۱۵ کارکتر میتواند داشته باشد")
} else if( isNaN(userAge) || userAge.length > 3){
    alert("لطفا سن را به درستی وارد کنید")
} else {
    var newUser ={
        id : 4,
        name : userName,
        family : userFamily,
        age : userAge,
        email : userEmail,
    }
    users.push(newUser)
    console.log(users)
}