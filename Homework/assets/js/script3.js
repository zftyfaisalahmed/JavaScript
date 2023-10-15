//  let fullName_flag = false;
// let emailId_flag = false;
// let mobNum_flag = false;
// let city_flag = false;
//let gender_flag = false;
// const employees = [];

function addData() {
// validates.preventDefault();

    // let img_flag = false
    // let fullName_flag = false;
    // let emailId_flag = false;
    // let mobNum_flag = false;
    // let addr_flag = false;

    // var display = document.getElementById("result");

    // let     img = document.getElementById('img');
    let     fullName = document.getElementById("name").value;
    let     emailId = document.getElementById("email").value;
    let     mobNum = document.getElementById("mob").value;
    let     addr = document.getElementById("addr").value;


    /* Get All the input values */
    // img = document.getElementById('img').value;
    // fullName = document.getElementById("fullName").value;
    // emailId = document.getElementById("emailId").value;
    // mobNum = document.getElementById("mobNum").value;
    // addr = document.getElementById("addr").value;

    let section = document.getElementById("user_data_pc");

    let newSection = section.insert(section.innerHTML).value

    newSection.insertCell(0) = fullName
    newSection.insertCell(1) = emailId
    newSection.insertCell(2) = mobNum
    newSection.insertCell(3) = addr
    // newSection.document.getElementById("email") = emailId
    // newSection.document.getElementById("name") = mobNum
    // newSection.document.getElementById("name") = addr
    // newSection.document.getElementById("user_data_pc").img.src = 
    const img1 = document.querySelector("img"); 
    img1.src = "https://picsum.photos/200/301";

    // var output0 = document.getElementById("result0");



    // Image validation

    // if (!img) {
    //     output0.style.color = "red";
    //     output0.innerHTML = "Please select an image";
    // } else {
    //     output0.style.color = "green";
    //     output0.innerHTML = "Image Selected";

    //     img_flag = true
    // }


    // var imgInput = document.getElementById("img");


    /* FullName Validation */
    // let fullName_regex = /^[A-Za-z]+(\s[A-Za-z]+)*$/

    // if (fullName.length === 0) {
    //     document.getElementById("fullNameError").innerText = "Name field cannot be empty"
    //     document.getElementById("fullNameError").style.color = "red"
    // } else {
    //     if (fullName.length <= 3) {
    //         document.getElementById("fullNameError").innerText = "Exceed the limit"
    //         document.getElementById("fullNameError").style.color = "orangered"

    //     } else if (fullName_regex.test(fullName) === false) {
    //         document.getElementById("fullNameError").innerText = "Invalid Full Name"
    //         document.getElementById("fullNameError").style.color = "orangered"
    //     } else {
    //         document.getElementById("fullNameError").innerText = "Valid"
    //         document.getElementById("fullNameError").style.color = "green"

    //         fullName_flag = true
    //     }
    // }

 
    /* Email Validation */
    //let email_regex = /^\S+@\S+\.\S+$/; //Example: admin@gmail.com
    // if (emailId.length === 0) {
    //     document.getElementById("emailIdError").innerText = "Email field cannot be empty"
    //     document.getElementById("emailIdError").style.color = "red"
    // } else {
    //     if (email_regex.test(emailId) === false) {
    //         document.getElementById("emailIdError").innerText = "Invalid email"
    //         document.getElementById("emailIdError").style.color = "orangered"
    //     } else {
    //         document.getElementById("emailIdError").innerText = "Valid"
    //         document.getElementById("emailIdError").style.color = "green"

    //         emailId_flag = true
    //     }
    // }



    /* Mobile Number Validation */
    // let mobNum_regex = /^[6-9]\d{9}$/; //ex
    // if (mobNum.length === 0) {
    //     document.getElementById("mobNumError").innerText = "Number field cannot be empty"
    //     document.getElementById("mobNumError").style.color = "red"
    // } else {
    //     if (mobNum_regex.test(mobNum) === false) {
    //         document.getElementById("mobNumError").innerText = "Invalid Mobile Number"
    //         document.getElementById("mobNumError").style.color = "orangered"
    //     } else {
    //         document.getElementById("mobNumError").innerText = "Valid"
    //         document.getElementById("mobNumError").style.color = "green"
    //         mobNum_flag = true;
    //     }
    // }

    // Address validation
    // let addr_regex =  /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    // if (addr.length === 0){
    //     document.getElementById("addrError").innerText = "Address cannot be empty"
    //     document.getElementById("addrError").style.color = "red"
    // } else {
    //     if (addr_regex.test(addr) === false){
    //         document.getElementById("addrError").innerText = "Invalid Address"
    //         document.getElementById("addrError").style.color = "orangered"
    //     } else {
    //         document.getElementById("addrError").innerText = "Valid"
    //         document.getElementById("addrError").style.color = "green"
    //         addr_flag = true;
    //     }
    // }


    // validating all 

    //   let res = [result0, fullNameError, emailIdError, mobNumError, addrError];
    //   let count = 0
    //   for (let index = 0; index < res.length; index++) {
    //     if (res[index].style.color == "green") {
    //       count++;
    //     }
    //   }
    //   if (count == 5) {
    //     var button = document.getElementById('submit');
    //     if (button.innerHTML == "Edit") {
    //       let messages = document.getElementById('msgs');
    //       document.getElementById('container').innerHTML = '';

    //       details[messages.value].name = fullName;
    //       details[messages.value].email = emailId;
    //       details[messages.value].mobile = mobNum;
    //       details[messages.value].address = addr;
    //       employeeDetails();
    //       resett();
    //     } else {
    //       document.getElementById('container').innerHTML = " ";
    //       details.push({
    //         profilePic: selectedImage.src,
    //         name: fullName,
    //         email: emailId,
    //         mobile: mobNum,
    //         address: addr,
    //       });
    //       employeeDetails();
    //       resett();
    //     }
    //   } else {
    //     document.getElementById('message').innerHTML = "Please Provide Inputs and valid Information";
    //   }



     
    /* if all value have true then form will submit */
    //if (!img || !fullName || !emailId || !mobNum || !addr) {
    //document.getElementById("submitError").innerHTML = "please enter all the required information";
    ///document.getElementById("submitError").style.color = "red"
    //} else {

    // console.log("submited")
    //alert("Submitted Sucessfully")

    /* Intert data to pc_view_table */
    // document.getElementById("user_data_pc").innerHTML += 
    // `<tr>
    // <td>${input0}</td>
    // <td>${fullName}</td>
    // <td>${emailId}</td>
    // <td>${mobNum}</td>
    // <td>${addr}</td>
    // </tr>`
 clearInputs()
}
    // /* insert data to tab_mobile_view table */
    // let newRow = table.insertRow(table.rows.lenght);

// let newRow = table.innerHTML.value

    // `<section class="" id="user_data_pc">
    //     <div class="employee1 ">
    //         <div><img src="assets/images/pic2.jpg" ${newRow.insertCell(0).innerHTML = img} width="350px"></div>
    //         <center id="demo7"> ${newRow.insertCell(1).innerHTML = fullName}</center>
    //         <div class="employee2">
    //             <div class="employee3">
    //                 <label for="">Email :</label> ${newRow.insertCell(2).innerHTML = emailId}
    //                 <input type="text" id="email7" name="email" value=""><hr>
    //                 <label for="">Mobile :</label> ${newRow.insertCell(3).innerHTML = mobNum}
    //                 <input type="text" id="mobile" value=""><hr>
    //                 <details id="demo"><summary>Address</summary> ${newRow.insertCell(4).innerHTML = addr}</details>
    //             </div>
    //         </div>
    //     </div>
        
    //     ${ newRow.insertCell(5).innerHTML = 
    //     `<div class="employee4">
    //         <button type="button" id="edit" class="edit" onclick="editEmployee(this)"><i class="fa-solid  fa-pen"></i></button>
    //         <button type="button" id="delet" class="delet" onclick="deleteEmployee(this)"><i class="fa-solid fa-trash-can"></i></button>
    //     </div>`}
    // </section>`


    // alert("Are you sure?")
    // document.getElementById("user_data_pc")/* .submit() */;

    // document.getElementById("contact-formm").reset();
    // document.getElementById("output0").innerText = ""
    // document.getElementById("fullNameError").innerText = ""
    // document.getElementById("emailIdError").innerText = ""
    // document.getElementById("mobNumError").innerText = ""
    // document.getElementById("addrError").innerText = ""
    // document.getElementById("submitError").innerText = ""
    






function editEmployee(button) {
    let row = button.parentNode.parentNode;

    let imgCell = row.cells[0]
    let nameCell = row.cells[1]
    let emailCell = row.cells[2]
    let mobCell = row.cells[3]
    let addrCell = row.cells[4]

    // Prompt the user to enter updated values 
			let imgInput = 
            prompt("Enter the updated name:", 
                imgCell.innerHTML); 
        let nameInput = 
            prompt("Enter the updated email:", 
                nameCell.innerHTML); 
        let emailInput = 
            prompt("Enter the updated mobile details:", 
                emailCell.innerHTML 
            ); 
        let mobInput = 
            prompt("Enter the updated address:", 
                mobCell.innerHTML 
            );
            let addrInput = prompt("Enter the updated mobile details:", 
            addrCell.innerHTML 
        ); 
         
            
         // Update the cell contents with the new values 
            imgCell.innerHTML = imgInput;         
			nameCell.innerHTML = nameInput; 
			emailCell.innerHTML = emailInput; 
			mobCell.innerHTML = mobInput; 
			addrCell.innerHTML = addrInput;    
}
      
function deleteEmployee() {
    //   const confirmed = confirm('Are you sure you want to delete this employee?');
//   if (confirmed) {  
//       alert("Employee detailes deleted", document.getElementById("user_data_pc").innerHTML = " ");

// Get the parent row of the clicked button 
let row = button.parentNode.parentNode; 

// Remove the row from the table 
row.parentNode.removeChild(row); 
}
// }