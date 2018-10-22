$(function() {
function toggleSlidebar() {
    document.getElementById("slidebar").classList.toggle("active");
}

$('#subBtn').on('click', function(event) {
    event.preventDefault(); 

   var name = $('#fullname').val();
   var address = $('#address').val();
   var city = $('#city').val();
   var province = $('#province').val();
   var postalCode = $('#postalCode').val();
   var email = $('#email').val();
   var phoneNumber = $('#phoneNumber').val();

   console.log(name, city, address, province, postalCode, email, phoneNumber);
   if(name == "")
   {
   $('.reqName').html("This field is mandatory");
   return false
   }
   else {
    $('.reqName').html("");
    }
   
   if(address == "")
   {
   $('.reqAddress').html("This field is mandatory");
   return false
   }
   else {
    $('.reqAddress').html("");
    }   

   if(city == "")
   {
   $('.reqCity').html("This field is mandatory");
   return false
   }
   else {
    $('.reqCity').html("");
    }
   if(province == "")
   {
   $('.reqProvince').html("This field is mandatory");
   return false
   }
   else {
   $('.reqProvince').html("");
   }  

  var pcRegEx = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/;
   if(!pcRegEx.test(postalCode)){
    $('.reqPostal').html("Postal Code should be in Format");
    return false
    }
    else {
    $('.reqPostal').html("");
    }

   var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
   if(!emailRegex.test(email)){
    $('.reqEmail').html("Email should be in proper format");
    return false
    }
    else {
    $('.reqEmail').html("");
    }
    
    if(phoneNumber == ""){
    $('.reqNumber').html("Phone Number should be in proper format");
    return false
    }
    else {
    $('.reqNumber').html("");
    }
   return true
});


$("#card-1").on("mouseover", function(over) {
    over.preventDefault();
    $('.card #img-1').attr('src', '../img/package-1-2.jfif');
})
$("#card-1").on("mouseout", function(over) {
    over.preventDefault();
    $('.card #img-1').attr('src', '../img/package-1-1.jfif');
    
})
$("#card-2").on("mouseover", function(over) {
    over.preventDefault();
    $('.card #img-2').attr('src', '../img/package-2-2.jfif');
    
})
$("#card-2").on("mouseout", function(over) {
    over.preventDefault();
    $('.card #img-2').attr('src', '../img/package-2-1.jfif');
    
})

$("#card-3").on("mouseover", function(over) {
    over.preventDefault();
    $('.card #img-3').attr('src', '../img/package-3-2.jfif');
    
})
$("#card-3").on("mouseout", function(over) {
    over.preventDefault();
    $('.card #img-3').attr('src', '../img/package-3-1.jfif');
    
})
$("#card-4").on("mouseover", function(over) {
    over.preventDefault();
    $('.card #img-4').attr('src', '../img/package-4-2.jfif');
    
})
$("#card-4").on("mouseout", function(over) {
    over.preventDefault();
    $('.card #img-4').attr('src', '../img/package-4-1.jfif');
    
})

var agName = ["Jatinder Singh", "Navjit Singh", "Jasdeep Kaur", "Inderjit singh"];
var agNumber = ["9874563210", "9876541203", "6465498412", "9874561230"];


$.each(agName, function(i) {
    
  var abc =  $('<div class="cardPackge"><div class="agent-div bgImg-1"></div><div class="agentDetail"><h3 id="agentName">'+agName[i]+'</h3><h4 id="agentNumber">'+agNumber[i]+'</h4></div>')

  $(".packageContainer").append(abc);
});

function dt() {
    var date = Date();
    $('#date-div').html(date);
    // console.log(date);
}
setInterval(dt, 1000)


var airPlane = document.getElementById("plane");
airPlane.style.position = "absolute";
airPlane.style.left = "0px";
var moveForward = true;
// var moveDown = true;

setInterval(function moveBox()  {
    var currentLeft = parseInt(airPlane.style.left);

    if(moveForward && (currentLeft > (window.innerWidth-airPlane.clientWidth))) {
        moveForward = false;
    }
    if(!moveForward && (currentLeft <= 0)) {
        moveForward = true;
    }
    
    if(moveForward) {
        airPlane.style.left = (currentLeft + 10) + 'px';
        airPlane.classList.add("flipPlane");       
    } else {
        airPlane.style.left = (currentLeft - 10) + 'px';
        airPlane.classList.remove("flipPlane");
    }
}, 100);

});