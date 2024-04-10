const loginButton = document.querySelector("#loginButton");
const registButton = document.querySelector("#registButton");
function resquestSend() {
    const userNameInput = document.querySelector("#userName");
    const userPasswordInput = document.querySelector("#userPassword");

    if (!userNameInput.value) {
        document.querySelector(".message").innerText="A mező kitöltése kötelező!";
        document.querySelector(".message").style.color="red";
        setTimeout(() => {
            document.querySelector(".message").innerText="";
        }, 2000);
        userNameInput.focus();
        return;
    }
    if (!userPasswordInput.value) {
        document.querySelector(".message").innerText="A mező kitöltése kötelező!";
        document.querySelector(".message").style.color="red";
        setTimeout(() => {
            document.querySelector(".message").innerText="";
        }, 2000);
        userPasswordInput.focus();
        return;
    }
    console.log(userNameInput.value, userPasswordInput.value)
    fetch("./login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            userName: userNameInput.value,
            password: userPasswordInput.value
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Hiba a kérésben!");
            }
            return response.json();
        })
        .then(datas => {
            
            
            if (datas["errorCode"] === 0) {

                document.querySelector(".message").innerText="Sikeres bejelentkezés!";
                document.querySelector(".message").style.color="green";
               
                setTimeout(event => {


                    location.href = "../loggedHome.html"

                }, 1000)




            } else {
               
                setTimeout(event => {

                    
                   
                    document.querySelector(".message").innerText = datas.errorMessage;

                    registButton.classList.remove("hidden");

                }, 500)
                
                
                setTimeout(() => {
                    
                    document.querySelector(".message").innerText = "";
                    userNameInput.value = null;
                    userPasswordInput.value = null;
                }, 2000);
            }
        })

}
loginButton.addEventListener("click", resquestSend);

registButton.addEventListener("click", function asd() {

    location.href = "./registration.html";
})