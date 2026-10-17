console.log("El archivo externo funciona correctamente.");
document.addEventListener('DOMContentLoaded', () => {

    const botones = document.querySelectorAll('.btn-toggle');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
        
            const tarjeta = boton.closest('.tarjeta-info');
            const infoAdicional = tarjeta.querySelector('.info-adicional');

        
            if (infoAdicional.style.display === 'block' || infoAdicional.classList.contains('mostrar')) {
            
                infoAdicional.style.display = 'none';
                infoAdicional.classList.remove('mostrar');
                boton.textContent = 'Ver más';
            } else {
            
                infoAdicional.style.display = 'block';
                infoAdicional.classList.add('mostrar');
                boton.textContent = 'Ver menos';
            }
        });
    });
});
const boton = document.getElementById("botonCambiar");
const titulo = document.getElementById("titulo");


let contador = 0;


boton.addEventListener("click", function () {
    contador++;

    if (contador === 1) {
        titulo.textContent = "¡Bienvenidos!";
    } else if (contador === 2) {
        titulo.textContent = "¡Espero que disfruten mi página!";
    } else if (contador === 3) {
        titulo.textContent = "¡Gracias por visitarla!";
    }
});
const texto = document.getElementById("texto");
const disminuir = document.getElementById("disminuir");
const normal = document.getElementById("normal");
const aumentar = document.getElementById("aumentar");

let tamaño = 16;

aumentar.addEventListener("click", function () {
    if (tamaño < 30) {
        tamaño = tamaño + 2;
        texto.style.fontSize = tamaño + "px";
    }
});

disminuir.addEventListener("click", function () {
    if (tamaño > 10) {
        tamaño = tamaño - 2;
        texto.style.fontSize = tamaño + "px";
    }
});

normal.addEventListener("click", function () {
    tamaño = 16;
    texto.style.fontSize = tamaño + "px";
});
document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("volverArriba");

    if (boton) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                boton.style.display = "block";
            } else {
                boton.style.display = "none";
            }
        });

        boton.addEventListener("click", function () {
            window.scrollTo({ 
                top: 0, 
                behavior: "smooth" 
            });
        });
    }
});
const imagenes = [
  "https://images.trvl-media.com/place/6051970/deb68d07-4a4d-46d2-a88c-b2f42b33045f.jpg",
  "https://images.trvl-media.com/place/3312/cb7cdabf-d998-4e39-9742-99088681e3e7.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGgM305LEFxaNhgZNVDpQbR6aMLGjgC368RPO5kBw4f6-BmVAi9BjwwsVO&s=10",
  "https://media.ambito.com/p/c44b29e8c8418f786930ab6cca2b4814/adjuntos/239/imagenes/041/082/0041082363/1200x675/smart/paisaje-portugaljpg.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJTtzFvPFNaqD0fXUkPtXjR-vAya9Oi1yubyV1O-s59w&s=10",
  "https://blogdestinia.com/wp-content/uploads/2022/12/estambul-turquia-1024x686.jpg",
];


const imgElement = document.getElementById("carousel-img");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");


let indiceActual = 0;


function actualizarCarrusel() {
  imgElement.src = imagenes[indiceActual];
}


btnSiguiente.addEventListener("click", () => {
  indiceActual++;

  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }
  actualizarCarrusel();
});

btnAnterior.addEventListener("click", () => {
  indiceActual--;
  
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }
  actualizarCarrusel();
});


actualizarCarrusel();
document.querySelector('form').addEventListener('submit', function(event) {
    
    
    event.preventDefault();

    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    
    if (nombre === '' || email === '' || mensaje === '') {
        
        alert("Por favor, completá todos los campos.");
    } else {
        
        alert("¡Mensaje enviado correctamente!");
        
        
        this.reset(); 
    }
});
const btnTheme = document.getElementById('btn-theme');
const body = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  btnTheme.textContent = '☀️ Modo Claro';
}


btnTheme.addEventListener('click', () => {
  
  body.classList.toggle('dark');

  
  if (body.classList.contains('dark')) {
    btnTheme.textContent = '☀️ Modo Claro';
    localStorage.setItem('theme', 'dark');
  } else {
    btnTheme.textContent = '🌙 Modo Oscuro';
    localStorage.setItem('theme', 'light');
  }
});

