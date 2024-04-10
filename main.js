window.addEventListener("scroll", function () {
  const content = document.querySelector('.container');
  const contentPosition = content.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (contentPosition < screenHeight / 1.2) {
    content.classList.remove('visibilit');
  }
});

window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


const login = document.querySelector(".login");
const oldal = document.querySelector(".oldal");
const loginbutton = document.querySelector(".LoginButton")
const mycontainer = document.querySelector(".mycontainer")

window.onload = function () {
  setTimeout(() => {
    login.classList.remove("hidden");
    oldal.classList.remove("hidden");
  }, 1000);

};
const menupontok = document.querySelectorAll(".leheto");
menupontok.forEach(item => {
  item.addEventListener("click", () => {
    login.classList.remove("hidden");
    oldal.classList.remove("hidden");
  })
});

const xbutton = document.querySelector(".a");

xbutton.addEventListener("click", () => {
  login.classList.add("hidden");
  oldal.classList.add("hidden");
})
const hiddenLoginButton = document.querySelector(".hiddenlogin");
hiddenLoginButton.addEventListener("click", () => {

  setTimeout(() => {
    location.href = "./login_reg_sql/login.html";
  }, 500)
})

const hiddenRegistButton = document.querySelector(".hiddenregistration");
hiddenRegistButton.addEventListener("click", () => {

  setTimeout(() => {
    location.href = "./login_reg_sql/registration.html";
  }, 500)
})
//////////////////////////////////////////////////////////
const RegistButton = document.querySelector(".RegistrationButton");
RegistButton.addEventListener("click", () => {

  setTimeout(() => {
    location.href = "./login_reg_sql/registration.html";
  }, 500)
})

const LoginButton = document.querySelector(".LoginButton");
LoginButton.addEventListener("click", () => {

  setTimeout(() => {
    location.href = "./login_reg_sql/login.html";
  }, 500)
})
const menübutton = document.querySelector("a");


//adatfeltöltés

fetch("./munka.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Hiba a kérésben");
    }
    return response.json();
  })
  .then(datas => {
    const myContainer = document.querySelector(".mycontainer");
    console.log("1")
    datas.munkahirdetesek.forEach(item => {
      console.log("2")
      if (item.kategória === "Közgazdaság") {
        myContainer.innerHTML +=
          ` <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
              <div class="col-md-4">
                  <img src="./img/Közgazdász.jpg" class="img-fluid rounded-start" alt="Közgazdaság">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title">${item.munka_megnevezese}</h5>
                      <p class="card-text">${item.fizetes}</p>
                      <p class="card-text">${item.leiras}<small class="text-body-secondary">${item.munkavegzes_helye}</small></p>
                  </div>
                  <button class=Submitbutton>Jelentkezek</button>
              </div>
          </div>
        </div>`;
      }
      if (item.kategória === "Informatika") {
        myContainer.innerHTML +=
          ` <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
              <div class="col-md-4">
                  <img src="./img/Informatika.jpg" class="img-fluid rounded-start" alt="Informatika">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title">${item.munka_megnevezese}</h5>
                      <p class="card-text">${item.fizetes}</p>
                      <p class="card-text">${item.leiras}<small class="text-body-secondary">${item.munkavegzes_helye}</small></p>
                  </div>
                  <button class=Submitbutton>Jelentkezek</button>
              </div>
          </div>
        </div>`;
      }

    });




    console.log(datas);
    return datas;
  })
  .catch(error => console.log(error));

setTimeout(() => {
  const Submitbutton = document.querySelectorAll(".Submitbutton");
  Submitbutton.forEach(item => {
    console.log("szia");
    item.addEventListener("click", () => {
      login.classList.remove("hidden");
      oldal.classList.remove("hidden");
    })
  });
}, 1000);