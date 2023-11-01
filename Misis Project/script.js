//alert("Привет, я JS");

function guessGame()
{
    var guessNumber = 5;
    //alert(guessNumber);
    var ourNumber = prompt("Введи число:");

    if (guessNumber == ourNumber)
        return alert("Угадал");
    else if (guessNumber > ourNumber)
        {
                  alert("надо больше");
        return guessGame ();  
        }

    else 
        {
        alert("надо меньше");
        return guessGame (); 
        }

}

//guessGame();

/*Таймер на нахождение пользователя на странице*/


function timer()
{
    alert("Ты тут слишком долго");
    window.close();
}

//setTimeout(timer, 3000);

function validForm()
{
    var name = document.getElementById("name").value;
    var reg_name = /^[a-zа-яё]+$/i;
    
    var password = document.getElementById("name").value;
    var reg_password = /^[a-z0-9]{5,100}/i;
    
    if (reg_name.test(name) == false)
        {
        alert("Ошибка в ФИО");
        }
    
    if (reg_password.test(password) == false)
        {
        alert("Ошибка в паролe");
        }
        
}

document.querySelector(".button").addEventListener("click", validForm);