var alertBox = document.querySelector('.alertBox')


function getPassword(){
    var chars= "12345678abcdefghijklamnopqrstuvzwyABCDEFGHIJKLMNOOQRSTUVXZ!@#$%¨&*^^"
    var passwordlength = 16;
    var password=""
    const myPasswords = []


    for(var i=0; i<passwordlength;i++){
        var randomNumber = Math.floor(Math.random()* chars.length)
        password+= chars.substring(randomNumber,randomNumber+1)
        myPasswords.push(password)

    }
    document.getElementById("password").value = password;
    alertBox.innerHTML="Senha Copiada com sucesso <br>" 
        
           var parseJson = JSON.parse(myPasswords)
          console.log(
              
          )
          
}

function copyPassword(){
    var copyPassTest = document.getElementById('password');
    copyPassTest.select();
    copyPassTest.setSelectionRange(0,9999);
    document.execCommand("copy")
    alertBox.classList.toggle('active');
    setTimeout(function(){
        alertBox.classList.toggle('active')
       
    },2000)
    document.getElementById("password").value =""
   
}