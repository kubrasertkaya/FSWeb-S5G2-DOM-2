import e from 'cors';
import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
document.querySelector("img").addEventListener("wheel", function (e) {
    e.preventDefault();
    e.target.src = "https://picsum.photos/1000/300";
    setTimeout(() => {
        e.target.src = "http://localhost:9000/img/fun-bus.jpg";
    }, 1000);
});

const someH1 = document.querySelector("h1");
function mouseHover(domElem) {
    domElem.addEventListener("mouseover", (e) => {
        e.target.style.transform = `scale(1.5)`;
    });
    domElem.addEventListener("mouseout", (e) => {
        e.target.style.transform = `scale(1)`;
    });

}
mouseHover(someH1);
const someButton = document.querySelector(".btn");
mouseHover(someButton);

const navs = document.querySelectorAll("nav a")
// for(const nav of navs){
// nav.addEventListener("mouseover",(e)=>{
//   e.target.style.animation="direction"}
// )
// nav.addEventListener("mouseleave",(e)=>{
//     e.target.style.animation=""}
// )
// };
for (let i in navs) {
    navs[i].addEventListener("mouseover", (e) => {
        navs[i].style.color = "pink"
    }
    )
    navs[i].addEventListener("mouseleave", (e) => {
        navs[i].style.color = "black"
    }
    )
};
const myDIV = document.createElement("div");
const parentElement = document.getElementsByClassName("content-pick");
parentElement.appendChild(myDIV);

function myFunction() {
    document.getElementById("myDIV").style.animation = "mynewmove 4s 2";
  }
myFunction(myDIV);