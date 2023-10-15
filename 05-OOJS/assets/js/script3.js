//  let fullName_flag = false;
// let emailId_flag = false;
// let mobNum_flag = false;
// let city_flag = false;
//let gender_flag = false;

function validation(validates) {
validates.preventDefault();

    let img_flag = false
    let fullName_flag = false;
    let emailId_flag = false;
    let mobNum_flag = false;
    let addr_flag = false;

    // var display = document.getElementById("result");

    let img;
    let fullName;
    let emailId;
    let mobNum;
    let addr;


    /* Get All the input values */
    img = document.getElementById('img').value;
    fullName = document.getElementById("fullName").value;
    emailId = document.getElementById("emailId").value;
    mobNum = document.getElementById("mobNum").value;
    addr = document.getElementById("addr1").value;

    var output0 = document.getElementById("result0");



    // Image validation

    if (!img) {
        output0.style.color = "red";
        output0.innerHTML = "Please select an image";
    } else {
        output0.style.color = "green";
        output0.innerHTML = "Image Selected";
    // clearInputs()    

        img_flag = true
    }
    // clearInputs()


    // var imgInput = document.getElementById("img");


    /* FullName Validation */
    let fullName_regex = /^[A-Za-z]+(\s[A-Za-z]+)*$/

    if (fullName.length === 0) {
        document.getElementById("fullNameError").innerText = "Name field cannot be empty"
        document.getElementById("fullNameError").style.color = "red"
    } else {
        if (fullName.length <= 3) {
            document.getElementById("fullNameError").innerText = "Exceed the limit"
            document.getElementById("fullNameError").style.color = "orangered"

        } else if (fullName_regex.test(fullName) === false) {
            document.getElementById("fullNameError").innerText = "Invalid Full Name"
            document.getElementById("fullNameError").style.color = "orangered"
        } else {
            document.getElementById("fullNameError").innerText = "Valid"
            document.getElementById("fullNameError").style.color = "green"

            fullName_flag = true
        }
    }

 
    /* Email Validation */
    let email_regex = /^\S+@\S+\.\S+$/; //Example: admin@gmail.com
    if (emailId.length === 0) {
        document.getElementById("emailIdError").innerText = "Email field cannot be empty"
        document.getElementById("emailIdError").style.color = "red"
    } else {
        if (email_regex.test(emailId) === false) {
            document.getElementById("emailIdError").innerText = "Invalid email"
            document.getElementById("emailIdError").style.color = "orangered"
        } else {
            document.getElementById("emailIdError").innerText = "Valid"
            document.getElementById("emailIdError").style.color = "green"

            emailId_flag = true
        }
    }



    /* Mobile Number Validation */
    let mobNum_regex = /^[6-9]\d{9}$/; //ex
    if (mobNum.length === 0) {
        document.getElementById("mobNumError").innerText = "Number field cannot be empty"
        document.getElementById("mobNumError").style.color = "red"
    } else {
        if (mobNum_regex.test(mobNum) === false) {
            document.getElementById("mobNumError").innerText = "Invalid Mobile Number"
            document.getElementById("mobNumError").style.color = "orangered"
        } else {
            document.getElementById("mobNumError").innerText = "Valid"
            document.getElementById("mobNumError").style.color = "green"
            mobNum_flag = true;
        }
    }

    // Address validation
    let addr_regex =  /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
    if (addr.length === 0){
        document.getElementById("addrError").innerText = "Address cannot be empty"
        document.getElementById("addrError").style.color = "red"
    } else {
        if (addr_regex.test(addr) === false){
            document.getElementById("addrError").innerText = "Invalid Address"
            document.getElementById("addrError").style.color = "orangered"
        } else {
            document.getElementById("addrError").innerText = "Valid"
            document.getElementById("addrError").style.color = "green"
            addr_flag = true;
        }
    }
    clearInputs()


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
    if (!img || !fullName || !emailId || !mobNum || !addr) {
    document.getElementById("submitError").innerHTML = "please enter all the required information";
    document.getElementById("submitError").style.color = "red"
    // clearInputs()
    
    } else {

    // console.log("submited")
    alert("Submitted Sucessfully")

    /* Intert data to pc_view_table */
    // document.getElementById("user_data_pc").innerHTML += 
    // `<tr>
    // <td>${input0}</td>
    // <td>${fullName}</td>
    // <td>${emailId}</td>
    // <td>${mobNum}</td>
    // <td>${addr}</td>
    // </tr>`


    // /* insert data to tab_mobile_view table */
    let ele = document.getElementById("user_data_pc").innerHTML +=
    `<section class="" id="user_data_pc">
        <div class="employee1 ">
            <div><img src="assets/images/pic2.jpg" ${img} width="350px"></div>
            <center id="demo7"> ${fullName}</center>
            <div class="employee2">
                <div class="employee3">
                    <label for="">Email :</label> ${emailId}
                    <input type="text" id="email7" name="email" value=""><hr>
                    <label for="">Mobile :</label> ${mobNum}
                    <input type="text" id="mobile" value=""><hr>
                    <details id="demo"><summary>Address</summary> ${addr}</details>
                </div>
            </div>
        </div>
        
        <div class="employee4">
            <button type="button" id="edit" class="edit" onclick="editEmployee(this)"><i class="fa-solid  fa-pen"></i></button>
            <button type="button" id="delet" class="delet" onclick="deleteEmployee(this)"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </section>`



    alert("Are you sure?")
    document.getElementById("user_data_pc")/* .submit() */;

    document.getElementById("contact-formm").reset();
    document.getElementById("output0").innerText = ""
    document.getElementById("fullNameError").innerText = ""
    document.getElementById("emailIdError").innerText = ""
    document.getElementById("mobNumError").innerText = ""
    document.getElementById("addrError").innerText = ""
    document.getElementById("submitError").innerText = ""

    }

    // clearInputs()
}
// clearInputs()


function editEmployee(button){
    // alert('Edit button clicked');
    // Get the parent row of the clicked button 
    let row = button.ele.innerHTML 

    // Get the cells within the row 
    let nameCell = row.fullName.value; 
    let emailCell = row.emailId.value; 
    let mobileCell = row.mobNum.value; 
    let addressCell = row.addr.value; 
    
    // Prompt the user to enter updated values 
    let fullName = 
        prompt("Enter the updated name:", 
            nameCell.innerHTML); 
    let emailId = 
        prompt("Enter the updated email:", 
            emailCell.innerHTML); 
    let mobNum = 
        prompt("Enter the updated mobile details:", 
            mobileCell.innerHTML 
        ); 
    let addr = 
        prompt("Enter the updated address:", 
            addressCell.innerHTML 
        ); 
    
    // Update the cell contents with the new values 
    nameCell.innerHTML = fullName; 
    emailCell.innerHTML = emailId; 
    mobileCell.innerHTML = mobNum; 
    addressCell.innerHTML = addr; 
}
      
function deleteEmployee() {
      const confirmed = confirm('Are you sure you want to delete this employee?');
  if (confirmed) {  
      alert("Employee detailes deleted", document.getElementById("user_data_pc").innerHTML = " ");
  }
}


function clearInputs() { 
            
    // Clear input fields 
    document.getElementById("fullName").value = ""; 
    document.getElementById("emailId").value = ""; 
    document.getElementById("mobNum").value = ""; 
    document.getElementById("addr1").value = ""; 
    document.getElementById("img").value = ""; 
}