jQuery(document).ready(function(a){a.backstretch("images/background.png");var c=a("#alert-ok"),d=a("#alert-error");a("#form").submit(function(b){b.preventDefault();if(b=a("#email").val()){var e=a("#submitBtn");e.button("loading");c.hide();d.hide();a.ajax({url:"http://code.junookyo.xyz/apps/x-email/juno_okyo.php",type:"POST",dataType:"json",data:{email:b}}).done(function(b){b.data.found?(d.fadeIn("fast"),ga("send","event","email","found")):(c.fadeIn("fast"),ga("send","event","email","not_found"));a("#email").val("").focus()}).fail(function(){console.log("error")}).always(function(){e.button("reset")})}ga("send","event","form","submit")})});
