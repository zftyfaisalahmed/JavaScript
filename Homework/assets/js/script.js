let employeeNames = 
    [document.getElementById("demo1").innerHTML = "CELIN",
    document.getElementById("demo2").innerHTML = "TEJU",
    document.getElementById("demo3").innerHTML = "KSR",
    document.getElementById("demo4").innerHTML = "LAKSHMI",
    document.getElementById("demo5").innerHTML = "NISHA",
    document.getElementById("demo6").innerHTML = "LAVANYA",
    document.getElementById("demo7").innerHTML = "HASI",
    document.getElementById("demo8").innerHTML = "PRAJWAL",
    document.getElementById("demo9").innerHTML = "ROSHAN",
    document.getElementById("demo10").innerHTML = "PRASHUB"];

let Adding = [
    document,getElementById("place").innerHTML = "0987 iuytdcvjky",
    document.getElementById("Address").innerHTML = "Address"];

var mobile = [document.getElementById("mobile").innerHTML = "0987654321"]

var email = [document.getElementById("email1").innerHTML = "celin@gmail.com",
            document.getElementById("email2").innerHTML = "teju@gmail.com",
            document.getElementById("email3").innerHTML = "ksr@gmail.com",
            document.getElementById("email4").innerHTML = "lakshmi@gmail.com",
            document.getElementById("email5").innerHTML = "nisha@gmail.com",
            document.getElementById("email6").innerHTML = "lavanya@gmail.com",
            document.getElementById("email7").innerHTML = "hasi@gmail.com",
            document.getElementById("email8").innerHTML = "prajwal@gmail.com",
            document.getElementById("email9").innerHTML = "roshan@gmail.com",
            document.getElementById("email10").innerHTML = "prashub@gmail.com",]

function editEmployee() {
      alert('Edit button clicked');
}
        
function deleteEmployee() {
        const confirmed = confirm('Are you sure you want to delete this employee?');
    if (confirmed) {  
        alert('Employee detailes deleted');
    }
}