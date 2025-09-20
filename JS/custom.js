// top toast
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const toast2 = document.getElementById("toast2"); // Adjust the ID to your actual toast ID
  const toast = new bootstrap.Toast(toast2);

  form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
          event.preventDefault(); // Prevent form submission
          event.stopPropagation();
      } else {
          event.preventDefault(); // Prevent actual submission for demonstration
          toast.show(); // Show toast only if form is valid
          
      }

      form.reset()
  });
});
// bottom toast
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const toast1 = document.getElementById("toast1"); // Adjust the ID to your actual toast ID
  const toast = new bootstrap.Toast(toast1);

  form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
          event.preventDefault(); // Prevent form submission
          event.stopPropagation();
      } else {
          event.preventDefault(); // Prevent actual submission for demonstration
          toast.show(); // Show toast only if form is valid
          
      }

      form.reset()
  });
});




// close modal and navigate
function closeModalAndNavigate(url) {
    let modalElement = document.querySelector('.modal.show'); // Get the open modal
    if (modalElement) {
      let modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement); // Always get or create the modal instance
      modalInstance.hide(); // Close the modal
      
      // Wait for modal transition to complete before navigating
      modalElement.addEventListener('hidden.bs.modal', function () {
        window.location.href = url;
      }, { once: true }); // Ensures event only runs once per click
    } else {
      window.location.href = url; // Fallback if no modal is open
    }
  }