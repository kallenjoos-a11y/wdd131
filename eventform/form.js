
const form = document.querySelector("#eventForm");
const customerType = document.querySelector("#type");
const notesContainer = document.querySelector("#notesContainer");
const output = document.querySelector("#output");
const iNumLabel = document.querySelector("#iNumLabel");
const iNum = document.querySelector("#iNum");

function updateINum() {
  const value = customerType.value;

  if(value == "student"){
    notesContainer.removeAttribute("hidden");
    iNumLabel.textContent = "Student I#";
    iNum.required = true;
  } else if(value == "guest"){
    notesContainer.removeAttribute("hidden");
    iNumLabel.textContent = "Access Code";
    iNum.required = true;
  } else {
    notesContainer.setAttribute("hidden");
    iNumLabel.textContent = "";
    iNum.required = false;
  }
  
}

customerType.addEventListener("change", updateINum);
updateINum();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  const chosen = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return chosen <= today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const eventDate = form.eventDate.value;
  const iNum = form.iNum.value.trim();

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a valid event date.";
    return;
  }

  if (type == "student"){
    if (iNum.length < 9 || !/^\d+$/.test(iNum) || iNum.length > 9){
      output.textContent = "Student I# must be 9 digits";
      return;
    }
  } else if (type == "guest"){
    if (iNum != "EVENT131"){
      output.textContent = "Invalid Guest Code"
      return;
    }
  }
  

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateINum();
});
          