
$.validator.setDefaults({
    submitHandler: function() {
      alert("Submitted!")  
    }
});

$(document).ready(function(){
    $("#myform").validate({
        rules: {
            name: "required",
            age: {
                required: true,
                minlength: 2
            }
        },messages:{
            name:"Fill it!",
            age: {
                required: "Please, fill this",
                minlength: "Impossible!"
            }
        }
    });
});


