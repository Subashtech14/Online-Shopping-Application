// Script for navigation bar
function news() {
  let email = document.getElementById("email").value;
  console.log(email);
  if (validateEmailAddress(email)) {
    alert("Thank you for subscribing");
  } else {
    alert("Please enter a valid email address");
  }
}
function validateEmailAddress(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const bar = document.getElementById("bar");
const navigation = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    navigation.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
}
