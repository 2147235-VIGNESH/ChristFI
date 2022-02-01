function attachButton(li) {

    let btns = document.createElement('div');
    btns.className = 'btns';
    li.appendChild(btns);
  
    const xmlns = "http://www.w3.org/2000/svg";
    let boxWidth = 36;
    let boxHeight = 36;
  
    const favoriteButton = document.createElementNS(xmlns, "svg");
    favoriteButton.setAttributeNS(null, "viewBox", "0 0" + " " + boxWidth + " "+ boxHeight);
    favoriteButton.setAttributeNS(null, "width", boxWidth);
    favoriteButton.setAttributeNS(null, "height", boxHeight);
      favoriteButton.setAttributeNS(null, 'class', "fav");
  
    favoriteButton.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
    let favPath = document.createElementNS (xmlns, "path");
  
    favPath.setAttributeNS (null, 'd', "M23 11L18 0l-5 11c-.4.5-1 1-1.6 1L0 13.8l8.3 8.4c.4.5.6 1.2.5 2L6.8 36 17 30.4l1-.3c.4 0 .7.4 1 .6L29 36l-1.8-12c0-.6 0-1.3.5-1.8l8.3-8.4L24.6 12c-.7 0-1.2-.5-1.5-1z");
      favPath.setAttributeNS(null, 'class', "favPath");
  
    favoriteButton.appendChild(favPath);
    btns.appendChild(favoriteButton);
  
      boxWidth = 36;
      boxHeight = 24;
  
    const deleteButton = document.createElementNS(xmlns, "svg");
    deleteButton.setAttributeNS(null, "viewBox", "0 0" + " " + boxWidth + " "+ boxHeight);
    deleteButton.setAttributeNS(null, "width", boxWidth);
    deleteButton.setAttributeNS(null, "height", boxHeight);
    deleteButton.setAttributeNS(null, 'class', "delete");
    deleteButton.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
  
    let bin = document.createElementNS(xmlns, "g");
    bin.setAttributeNS(null, "class", "bin");
    let cap = document.createElementNS (xmlns, "path");
    cap.setAttributeNS(null, "class", "cap");
  
    let can = document.createElementNS (xmlns, "path");
    can.setAttributeNS(null, "class", "can");
  
    cap.setAttributeNS (null, 'd', "M23.7252648,1.75191502 L16.5206374,1.75191502 L16.5206374,0.358408695 C16.5206374,0.160513813 16.3638258,0 16.1703135,0 L8.60470208,0 C8.41127124,0 8.25445962,0.160513813 8.25445962,0.358408695 L8.25445962,1.75183177 L1.04975087,1.75183177 C0.46994661,1.75183177 0,2.23270718 0,2.8258923 L0,6.19992928 L24.7750156,6.19992928 L24.7750156,2.82597555 C24.7750156,2.23279043 24.305069,1.75191502 23.7252648,1.75191502 Z");
  
    can.setAttributeNS (null, 'd', "M3.11525858,32.2713554 C3.15277293,33.1879825 3.89003982,33.911377 4.78664099,33.911377 L20.4035975,33.911377 C21.3001987,33.911377 22.0374655,33.1879825 22.0749799,32.2713554 L23.1902385,8.18462596 L2,8.18462596 L3.11525858,32.2713554 Z M16.1278564,14.1673454 C16.1278564,13.7835442 16.43204,13.4722573 16.8073463,13.4722573 L17.8941233,13.4722573 C18.2691854,13.4722573 18.5736132,13.783461 18.5736132,14.1673454 L18.5736132,27.9286575 C18.5736132,28.3125419 18.2694296,28.6237456 17.8941233,28.6237456 L16.8073463,28.6237456 C16.4322028,28.6237456 16.1278564,28.3127084 16.1278564,27.9286575 L16.1278564,14.1673454 Z M11.3723222,14.1673454 C11.3723222,13.7835442 11.6765059,13.4722573 12.0517308,13.4722573 L13.1385077,13.4722573 C13.5135699,13.4722573 13.8179162,13.783461 13.8179162,14.1673454 L13.8179162,27.9286575 C13.8179162,28.3125419 13.513814,28.6237456 13.1385077,28.6237456 L12.0517308,28.6237456 C11.6765872,28.6237456 11.3723222,28.3127084 11.3723222,27.9286575 L11.3723222,14.1673454 L11.3723222,14.1673454 Z M6.61662529,14.1673454 C6.61662529,13.7835442 6.92080891,13.4722573 7.29603382,13.4722573 L8.38289216,13.4722573 C8.75803569,13.4722573 9.06230069,13.783461 9.06230069,14.1673454 L9.06230069,27.9286575 C9.06230069,28.3125419 8.75811706,28.6237456 8.38289216,28.6237456 L7.29603382,28.6237456 C6.92089029,28.6237456 6.61662529,28.3127084 6.61662529,27.9286575 L6.61662529,14.1673454 Z");
  
    bin.appendChild(cap);
    bin.appendChild(can);
    deleteButton.appendChild(bin);
  
    btns.appendChild(deleteButton);
  }
  /*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
signIn = document.getElementById('sign-in'),
loginIn = document.getElementById('login-in'),
loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
// Remove classes first if they exist
loginIn.classList.remove('block')
loginUp.classList.remove('none')

// Add classes
loginIn.classList.toggle('none')
loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
// Remove classes first if they exist
loginIn.classList.remove('none')
loginUp.classList.remove('block')
 
// Add classes
loginIn.classList.toggle('block')
loginUp.classList.toggle('none')
})
/*
$(document).getElementById(function(){
  // set initially button state hidden
  $("#reg").hide();
  // use keyup event on email field
  //^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$
  $("#email").keyup(function(){
      if(validateEmail()){
          // if the email is validated
          // set input email border green
          $("#email").css("border","4px solid green");
          // and set label 
      //    $("#email_error_message").html("<p class='text-success'>E-mail Validated</p>");
      }else{
          // if the email is not validated
          // set border red
          
          $("#email").css("border","4px solid red");
      //    $("#email_error_message").html("<p class='text-danger' >incorrect email</p>");
      
      }
      buttonState();
  });

  $("#fname").keyup(function(){
      if(validatename()){
          // if the email is validated
          // set input email border green
          $("#fname").css("border","4px solid green");
          // and set label 
       //   $("#fname_error_message").html("<p class='text-success'>Name Validated</p>");
      }else{
          // if the email is not validated
          // set border red
          $("#fname").css("border","4px solid red");
      //    $("#fname_error_message").html("<p class='text-danger'>incorrect Name</p>");
      }
      buttonState();
  });
  $("#lname").keyup(function(){
      if(validatename2()){
          // if the email is validated
          // set input email border green
          $("#lname").css("border","4px solid green");
          // and set label 
      //    $("#sname_error_message").html("<p class='text-success'>Name Validated</p>");
      }else{
          // if the email is not validated
          // set border red
          $("#lname").css("border","4px solid red");
       //   $("#sname_error_message").html("<p class='text-danger'>incorrect Name</p>");
      }
      buttonState();
  });
  $("#pno").keyup(function(){
      if(validatephone()){
          // if the email is validated
          // set input email border green
          $("#pno").css("border","4px solid green");
          // and set label 
      //    $("#phone_error_message").html("<p class='text-success'>phone Validated</p>");
      }else{
          // if the email is not validated
          // set border red
          $("#pno").css("border","4px solid red");
      //    $("#phone_error_message").html("<p class='text-danger'>incorrect phone no</p>");
      }
      buttonState();
  });
  


  
  
});
function buttonState(){
  if(validateEmail()  && validatename() && validatename2() && validatephone()){
      // if the both email and password are validate
      // then button should show visible
      $("#reg").show();
  }else{
      // if both email and pasword are not validated
      // button state should hidden
      $("#reg").hide();
  }
}
function validateEmail(){
  // get value of input email
  var email=$("#email").val();
  // use reular expression
   var reg = /^([a-zA-Z0-9]{8,20}@(christuniversity.in))$/;
   if(reg.test(email)){
       return true;
   }else{
       return false;
   }
}

function validatename(){
  // get value of input email
  var name=$("#fname").val();
  // use reular expression
   var reg3 = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
   if(reg3.test(name)){
       return true;
   }else{
       return false;
   }
}
function validatename2(){
  // get value of input email
  var name=$("#lname").val();
  // use reular expression
   var reg3 = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
   if(reg3.test(name)){
       return true;
   }else{
       return false;
   }
}
function validatephone(){
  // get value of input email
  var phone=$("#pno").val();
  // use reular expression
   var reg4 = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
   if(reg4.test(phone)){
       return true;
   }else{
       return false;
   }
}
function validatepass(){
  // get value of input email
  var phone=$("#pass").val();
  // use reular expression
   var reg4 = "/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/";
   if(reg4.test(phone)){
       return true;
   }else{
       return false;
   }
}*/


$(document).ready(function()
{
	$("#submit").hide();
$("#name").keyup(function()
{
if(validatename())
{
	 $("#name").css("border","4px solid green");
	 $("#messagename").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#name").css("border","4px solid red");
	$('#messagename').html("<p class='text-danger'>INCORRECT NAME</p>");
}
 buttonState();
});
$("#address").keyup(function()
{
	if(validateadd())
	{
$("#address").css("border","4px solid green");
$("#messageadd").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#address").css("border","4px solid red");
	$("#messageadd").html("<p class='text-danger'>INVALID ADDRESS</p>")
}
buttonstate();
}); 

$("#email").keyup(function()
{
	if(validateemail())
	{
$("#email").css("border","4px solid green");
$("#messageemail").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#email").css("border","4px solid red");
	$("#messageemail").html("<p class='text-danger'>INVALID EMAIL</p>")
}
buttonstate();
});

$("#password").keyup(function()
{
	if(validatepass())
	{
$("#password").css("border","4px solid red");
$("#messpass").html("<p class='text-success'>WEAK PASSWORD</p>")
}
else if(validatepass2())
{
	$("#password").css("border","4px solid lightgreen");
$("#messpass").html("<p class='text-success'>MODERATE PASSWORD</p>")
}
else if(validatepass3())
{
	$("#password").css("border","4px solid green");
$("#messpass").html("<p class='text-success'>STRONG PASSWORD</p>")
}
else
{
	$("#password").css("border","4px solid red");
	$("#messpass").html("<p class='text-danger'>INCORRECT PASSWORD</p>")
}
buttonstate();
});
$("#text").keyup(function()
{
	if(feedtext())
	{
$("#text").css("border","4px solid green");
$("#messtext").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#text").css("border","4px solid red");
	$("#messtext").html("<p class='text-danger'>INVALID</p>")
}
buttonstate();
});
$("#user").keyup(function()
{
	if(username())
	{
$("#user").css("border","4px solid green");
$("#messageuser").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#user").css("border","4px solid red");
	$("#messageuser").html("<p class='text-danger'>INVALID</p>")
}
buttonstate();
});
buttonstate();
});



function buttonstate()
{ $("#submit").hide();

	if (validatename() && validateadd() && validateemail()&& feedtext() && username() && (validatepass() | validatepass2() | validatepass3())) {
		$("#submit").show();
	}
	else
	{
		$("#submit").hide();
	}
}
//+/s+[a-zA-Z]{5,20}
function validatename()
{
	var name=$("#name").val();
	var reg=/^([a-zA-Z]{3,20}) ([a-zA-Z]{2,20})+(\s*)$/;
	if(reg.test(name)){
             return true;
         }else{
             return false;
         }
}
function validateadd()
{

	var address=$("#address").val();
	var reg2=/^([a-zA-z0-9-#/(){}]{3,20})\s*(([a-zA-z0-9-#/(){}/]{1,20})\s*)*$/;
	if(reg2.test(address)){
             return true;
         }else{
             return false;
         }
}
function validateemail()
{
	var users=$("#user").val();
	var email=$("#email").val();
	var reg3=/^([a-zA-z0-9.]{4,20})@(c|C)hristuniversity.in$/;
	//var reg3=/^users@(c|C)hristuniversity.in$/;
	var match=/^.*(?=@christuniversity.in)$/;
	if(reg3.test(email))
	{
		return true;
	}
	else if(!match.test(users))
	{
     return false;
	}
	else
	{
		return false;
	}

}
function feedtext()
{
	var feed=$("#text").val();
	var write=/^[\w\s]{10,}$/;
	if(write.test(feed))
	{
		return true;
	}
	else
	{
		return false;
	}

}

function validatepass()
{
	var pass=$("#password").val();
	//var weak=/^(([a-z]+[A-Z])+[a-zA-Z]|([A-Z]+[a-z]+[a-zA-Z])|([a-zA-Z][A-Z]+[a-z])|([a-zA-Z][A-Z]+[a-z]))$/;
	//(?<!foo|bar)(foo|bar)(?!foo|bar)
	var weak=/^(?=.*[a-z])[a-zA-z]{8,20}$/;
	if(weak.test(pass))
	{
		return true;
	}
	else
	{
		return false;
	}
}
function validatepass2()
{
	var pass=$("#password").val();
	var medium=/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))[a-zA-z0-9]{8,20}$/;
	if(medium.test(pass))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function validatepass3()
{
	//special charcter between characters 
	//(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-z][!@#$%^&*?][a-zA-z])(?=.*[~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?])[a-zA-z0-9~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?]{8,20}
	var pass=$("#password").val();
	var strong=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?])[a-zA-z0-9~`!@#$%^&*()_+={}[|\;:"<\]\>,./?]{8,20}$/;
	if(strong.test(pass))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function username()
{
	//special charcter between characters 
	//(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-z][!@#$%^&*?][a-zA-z])(?=.*[~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?])[a-zA-z0-9~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?]{8,20}
	var users=$("#user").val();
	var val=/^[a-zA-Z]{4,}$/;
	if(val.test(users))
	{
		return true;
	}
	else
	{
		return false;
	}
}
$(function() {
    $("#submit").click(function() {     
      if($('input[type=radio][name=interest]:checked').length == 0)
      {
         alert("Please select atleast INTEREST ");
         return false;
      }
      if($('input[type=checkbox][name=like]:checked').length == 0)
      {
         alert("Please select atleast ONE CHECKBOX ");
         return false;
      }
      else
      {
         $('.all').remove();
         $(".thankyou").append("THANKS FOR YOUR PATIENCE");
         $(submit).hide();
      }      
    });
});

$(document).ready(function(){
  $("#user").keypress(function(e){
     var keyCode = e.which;
    /*
      48-57 - (0-9)Numbers
    */
 
    if ( !(keyCode <= 48 || keyCode >= 57)) { 
      return false;
    }
  });
});
