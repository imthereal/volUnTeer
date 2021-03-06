$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var orgname = $("input#orgname").val();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      
      // add item to local storage
      var storage = window.localStorage;
      var data = {orgname, name, phone, email, message}; // package items
      var orgs = JSON.parse(storage.getItem("orgs"));
      if (!orgs)
        orgs = [];
      orgs.push(data);
      storage.setItem("orgs", JSON.stringify(orgs));
      
      // Success message
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
      $('#success > .alert-success')
        .append("<strong>Your organization has been added. </strong>"); 
      $('#success > .alert-success')
        .append('</div>');
      //clear all fields
      $('#contactForm').trigger("reset");
      
      setTimeout(function() {
        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
      }, 1000);
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
