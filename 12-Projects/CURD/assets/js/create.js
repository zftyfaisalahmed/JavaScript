let userForm = document.getElementById("userform");
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userProfile= document.getElementById("profile");
let userGender= document.getElementsByName("gender");
let selGender = " ";

let users = localStorage.getItem("userinfo")
    ? JSON.parse(localStorage.getItem("userinfo"))
    : []

// to generate random id - arrow function
const genRanId = () => {
    let randId = Math.flour(Math.random() * 1000)
    return randId
}
//form submit Hamndler
userForm.addEventListener("submit", function(e){
    e.preventDefault(); //to avoid page refresh

    for(let index = 0; index < userGender.length; index++){
        if(userGender[index].checked){
            selGender = userGender[index].value;
            // console.log(selGender);
        }
    }

    //Object
    let data = {
        name : userName.value,
        email : userEmail.value,
        profile : userProfile.value,
        gender : selGender,
    };
    console.log("new user =", data);

    createUser(data)
});

function createUser(user) {
    console.log(users)
    if(user.email === users.email){
        alert("user email already registered")
    }else{

    localStorage.setItem("userInfo", JSON.stringify(user));
    alert("new details created successfully")
    window.location.href = "../CURD/index.html";
}
}
