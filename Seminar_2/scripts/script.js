// // let a = prompt("Как тебя зовут?", "Имя");
// // alert(`Привет, ${a}`);

// let name = "Алевтина";

// function printf() {
//     let result = "Привет, " + name;
//     alert(result);
// }

// printf();

function getInput() 
{
    if (document.getElementById("myInput").value === "") {
        alert("Вы ничего не ввели");
    } else {
        alert("Спасибо за подписку, вы будете каждый день получать новые рецепты.");}
}

// let page = document.querySelector(".page");
// let button = document.querySelector(".theme_button");
// button.onclick = function () {
//     page.classList.toggle("light_theme");
//     page.classList.toggle("dark_theme");
// }