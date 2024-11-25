console.dir(document.all[8]);
document.all[8].innerText = "Peter parker";

//1. Selecting elements by Id
let imgObj = document.getElementById("mainImg"); //this is an image object.
console.dir(imgObj);
console.log(imgObj.src)
console.log(imgObj.tagName)
console.log(imgObj.id)
// imgObj.src = '../JS-part9/assets/creation_1.png';

console.dir(document.getElementById("description"));

//2. Selecting elements by className
console.dir(document.getElementsByClassName("oldImg"));
console.log(document.getElementsByClassName("oldImg")[0]);
let smallimg = document.getElementsByClassName("oldImg");

for(let i=0; i<smallimg.length; i++) {
    console.dir(smallimg[i]);
    console.dir(smallimg[i].src);
    smallimg[i].src =  '../JS-part9/assets/creation_1.png';
    console.log(`value of image no is ${i} is changed.`)
}


//3. Selecting elements by tagName
console.log(document.getElementsByTagName("p"));
// document.getElementsByTagName("p")[1].innerText = "abc";

//4. Query selectors
console.dir(document.querySelector("h1")); //selects first h1 element
console.dir(document.querySelector("#description")); //selects first p element
console.dir(document.querySelector(".oldImg")); //selects first img element
console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));


//5. Setting content in objects
let para = document.querySelector("p");
console.log(para.innerHTML);
console.log(para.innerText);
console.log(para.textContent);
para.innerText = "Hi, I am Peter Parker."
// document.all[8].innerHTML = "<u>Spider Man</u>";

let heading = document.querySelector("h1");
console.log(heading)
// heading.innerHTML = `<u>${heading.innerText}</u>`


//6. Manipulating Attributes
let img = document.querySelector("img");
console.log(img.getAttribute("id"));
img.setAttribute('id', 'spidermanImg');
img.setAttribute('src', '../JS-part9/assets/creation_3.jpeg')
img.setAttribute('width', '200px');
console.log(img.getAttribute('class'));

//7. Manipulating style with style attribute
console.dir(img.style);
// heading.style.color = "red";

let links = document.querySelectorAll(".box a");
for(link of links) {
    link.style.color="purple";
}
/* for(let i=0; i < links.length; i++) {
    links[i].style.color ="green";
} */


//8. Manipulating style with classList property
img = document.querySelector('img');
console.log(img.classList);
img.classList.add("wdv");
img.classList.remove("wdv");
console.log(img.classList.contains("wdv"))
console.log(img.classList.toggle("underline")); //to add or remove classes
console.log(img.classList);

heading = document.querySelector("h1");
heading.classList.add("green");

//9. Navigation on page: 
let h4 = document.querySelector("h4");
console.log(h4.parentElement)
console.log(h4.children)

let box = document.querySelector(".box");
console.log(box.children);
console.log(box.childElementCount)

let ul = document.querySelector("ul");
console.log(ul.children)
console.log(ul.children[0])
console.log(ul.children[1])
console.log(ul.children[2].previousElementSibling)

img = document.querySelector('img');
console.log(img.previousElementSibling)
img.previousElementSibling.style
img.previousElementSibling.style.color = "green";

//10. Adding new elements on page: 
    document.createElement("p")
    let newP = document.createElement("p")
    console.dir(newP)
    newP.innerText = "Hi, I am a new P."
    console.dir(newP);

    let body = document.querySelector("body");
    body.appendChild(newP)
    box.appendChild(newP)

    let btn = document.createElement("button");
    console.dir(btn);
    btn.innerText = "click me!";
    box.appendChild(btn);

    newP.append("this is  a new paragraph."); //added text to exising paragraph.
    newP.prepend(btn);

    //insertAdjacentElement(where, element)
    let p = document.querySelector('p')
    p.insertAdjacentElement('beforebegin', btn);
    p.insertAdjacentElement('afterbegin', btn);

    //removeChild and remove elements
    p.remove();
    btn.remove();