
function getInput(){
    var name = document.getElementById("inputName").value;
    var Mobile = document.getElementById("inputMobile").value;
    var Occupation = document.getElementById("inputOcc").value;
    var Address = document.getElementById("Address").value;
    
    console.log(name);
    
  document.getElementById("insertpoint").innerHTML += "<tr><td>" + name +  "</td><td>" + Mobile + "</td><td>" + Occupation + "</td><td>" + Address + "</td><td class='update'>"+ "<button class='btn btn-primary'  data-target='#editModal' onclick='edit()'>Edit</button>" + "<button class='btn btn-secondary' onclick='del(this)'>Delete</button>";

// clearing data after entry
document.getElementById("inputName").value = "";
document.getElementById("inputMobile").value = "";
document.getElementById("inputOcc").value = "";
Address = document.getElementById("Address").value = "";

document.getElementById("exampleModal").addEventListener("click", function(event){
    event.preventDefault()
    });


}

function del(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

function edit(btn){

  const row = document.getElementById("insertpoint");
  const edit_button = document.getElementById("editbtn");
  // const end_button = document.getElementById("end-editing");
  
  edit_button.addEventListener("click", function() {
    row.contentEditable = true;
    
  });
} 

// function edit(){
        
// var name = document.getElementById("inputname");
// var mobile = document.getElementById("inputMobile");
// var occ = document.getElementById("inputOcc");
// var address = document.getElementById("Address");





// }

;


document.getElementById("inputname").value = name;
document.getElementById("inputMobile").value = Mobile;
document.getElementById("InputOcc").value = Occupation;
document.getElementById("Address").value = Address; 




  function myFunction(){
  
    confirm("do you want to close the tab?")
  } 

