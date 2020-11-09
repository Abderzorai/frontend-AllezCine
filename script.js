/**
 * BUTTON BACK TO TOP
 */
//Get the button
var mybutton = document.getElementById("BtnBackToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/**
 * GDPR COOKIE
 */

(function() {
	if (!localStorage.getItem('cookieconsent')) {
		document.body.innerHTML += '<div class="cookieconsent" style="position:fixed;padding:20px;left:0;bottom:0;background-color:#000;color:#FFF;text-align:center;width:100%;z-index:99999;">This site uses cookies. By continuing to use this website, you agree to their use. <a href="#" style="color:#CCCCCC;">I Understand</a></div>';
		document.querySelector('.cookieconsent a').onclick = function(e) {
			e.preventDefault();
			document.querySelector('.cookieconsent').style.display = 'none';
			localStorage.setItem('cookieconsent', true);
		};
	}
})();

var callBackGetSuccess = function(data) {
  console.log("donnees api", data)
  //"le film "+ data.title);
  
    var img = document.getElementsByClassName("img");
    img.src = "http://image.tmdb.org/t/p/w300"+data.poster_path;
    const title = document.getElementsByClassName("title");
    title.innerHTML= data.title;
    const years = document.getElementsByClassName("years");
    years.innerHTML= data.release_date.substr(0, 4);
  }
  var $j = jQuery.noConflict();



  document.addEventListener("DOMContentLoaded", () => {
    
    var url = "https://api.themoviedb.org/3/movie/540?api_key=0275c4ff67f79b6f280f14f1326f3b20"

    $j.get(url,callBackGetSuccess).done(function() {

    })
    .fail(function() {
    alert("error");
    })
    .always(function()
    {

    });
});
  
  
  
  
  
  function validateForm() {
      var name =  document.getElementById('name').value;
      if (name == "") {
          document.querySelector('.status').innerHTML = "Name cannot be empty";
          return false;
      }
      var email =  document.getElementById('email').value;
      if (email == "") {
          document.querySelector('.status').innerHTML = "Email cannot be empty";
          return false;
      } else {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(!re.test(email)){
              document.querySelector('.status').innerHTML = "Email format invalid";
              return false;
          }
      }
      var subject =  document.getElementById('subject').value;
      if (subject == "") {
          document.querySelector('.status').innerHTML = "Subject cannot be empty";
          return false;
      }
      var message =  document.getElementById('message').value;
      if (message == "") {
          document.querySelector('.status').innerHTML = "Message cannot be empty";
          return false;
      }
      document.querySelector('.status').innerHTML = "Sending...";
      var information = document.getElementById("info");
      information.innerHTML= " Your name is : " + name + " <br> Your subject is : " + subject + " <br> Your Email is : " + email + " <br> Your message is :" + message  ;
    }
   
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
    validateForm()
  }
  
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
   
  }