




const registButton = document.querySelector("button");
const userName = document.querySelector("#userName");
 //email cím ellenőrzés
 function emailvalidator(){
    const emailvalid=/^(.+)@[^@\s]+\.[^@\s]+$/;
    return emailvalid.test(email.value)
}
//Karakterbeírásra hiba színről alaphelyzetbe állítás
userName.addEventListener("keydown",()=>{
    
    const textfelhasználónév = document.querySelector("#textfelhasználónév");
    
    if (userName.value !== "") {
        textfelhasználónév.style.color = "black";
        

    }
    
    
})

const firstName = document.querySelector("#firstName");
firstName.addEventListener("keydown",()=>{
    
    const textvezetéknév = document.querySelector("#textvezetéknév");
    
    if (firstName.value !== "") {
        textvezetéknév.style.color = "black";


    }
   
    
})

const lastName = document.querySelector("#lastName");
lastName.addEventListener("keydown",()=>{
    
    const textkeresztnév = document.querySelector("#textkeresztnév");
    
    if (lastName.value !== "") {
        textkeresztnév.style.color = "black";


    }
    
})

const email = document.querySelector("#email");
email.addEventListener("keyup",()=>{
    
    const textemail = document.querySelector("#textemail");
    
    if (emailvalidator()) {
        textemail.style.color = "black";


    }
    
})

const password = document.querySelector("#password");
password.addEventListener("keydown",()=>{
    
    const textjelszó = document.querySelector("#textjelszó");
    
    if (password.value !== "") {
        textjelszó .style.color = "black";


    }
    
})

const password2 = document.querySelector("#password2");

password2.addEventListener("keydown",()=>{
    
    const textjelszó2 = document.querySelector("#textjelszó2");
    
    if (password2.value !== "") {
        textjelszó2 .style.color = "black";


    }
    
})
const registration = (event) => {

    const userName = document.querySelector("#userName");
    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const password2 = document.querySelector("#password2");

    const textfelhasználónév = document.querySelector("#textfelhasználónév");
    const textvezetéknév = document.querySelector("#textvezetéknév");
    const textkeresztnév = document.querySelector("#textkeresztnév");
    const textemail = document.querySelector("#textemail");
    const textjelszó = document.querySelector("#textjelszó");
    const textjelszó2 = document.querySelector("#textjelszó2");

    //Hiba esetén Szinezés
    if (userName.value === "") {
        textfelhasználónév.style.color = "red";


    }
    if (firstName.value === "") {
        textvezetéknév.style.color = "red";

    }
    if (lastName.value === "") {
        textkeresztnév.style.color = "red";

    }
    if (email.value === "") {
        textemail.style.color = "red";

    }
    if(!emailvalidator())
    {
        textemail.style.color = "red";
    }
    if (password.value === "") {
        textjelszó.style.color = "red";

    }
    if (password2.value === "") {
        textjelszó2.style.color = "red";

    }


    const ErrorMess=document.querySelector("#ErrorMess");

   
    
    //Focus és hibaüzenet
    
    if (userName.value === "") {
        ErrorMess.innerText=`"${textfelhasználónév.textContent}" mező kitöltése kötelező! `
        userName.focus();

    }
    else if (firstName.value === "") {
        ErrorMess.innerText=`"${textvezetéknév.textContent}" mező kitöltése kötelező! `
        firstName.focus();
    }
    else if (lastName.value === "") {
        ErrorMess.innerText=`"${textkeresztnév.textContent}" mező kitöltése kötelező! `
        lastName.focus();
    }
    else if (email.value === "") {
        ErrorMess.innerText=`"${textemail.textContent}"mező kitöltése kötelező! `
        email.focus();
        
    }
    

    else if(!emailvalidator())
    {
        ErrorMess.innerText="Érvénytelen Email cím!";
        email.focus();
        email.value="";
    }
    else if (password.value === "") {
        ErrorMess.innerText=`"${textjelszó.textContent}" mező kitöltése kötelező! `
        password.focus();
    }
    else if (password2.value === "") {
        ErrorMess.innerText=`"${textjelszó2.textContent}" mező kitöltése kötelező! `
        password2.focus();
    }
    else if(password.value!==password2.value)
    {
        textjelszó.style.color = "red";
        textjelszó2.style.color = "red";
        ErrorMess.innerText="Jelszó nem egyezik";
        password2.focus();
    }

    
     if (userName.value !== "" && firstName.value !== "" && lastName.value !== "" && email.value !== "" && password.value !== "" && password2.value !== "" ) {
        
        fetch("./regist.php",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userName: userName.value,
                    firstName: firstName.value,
                    lastName: lastName.value,
                    email: email.value,
                    password: password.value
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Hiba a kérésben")
                }
                return response.json();
            })
            .then(datas => {
                if (datas["errorCode"] === 0) {
                    ErrorMess.style.color="green";
                    ErrorMess.innerText="Sikeres Regisztráció";
                    setTimeout(() => {

                        location.href = "./login.html";
                    }, 2000);
                    
                }
                else if(datas["errorCode"] !== 0) {
                    ErrorMess.style.color="red";
                    ErrorMess.innerText = datas.errorMessage;
                }
            });

    }






}

registButton.addEventListener("click", registration);

