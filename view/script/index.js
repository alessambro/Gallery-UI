const iOne = document.getElementById("ione");
const iTwo = document.getElementById("itwo");
const iThree = document.getElementById("ithree");
const iFour = document.getElementById("ifour");

iTwo.addEventListener("mouseenter", () => {
    iOne.style.transform = "translateX(-11.5px)";
});

iTwo.addEventListener("mouseleave", () => {
    iOne.style.transform = "";
});
//--------------------------------------------------
iThree.addEventListener("mouseenter", function () {
    iOne.style.transform = "translateY(-11.5px)";
});

iThree.addEventListener("mouseleave", function () {
    iOne.style.transform = "";
});

iThree.addEventListener("mouseenter", () => {
    iTwo.style.transform = "translate(11.5px, -11.5px)"
});

iThree.addEventListener("mouseleave", () => {
    iTwo.style.transform = ""
});
//---------------------------------------------------
iFour.addEventListener("mouseenter", () => {
    iOne.style.transform = "translate(-11.5px,-11.5px)"
});

iFour.addEventListener("mouseleave", () => {
    iOne.style.transform = ""
});

iFour.addEventListener("mouseenter", () => {
    iTwo.style.transform = "translateY(-11.5px)"
});

iFour.addEventListener("mouseleave", () => {
    iTwo.style.transform = ""
});

iFour.addEventListener("mouseenter", () => {
    iThree.style.transform = "translateX(-11.5px)";
})

iFour.addEventListener("mouseleave", () => {
    iThree.style.transform = ""
});