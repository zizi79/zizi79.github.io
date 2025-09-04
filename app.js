let newtask = document.querySelector(".newtask");
let modalscreen = document.querySelector(".modal-screen");
let input = document.querySelector(".input");
let ok = document.querySelector(".ok");
let ex = document.querySelector(".ex");
let taskcontainer = document.querySelector(".task-container");


function newtask1() {
    modalscreen.classList.remove("hidden");
};

function ex1() {
    modalscreen.classList.add("hidden");
};

document.body.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modalscreen.classList.add("hidden");
    }
});

document.body.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        let userinput = input.value.trim();
    if (!userinput) return; // خالی بود، کاری نکن

    let article = document.createElement("article");
    article.className = "todo";

    let tododiv = document.createElement("div");
    tododiv.className = "todo-div"

    let title = document.createElement("p");
    title.className = "p";
    title.textContent = userinput;


    let removedivbtn = document.createElement("button");
    removedivbtn.classList.add("remove-btn");
    removedivbtn.textContent = "remove";

    taskcontainer.append(article);
    article.append(tododiv);

    tododiv.append(title);
    tododiv.append(removedivbtn);

    modalscreen.classList.add("hidden");
    input.value = "";

    removedivbtn.addEventListener("click", function (event) {
        let removedata = event.target.parentElement.parentElement;
        removedata.remove();
    });
    }
})


function todo() {
    let userinput = input.value.trim();
    if (!userinput) return; // خالی بود، کاری نکن

    let article = document.createElement("article");
    article.className = "todo";

    let tododiv = document.createElement("div");
    tododiv.className = "todo-div"

    let title = document.createElement("p");
    title.className = "p";
    title.textContent = userinput;


    let removedivbtn = document.createElement("button");
    removedivbtn.classList.add("remove-btn");
    removedivbtn.textContent = "remove";

    taskcontainer.append(article);
    article.append(tododiv);

    tododiv.append(title);
    tododiv.append(removedivbtn);

    modalscreen.classList.add("hidden");
    input.value = "";

    removedivbtn.addEventListener("click", function (event) {
        let removedata = event.target.parentElement.parentElement;
        removedata.remove();
    });

};


newtask.addEventListener("click", newtask1);
ex.addEventListener("click", ex1);
ok.addEventListener("click", todo);
