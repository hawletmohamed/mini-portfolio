document.addEventListener("DOMContentLoaded",function(){
    const fills = document.querySelectorAll(".fill");
    fills.forEach(fill =>{
        const percent =fill.getAttribute("data-percent");
        fill.style.width = percent + "%";
    });
});



document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("response");

  if (name === " " && email === "" &&  message === "") {
    response.style.color = "red";
    response.textContent = "Please fill in all fields.";
  } 
  else{
    response.style.color = "#00ff99";
    response.textContent =` Thanks, ${name}! Your message has been sent successfully.`;
    document.getElementById("contactForm").reset();
  }
});