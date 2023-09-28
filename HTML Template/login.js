// add your API endpoint URL here
var API_ENDPOINT = "https://wd4vizudlh.execute-api.us-east-1.amazonaws.com/Prod";

// AJAX POST request to save profile
document.getElementById("Login").onclick = function() {
  var inputData = {
    "username": $('#username').val(),
    "password": $('#password').val()
  };

  $.ajax({
    url: API_ENDPOINT,
    type: 'POST',
    data: JSON.stringify(inputData),
    contentType: 'application/json; charset=utf-8',
    success: function(response) {
      document.getElementById("profileSaved").innerHTML = "Profile Saved!";
    },
    error: function() {
      alert("error");
    }
  });
}

// // AJAX GET request to retrieve profile
// document.getElementById("getprofile").onclick = function() {
//   $.ajax({
//     url: API_ENDPOINT,
//     type: 'GET',
//     contentType: 'application/json; charset=utf-8',
//     success: function(response) {
//       $('#shopee-db tr').slice(1).remove();
//       jQuery.each(response, function(i, data) {
//         $("#shopee-db").append("<tr> \
//           <td>" + data['username'] + "</td> \
//           <td>" + data['password'] + "</td> \
//           </tr>");
//       });
//     },
//     error: function() {
//       alert("error");
//     }
//   });
// }