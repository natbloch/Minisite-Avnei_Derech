$(document).ready(function() {
	var window_width = $( window ).width();
	if(window_width<640){
		var screen = 'מובייל';
	}else{
		var screen = 'ווב';
	}
	$('#media').val(screen);
	switchTxt();
	$("#agree").click(function(){

		$(this).prop("checked")?$('#spam').val('כן'):$('#spam').val('לא')

	})
});

$("#phone").keydown(function (e) {
      var phoneval = $("#phone").val();
      $("#phone").attr('maxlength','10').attr('minlength','10');
      if (phoneval[0] == 0) {
        if (phoneval[1] == 5 || phoneval[1] == 7) {
          $("#phone").attr('maxlength','10').attr('minlength','10');
        }else{
          $("#phone").attr('maxlength','9').attr('minlength','9');
        }
      }

  	});

		function checkPhone(phone) {
	var phoneval = $("#phone").val();
	if (phoneval[0] == 0) {
			if (phoneval[1] == 5 /* || phoneval[1] == 7*/) {
				if (phoneval.length == 10) {
					return /^0[0-9]{8,9}$/.test(phone);
				}
			}else{
				if (phoneval.length == 9) {
					return /^0[0-9]{8,9}$/.test(phone);
				}
				return false;
			}

		}else{
			return false;
		}
	}


$("#showform").click(function () {
	$(".form_container").css({ 'display':'block' });
});

$("#exitform").click(function () {
	$(".form_container").css({ 'display':'none' });
});


function switchTxt() {
	var slideOut = 1500;
	var slideIn = 1700;
	var delayTime = 3000; // + slideOut

	$('#txt').delay(delayTime).animate({ 'opacity':1 }, slideOut, 'easeOutQuart', function() {
		if($('#txt #txt-slide1').css('opacity') == 1) { switchIt('1', '2'); }
		else if($('#txt #txt-slide2').css('opacity') == 1) { switchIt('2', '3'); }
		else if($('#txt #txt-slide3').css('opacity') == 1) { switchIt('3', '1'); }
		// else if($('#txt #txt-slide4').css('opacity') == 1) { switchIt('4', '1'); }
		switchTxt();
	});
}
function switchIt(off, on) {
	var slideOut = 1500;
	var slideIn = 1700;

	$('#txt #txt-slide' + off).animate({ 'opacity':0 }, slideOut, 'easeOutQuart', function() {
		$('#txt #txt-slide' + off).css({ 'display':'none' });
	});
	$('#txt #txt-slide' + on).css({ 'display':'block' }).animate({ 'opacity':1 }, slideIn, 'easeOutQuart');
}


$('#btn_form').on('click',function(e){
	$('#btn_form').attr('disabled', 'disabled');
	e.preventDefault();
	var name_input = $('#full_name');
//	var name_email = $('#email');
	var name_phone = $('#phone');

	var name_email = $('#email');


	var valid=true;



	if(!checkPhone(name_phone.val())){
		var parent = $(name_phone).parents()[0];
		$(parent).addClass("error");
		valid=false;
	}
	if(name_input.val() == ""){
		var parent = $(name_input).parents()[0];
		$(parent).addClass("error");
		valid=false;
	}




//	if(!IsEmail(name_email.val())){
//		var parent = $(name_email).parents()[0];
//		$(parent).addClass("error");
//		valid=false;
//	}

if(!valid){
	$('#btn_form').removeAttr('disabled');
}

if(!valid)return;

	if($('#full_name').val().match(' ')){

		var n=$('#full_name').val().split(' ');
		$('#name').val(n[0])
		n.shift()
		$('#family').val(n.join(' '))

	}else{
		$('#name').val($('#full_name').val())
	}

		$('#misht').val($('#mishtahen').val())
		var data = $('form').serialize();
//		console.log(data);

		$.get("https://campaign.twisted.co.il/manager/api.php", data ,function(response){
			console.log(response);
	 		$.post('api.php',data)
			activateThanks();
		});

});

function IsEmail(email) {
     var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     if (regex.test(email)) return true;
     else return false;
}

$('form input, form select').on('focus',function(){
	var parent = $(this).parents()[0];
	$(parent).removeClass("error");
});

 $("#phone").on("keypress keyup blur",function (event) {
   $(this).val($(this).val().replace(/[^\d].+/, ""));
	if ((event.which < 48 || event.which > 57)) {
		event.preventDefault();
	}
});

function activateThanks() {
	var q = document.location.href.split('?');
	var qs = q[1];
	$('.form_container form').animate({ 'opacity':0 }, 480, 'easeOutQuart', function() {
		$('.form_container form').css({ 'display':'none' });
	});
	$('#preloader').css({ 'display':'block' }).animate({ 'opacity':1 }, 666, 'easeOutQuart');
	var thanksUrl = "ty.php?"+qs;
	setTimeout(function(){
		window.location = thanksUrl;
		this.form.reset();
	},2500);
}


//function getUrlVars(){for(var t,e=[],n=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),r=0;r<n.length;r++)t=n[r].split("="),e.push(t[0]),e[t[0]]=t[1];return e}
