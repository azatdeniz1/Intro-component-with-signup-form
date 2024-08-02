const container = document.querySelector(".container");
const form_El = document.querySelectorAll(".form-element");
const apply = document.querySelector(".apply");
const Name = document.querySelector(".name");
const Surname = document.querySelector(".Surname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const warning_Con=document.querySelector(".warnings")
const warnings=document.querySelectorAll(".warning")
console.log(form_El);

function cycle(e){
  if(e.type==="click" || (e.type==="keypress" && e.key==="Enter")){
    form_El.forEach((el) => {
    el.value = el.value.trim(); 
    if(el.classList.contains("name")){
      warning_Con.innerHTML=""
    }
    if (el.value === "") {
      console.log(`you cannot leave ${el.classList[0]} empty`)
      const empty=`<div class="warning">you cannot leave ${el.classList[0]} empty</div>`
      warning_Con.insertAdjacentHTML("afterbegin",empty);
    }
    else if(el.classList.contains("email")){
      const mail = el.value.split("@");
      if(mail[0]==="" || mail[1]!=="gmail.com"){
        const email=(`<div class="warning">Looks like this is not an Gmail</div>`);
      warning_Con.insertAdjacentHTML("afterbegin",email);
      }
    }
  })
  }
  
}
apply.addEventListener("click", cycle);
window.addEventListener("keypress",cycle);
