const items = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let active = 0;

let img = document.querySelector(".img");

let titolo = document.querySelector(".jumbo_img h2");
let p = document.querySelector(".jumbo_img p");
let effect = document.querySelector(".effect")
let b_b = document.querySelector(".b_b");


b_b.addEventListener("click", function () {
    console.log("click");
    if (active < items.length - 1) {


        active++
        console.log(active);
        img.setAttribute("src", items[active]);
        items.classList.add("effect");
        titolo.innerHTML = title[active];
        p.innerHTML = text[active];
    } else {
        (active > items.length - 4)


        active--
        console.log(active);
        img.setAttribute("src", items[active]);
    }
}

)



let b_t = document.querySelector(".b_t");
b_t.addEventListener("click", function () {

    console.log("click");
    if (active > 0) {


        active--
        console.log(active);
        img.setAttribute("src", items[active]);
        titolo.innerHTML = title[active]
    } /*else {
        (active < items.length - 1)


        active++
        console.log(active);
        img.setAttribute("src", items[active]);
    }*/
}

)



//let b_t= document

/*
-cliccare sui bottoni e far scorrere l'immagini
-fare apparire l'immagine scelta dalle frecce
*/



