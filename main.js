const userNamesList=[]
const passwordsList=[]
const enteredUsername=document.querySelector(".userName-el")
const enteredPassword = document.querySelector(".password-el")
const SubmitBtn = document.querySelector(".submit-btn")
let isUserExist=false

SubmitBtn.addEventListener("click", ()=>
{
    event.preventDefault()
    checkingUserExist(userNamesList)
    if(enteredUsername.value!="" && enteredPassword.value!="" && isUserExist!=true)
    {
        userNamesList.push(enteredUsername.value)
        passwordsList.push(enteredPassword.value)
        console.log(userNamesList[0])
        console.log(passwordsList[0])
        document.querySelector(".error-msg").textContent="Done"
        storingData(userNamesList,passwordsList)
        enteredUsername.value=""
        enteredPassword.value=""
    }
    else if(isUserExist==true)
    {
        document.querySelector(".error-msg").textContent="Username in use"
    }
    else{
        document.querySelector(".error-msg").textContent="Enter the both fields."
    }
}
)
 
function checkingUserExist(username){
  for(let i=0 ; i<username.length ; i++){
    if (username[i]==enteredUsername.value){
        isUserExist=true
        console.log(username[i])
    }
    else{
        isUserExist=false
    }
}
}

function storingData(username,password){
    localStorage.setItem("USERNAMES",JSON.stringify(username))
    localStorage.setItem("PASSWORDS",JSON.stringify(password))
}