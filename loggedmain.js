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
const loginbutton = document.querySelector(".LoginButton")
const mycontainer = document.querySelector(".mycontainer")
//Menügombok



//Loggeduser
fetch("./login_reg_sql/profil.php")
  .then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error("Hiba a kérésben");
    }
    return response.json();
  })
  .then(datas => {
    console.log("datas tartalma", datas);
    // A "userName" kulcsból kinyerjük az adatokat
    const userName = datas.dataLine.name;
    document.querySelector(".usname").innerHTML = userName;
  })
  .catch(error => console.log(error));
//szűrés

document.getElementById("szűrésButton").addEventListener("click", function () {
  const menuContent = document.getElementById("menuContent");
  menuContent.classList.toggle("hidden");

});
//Jelentkezéseim menüpont
const jelentekezButton = document.querySelector(".jelentkezButton");
jelentekezButton.addEventListener("click", () => {
  location.href = "./job.html";
});


//adatfeltöltés
function generate(datas) {

  const myContainer = document.querySelector(".mycontainer");
  console.log("1")
  datas.munkahirdetesek.forEach(item => {
    console.log("2")
    if (item.kategória === "Közgazdaság") {
      myContainer.innerHTML +=
        ` <div class="card mb-3" style="max-width: 540px; szűrés">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="./img/Közgazdász.jpg" class="img-fluid rounded-start" alt="Közgazdaság">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.munka_megnevezese}</h5>
                        <p class="card-text fizetes">${item.fizetes}</p>
                        <p class="card-text">${item.leiras}</p>
                        <p<small class="text-body-secondary">${item.munkavegzes_helye}</small></p>
                    </div>
                    <button class=Submitbutton>Jelentkezek</button>
                </div>
            </div>
          </div>`;
    }
    if (item.kategória === "Informatika") {
      myContainer.innerHTML +=
        ` <div class="card mb-3" style="max-width: 540px; szűrés">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="./img/Informatika.jpg" class="img-fluid rounded-start" alt="Informatika">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.munka_megnevezese}</h5>
                        <p class="card-text fizetes">${item.fizetes}</p>
                        <p class="card-text">${item.leiras}</p>
                        <p<small class="text-body-secondary">${item.munkavegzes_helye}</small></p>
                    </div>
                    <button class=Submitbutton>Jelentkezek</button>
                </div>
            </div>
          </div>`;
    }
  })







}
fetch("./munka.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Hiba a kérésben");
    }
    return response.json();
  })
  .then(datas => {


    generate(datas);




    console.log(datas);
    return datas;
  })
  .catch(error => console.log(error));



const addeventlogout = document.querySelector(".addeventlogout");
addeventlogout.addEventListener("click", () => {

  fetch("./login_reg_sql/logout.php")
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Hiba a kérésben");
      }
      return response.json();
    })
    .then(datas => {
      console.log("datas tartalma:", datas);
      // A "userName" kulcsból kinyerjük az adatokat
      location.href = "./home.html";
    })
    .catch(error => console.log(error));

})



//Szűrés fizetés alapjan/////////////////////////////////
const fizetes = document.querySelectorAll(".fizetes");
////
const inputrange = document.querySelector(".range");
const rangevalue = document.querySelector(".rangevalue");
const szűrésbutton = document.querySelector(".szűrésbutton");


rangevalue.innerHTML += inputrange.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "Ft";

inputrange.oninput = function () {

  rangevalue.innerHTML = this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "Ft";

};
function sortir(item, myContainer) {
  if (item.kategória === "Közgazdaság") {
    myContainer.innerHTML +=
      ` <div class="card mb-3" style="max-width: 540px; szűrés">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./img/Közgazdász.jpg" class="img-fluid rounded-start" alt="Közgazdaság">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${item.munka_megnevezese}</h5>
                    <p class="card-text fizetes">${item.fizetes}</p>
                    <p class="card-text">${item.leiras}</p>
                    <p<small class="text-body-secondary">${item.munkavegzes_helye}</small></p>
                </div>
                <button class=Submitbutton>Jelentkezek</button>
            </div>
        </div>
      </div>`;
  }
  if (item.kategória === "Informatika") {
    myContainer.innerHTML +=
      ` <div class="card mb-3" style="max-width: 540px; szűrés">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./img/Informatika.jpg" class="img-fluid rounded-start" alt="Informatika">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${item.munka_megnevezese}</h5>
                    <p class="card-text fizetes">${item.fizetes}</p>
                    <p class="card-text">${item.leiras}</p>
                    <p<small class="text-body-secondary">${item.munkavegzes_helye}</small></p>
                </div>
                <button class=Submitbutton>Jelentkezek</button>
            </div>
        </div>
      </div>`;
  }
  Jelentkezés();
}





const checkeboxok = document.querySelector(".telepulesnev")
const helyszin = document.querySelectorAll(".text-body-secondary");
tombhelyek = [];

const checkeboxokkateg = document.querySelector(".kategorianev")

tombkategoriak = [];

fetch("./munka.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Hiba a kérésben");
    }
    return response.json();
  })
  .then(datas => {


    datas.munkahirdetesek.forEach(item => {




      if (!tombhelyek.includes(item.munkavegzes_helye)) {
        tombhelyek.push(item.munkavegzes_helye);
        checkeboxok.innerHTML += `<input class="checkeboxhelyek" type="checkbox" value="${item.munkavegzes_helye}" checked><div>${item.munkavegzes_helye}</div>`;
      }
      if (!tombkategoriak.includes(item.kategória)) {
        tombkategoriak.push(item.kategória);
        checkeboxokkateg.innerHTML += `<input class="checkboxkategoria" type="checkbox" value="${item.kategória}" checked><div>${item.kategória}</div>`;
      }

    });




    console.log(datas);
    return datas;
  })
  .catch(error => console.log(error));
//////HElyszínszűrés///////////
szűrésbutton.addEventListener("click", () => {
  const myContainer = document.querySelector(".mycontainer");
  const checkeboxhelyek = document.querySelectorAll(".checkeboxhelyek");
  const checkboxkategoria = document.querySelectorAll(".checkboxkategoria");
  myContainer.innerHTML = "";
  fetch("./munka.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Hiba a kérésben");
      }
      return response.json();
    })
    .then(datas => {



      datas.munkahirdetesek.forEach(item => {

        var text = item.fizetes;
        var numbers = text.match(/\d+/g);
        var firstNumber = numbers ? parseInt(numbers[0]) : 0;

        // Ellenőrizd, hogy a szám megtalálható-e a stringben
        // Használd a value tulajdonságot


        if (inputrange.value <= firstNumber) {

          for (let i = 0; i < checkeboxhelyek.length; i++) {
            if (checkeboxhelyek[i].checked) {


              if (tombhelyek[i] === item.munkavegzes_helye) {
                for (let i = 0; i < checkboxkategoria.length; i++) {
                  if (checkboxkategoria[i].checked) {


                    if (tombkategoriak[i] === item.kategória) {
                      sortir(item, myContainer);

                    }


                  }

                }


              }


            }

          }

        }

      });




      return datas;
    })
    .catch(error => console.log(error));


});
function Jelentkezés(){
  setTimeout(() => {
    const cardTitles = document.querySelectorAll(".card-title");
    const places = document.querySelectorAll(".text-body-secondary");
  
    console.log("Ittvagyok");
  
    const submitbuttons = document.querySelectorAll(".Submitbutton");
    console.log(submitbuttons.length);
    console.log(cardTitles.length);
    console.log(places.length);
    submitbuttons.forEach((submitbutton, index) => {
      submitbutton.addEventListener("click", () => {
        fetch("./jelentkezés.php",{
          method:"POST",
          headers:{"Contetnt-Type":"application/json"},
          body: JSON.stringify({"cardTitle":cardTitles[index].textContent, "place":places[index].textContent})
        })
        .then(response=>{
          if(!response.ok)
          {
            throw new Error("Hiba a kérésben");
          }
          return response.json();
        })
        .then(datas=>{
          if(datas["errorCode"]===0)
          {
            const mess=document.querySelector(".Jelentkezésmessage").style.display="flex";
            const message=document.querySelector(".Jelentkezésmessage").innerHTML="Sikeres Jelentkezés";
            setTimeout(() => {
              const mess=document.querySelector(".Jelentkezésmessage").style.display="none";
            }, 2000);
          }
          else{
            const mess=document.querySelector(".Jelentkezésmessage").style.display="flex";
            const color=document.querySelector(".Jelentkezésmessage").style.color="red";
            const bgcolor=document.querySelector(".Jelentkezésmessage").style.backgroundColor="#ff6060";
            const message=document.querySelector(".Jelentkezésmessage").innerHTML="Sikeres Jelentkezés";
            setTimeout(() => {
              const mess=document.querySelector(".Jelentkezésmessage").style.display="none";
            }, 2000);
          }
        })
          
        
        console.log("Clicked on button");
        console.log("Card title:", cardTitles[index].textContent);
        console.log("Place:", places[index].textContent);
      });
    });
  }, 3000);
}
Jelentkezés();

/*document.addEventListener("DOMContentLoaded", function() {
  const submitbuttons = document.querySelectorAll(".Submitbutton");
  const cardTitles = document.querySelectorAll(".card-title");
  const places = document.querySelectorAll(".text-body-secondary");

  console.log("Ittvagyok");
  console.log(submitbuttons.length);

  submitbuttons.forEach((submitbutton, index) => {
      submitbutton.addEventListener("click", () => {
          console.log("Clicked on button");
          console.log("Card title:", cardTitles[index].textContent);
          console.log("Place:", places[index].textContent);
      });
  });
});
*/




