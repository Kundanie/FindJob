

const a = document.querySelector(".visszagomb");
a.addEventListener("click", () => {
    location.href = "./loggedHome.html";
});

fetch("./job.php")
    .then(response => {
        console.log(response);
        if (!response.ok) {
            throw new Error("Hiba a kérésben");
        }

        return response.json();
        
    })
    .then(datas => {
        
        console.log(datas);
        const container = document.querySelector(".cimsor");
        const munkak = datas.dataLine;
        munkak.forEach(item => {
            container.innerHTML+=`<div>${item.userName}</div><div>${item.jobTitle}</div><div>${item.category}</div><button class="visszamondasgomb">Visszamondás</button>`
        });

    })
    .catch(error => console.log(error));

const visszamondasgomb=document.querySelectorAll(".visszamondasgomb");

visszamondasgomb.forEach((submitbutton) => {
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
          console.log(datas["ErrorMessage"]);
        }
      })
        
      
      console.log("Clicked on button");
      console.log("Card title:", cardTitles[index].textContent);
      console.log("Place:", places[index].textContent);
    });
  });



