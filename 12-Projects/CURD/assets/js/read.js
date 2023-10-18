let users = localStorage.getItem("userinfo")
    ? JSON.parse(localStorage.getItem("userinfo"))
    : []

console.log(users)

let result =  document.getElementById("result")

function printUser(){
        result.innerHTML += 
        `<img src=${users.profile} alt="">
        <p><b>User Id : <span>${users.id}</span></b></p>
        <p><b>NAME : <span>${users.name}</span></b></p>
        <p><b>EMAIL : <span>${users.email}</span></b></p>
        <p>
        <a href="../CURD/update.html" class="btn">EDIT</a>
        <a href="#" class="btn" onclick="deleteUser(${users.id})">DELETE</a>
        </p>`
}
printUser();

function deleteUser(id) {
    if(confirm(`Are you sure to delete an user id = ${id}`)){
        if(id === users.id){
            localStorage.removeItem("userinfo")
            alert("delete user")
            result.style.display = "none"
        }
    }else{
        alert("Delete")
    }
}