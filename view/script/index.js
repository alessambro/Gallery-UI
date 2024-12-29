const iOne = document.getElementById("ione");
const iTwo = document.getElementById("itwo");
const iThree = document.getElementById("ithree");
const iFour = document.getElementById("ifour");
const iFive = document.getElementById("ifive");
const cont = document.getElementById("container")

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

const myFunc = () => {
    if (iFive.classList.contains("show")) {
        iFive.classList.remove("show")
        iOne.classList.remove("hide");
        iTwo.classList.remove("hide");
        iThree.classList.remove("hide");
        iFour.classList.remove("hide");
        setTimeout(() => {
            iFive.classList.add("hide");
            iOne.classList.add("show");
            iTwo.classList.add("show");
            iThree.classList.add("show");
            iFour.classList.add("show");
        }, 100);
    } else {
        iFive.classList.remove("hide");
        iOne.classList.remove("show");
        iTwo.classList.remove("show");
        iThree.classList.remove("show");
        iFour.classList.remove("show");
        setTimeout(() => {
            iFive.classList.add("show");
            iOne.classList.add("hide");
            iTwo.classList.add("hide");
            iThree.classList.add("hide");
            iFour.classList.add("hide");
        }, 100);
    }
}

const oneTransform = () => {
    if (iOne.classList.contains("ione")) {
        iFive.style.backgroundImage = "url('../../assets/one.avif')";
    }

    myFunc()
}

const twoTransform = () => {
    iFive.style.backgroundImage = "url('../../assets/two.avif')";
    myFunc()
}

const threeTransform = () => {
    iFive.style.backgroundImage = "url('../../assets/three.avif')";
    myFunc()
}

const fourTransform = () => {
    iFive.style.backgroundImage = "url('../../assets/four.avif')";
    myFunc()
}   
