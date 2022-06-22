let main =document.querySelector("main");
console.log(main);
let h2 =document.querySelector("h2");
console.log(h2);
let a =document.querySelector("a");
console.log(a);
let p =document.querySelectorAll("p");
console.log(p);

let input=window.prompt("Ingrese su nombre");
if(!input){
    h2.innerText += "Invitado"
} else {h2.innerText+=input};
console.log(h2);
h2.style.textTransform="uppercase";
a.style.color="#E51B3E";
let body=document.querySelector("body");
if(window.confirm("¿Desea colocar un fondo de pantalla?")){body.classList.add("fondo")};

for(i=0;i<p.length;i++){
    if (i%2==0) {p[i].classList.add("descatadoPar")} else {{p[i].classList.add("descatadoImpar")}
}}
main.style.display="block";