  document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    
    document.getElementById("confirmation").classList.remove("hidden");
  
    
    document.getElementById("paymentForm").reset();  
  });
  
  
  document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = "tickets.html";  
  });
  