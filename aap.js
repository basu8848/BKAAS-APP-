// Show Booking Form
function showBookingForm() {
  document.getElementById("bookingForm").style.display = "flex";
}

// Close Booking Form
function closeBookingForm() {
  document.getElementById("bookingForm").style.display = "none";
}

// Submit Booking Form
document.getElementById("rideForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("rideForm").reset();
  document.getElementById("bookingSuccess").style.display = "block";
  setTimeout(closeBookingForm, 2000);
});

// Show Services Popup
function showServices() {
  document.getElementById("servicesPopup").style.display = "flex";
}

// Close Services Popup
function closeServices() {
  document.getElementById("servicesPopup").style.display = "none";
}