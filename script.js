const sign1 = document.getElementById("sign1");
const sign2 = document.getElementById("sign2");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");




sign1.addEventListener("click", () => {
    sign2.style.display = "block";
});

sign1.addEventListener("dblclick", () => {
    sign2.style.display = "none";
});

menu1.addEventListener("click", () => {
    menu2.style.display = "block";
});

menu1.addEventListener("dblclick", () => {
    menu2.style.display = "none";
});
