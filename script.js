document.querySelector(".back-this-project-btn").addEventListener("click", () => {
    document.querySelector("body").classList.add("active-modal-default");
})
document.querySelector(".close-modal").addEventListener("click", () => {
    document.querySelector("body").classList.remove("active-modal-default");
    document.querySelectorAll(".modal-box").forEach(box => {
        if (box.classList.contains("active-enter-pledge")) {
            box.classList.remove("active-enter-pledge");
        }
        if (box.classList.contains("active-radio")) {
            box.classList.remove("active-radio");
        }
    })
})

document.querySelectorAll(".circle").forEach(circle => {
    circle.addEventListener("click", () => {
        document.querySelectorAll(".modal-box").forEach(box => {
            if (box.classList.contains("active-enter-pledge")) {
                box.classList.remove("active-enter-pledge");
            }
            if (box.classList.contains("active-radio")) {
                box.classList.remove("active-radio");
            }
        })
        document.querySelectorAll(".wrapper-enter-pledge").forEach(box => {
            if (box.classList.contains("active-enter-pledge")) {
                box.classList.remove("active-enter-pledge");
            }
            if (box.classList.contains("active-radio")) {
                box.classList.remove("active-radio");
            }
        })
        circle.parentNode.parentNode.classList.add("active-radio");
        circle.parentNode.parentNode.classList.add("active-enter-pledge");
    })
})
document.querySelectorAll(".continue-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("body").classList.add("active-modal-complete");
        changeMoney();
        fillRange();
    })
})
document.querySelector(".got-it-btn").addEventListener("click", () => {
    document.querySelector("body").classList.remove("active-modal-complete");
    document.querySelectorAll(".modal-box").forEach(box => {
        if (box.classList.contains("active-enter-pledge")) {
            box.classList.remove("active-enter-pledge");
        }
        if (box.classList.contains("active-radio")) {
            box.classList.remove("active-radio");
        }
    })
    document.querySelector("body").classList.remove("active-modal-default");

    let totalBackers = document.querySelector(".total-backers h1").innerHTML;
    totalBackers = Number(totalBackers.replace(/\,/g, ''));
    totalBackers++;
    document.querySelector(".total-backers h1").innerHTML = numberWithCommas(totalBackers);
})
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
document.querySelectorAll(".select-reward-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("body").classList.add("active-modal-default");
        document.querySelectorAll(".wrapper-enter-pledge").forEach(box => {
            if (box.classList.contains("active-enter-pledge")) {
                box.classList.remove("active-enter-pledge");
            }
            if (box.classList.contains("active-radio")) {
                box.classList.remove("active-radio");
            }
        })
        if (btn.classList.contains("pledge-25")) {
            document.querySelector(".wrapper-enter-pledge-25").parentNode.classList.add("active-enter-pledge");
            document.querySelector(".wrapper-enter-pledge-25").parentNode.classList.add("active-radio");
        } else if (btn.classList.contains("pledge-75")) {
            document.querySelector(".wrapper-enter-pledge-75").parentNode.classList.add("active-enter-pledge");
            document.querySelector(".wrapper-enter-pledge-75").parentNode.classList.add("active-radio");
        }

    })
})
document.querySelector(".bookmark").addEventListener("click", () => {
    let paragraf = document.querySelector(".bookmark p");
    if (paragraf.innerHTML === "Bookmark") {
        paragraf.innerHTML = "Bookmarked";
        paragraf.style.color = "#147A73";
        // document.querySelector(".svg circle").fill = "#147A73";
        document.querySelector(".svg").classList.add("bookmarked");
        // paragraf.parentNode.classList.add("bookmarked");
    } else if (paragraf.innerHTML === "Bookmarked") {
        paragraf.innerHTML = "Bookmark";
        paragraf.style.color = "#7A7A7A";
        document.querySelector(".svg").classList.remove("bookmarked");
    }

})
function fillRange() {
    let num = document.querySelector(".backed span").innerHTML;
    num = Number(num.replace(/\,/g, ''));
    document.querySelector(".fill-range").style.width = `${(num / 100000) * 100}%`;
}
fillRange();

function changeMoney() {
    let box2 = document.querySelector(".modal-box-2");
    let box3 = document.querySelector(".modal-box-3");

    if (box2.classList.contains("active-radio")) {
        let pledge = document.querySelector(".modal-box-2 input").value;
        let num = document.querySelector(".backed span").innerHTML;
        num = Number(num.replace(/\,/g, ''));
        num = num + Number(pledge);
        num = numberWithCommas(num);
        document.querySelector(".backed span").innerHTML = num;
    } else if (box3.classList.contains("active-radio")) {
        let pledge = document.querySelector(".modal-box-3 input").value;
        let num = document.querySelector(".backed span").innerHTML;
        num = Number(num.replace(/\,/g, ''));
        num = num + Number(pledge);
        num = numberWithCommas(num);
        document.querySelector(".backed span").innerHTML = num;
    }
}
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector("body").classList.add("active-modal-menu");
    document.querySelector("body").classList.add("disable-logo-hamb");
})
document.querySelector(".close-menu").addEventListener("click", () => {
    document.querySelector("body").classList.remove("active-modal-menu");
    document.querySelector("body").classList.remove("disable-logo-hamb");
})