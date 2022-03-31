
const items = [
    './img/01.jpeg',
    './img/02.jpeg',
    './img/03.jpeg',
    './img/04.jpeg',
    './img/05.jpeg',
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


let index = 0;

const jumbo_image = document.querySelector(".img");
jumbo_image.setAttribute(`src`, items[index]);

let titolo = document.querySelector(".jumbo_img h2");
let p = document.querySelector(".jumbo_img p");



console.log(items);


//title.classList.toggle("change");
const giu = document.querySelector(".giu");

giu.addEventListener("click", () => {

    document.getElementsByClassName("small_img")[index].classList.remove("effect");

    if (index === items.length - 1) {
        index = 0;
        console.log(index);


    } else {
        index = index + 1;
        console.log(index);
    }
    jumbo_image.setAttribute(`src`, items[index]);
    titolo.innerHTML = title[index];
    p.innerHTML = text[index];
    // document.getElementsByClassName("items")[index].classList.add("effect");

    document.getElementsByClassName(`small_img`)[index].classList.add(`effect`);

});




const su = document.querySelector(".su")

su.addEventListener("click", () => {
    document.getElementsByClassName("small_img")[index].classList.remove("effect");

    if (index === 0) {
        index = items.length - 1;
        console.log(index);
        titolo.innerHTML = title[index];
        p.innerHTML = text[index];
    } else {
        index = index - 1;


    }
    titolo.innerHTML = title[index];
    p.innerHTML = text[index];

    jumbo_image.setAttribute(`src`, items[index]);
    document.getElementsByClassName("small_img")[index].classList.add("effect");
});




