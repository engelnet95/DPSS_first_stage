// DATOS DE LOS PLANETAS 
const planetas = {
    mercurio: {
        keys: ["mercurio","Mercurio"],
        nombre: "Mercurio",
        distancia: "0.39 UA / 57,900,000 Km",
        diametro: "4,880 Km",
        masa: "0.055 (Tierra = 1)",
        orbita: "88 dias aprox. ",
        rotacion: "58 días 15.5 horas",
        descubrimiento: "Antigüedad",
        composicion: "Núcleo de hierro, manto rocoso y corteza delgada.",
        imagenes: [
          {
          src: "Imagenes/mercury_3.png",
          descripcion:"Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar. No tiene atmósfera significativa y su superficie está cubierta de cráteres.",
          credito:"Esta imagen fue capturada por la nave espacial Messenger de la NASA el 6 de octubre de 2008, mostrándonos una aproximación del verdadero color de Mercurio tal como lo vería el ojo humano."
          },

          {
          src: "Imagenes/mercuriodot2.png",
          descripcion:"Delta II: un cohete potente y fiable que impulsó la exploración espacial durante décadas. Parte de la familia Delta, fue opción clave para misiones de la NASA, meteorología y los primeros satélites GPS de la USAF, destacando por una impresionante racha de 100 misiones exitosas consecutivas.",
          credito:"El 3 de agosto de 2004, el cohete Boeing Delta II transportó la nave espacial MESSENGER de la NASA, marcando el inicio de una misión destinada a estudiar Mercurio."
          },

           {
          src: "Imagenes/mercuriodot3.png",
          descripcion:"MESSENGER fue la primera nave espacial en orbitar Mercurio. Durante su misión, que concluyó en 2015 con un impacto planeado sobre la superficie del planeta, recolectó más de 277,000 imágenes y datos científicos cruciales sobre la composición y el entorno del planeta más cercano al Sol.",
          credito:"Esta imagen muestra a técnicos del Laboratorio de Física Aplicada de la Universidad Johns Hopkins cuando realizaban los preparativos finales de la nave espacial MESSENGER de la NASA antes de su lanzamiento hacia Mercurio en agosto de 2004"
          },

           {
          src: "Imagenes/mercuriodot4.png",
          descripcion:"El nombre MESSENGER es un acrónimo de MErcury Surface, Space ENvironment, GEochemistry, and Ranging. Además, hace honor al dios romano Mercurio, conocido como el mensajero de los dioses.",
          credito:"Emblema oficial o parche de la misión MESSENGER de la NASA."
          },

          {
          src:  "Imagenes/mercuriodot5.png",
          descripcion:"Después de cuatro años de estudio orbital, la nave se quedó sin combustible y se estrelló deliberadamente contra la superficie de Mercurio el 30 de abril de 2015, creando un nuevo cráter.",
          credito:"En esta ilustración artística se pueden apreciar componentes críticos para su supervivencia en un entorno extremo."
          },
         ]
    },

    venus: {
    keys: ["venus", "Venus"],
    nombre: "Venus",
    distancia: "0.72 UA / 108,200,000 Km",
    diametro: "12,104 Km",
    masa: "0.815 (Tierra = 1)",
    orbita: "225 días",
    rotacion: "243 días",
    descubrimiento: "Antigüedad",
    composicion: "Núcleo de hierro y níquel, atmósfera densa de CO₂.",
    imagenes: [
      {
      src:"Imagenes/Venus_1_NASA's Mariner 10 spacecraft.jpg",
      descripcion:"Venus es conocido como el planeta hermano de la Tierra debido a su tamaño similar, tiene una atmósfera densa compuesta principalmente de dióxido de carbono, lo que provoca un efecto invernadero extremo.",
      credito:"Mientras la nave espacial Mariner 10 de la NASA realizaba un sobrevuelo de alta velocidad el 5 de febrero de 1974 capturó esta vista aparentemente pacífica de un planeta del tamaño de la Tierra, envuelto en una densa capa de nubes global."
    },

    {
      src:"Imagenes/venusdot2.jpeg",
      descripcion:"Mariner 10 fue una misión histórica, ya que se convirtió en la primera nave en visitar dos planetas (Venus y Mercurio).",
      credito:"Este es un diagrama detallado de la sonda espacial Mariner 10, lanzada por la NASA el 3 de noviembre de 1973."
    },

    {
      src:"Imagenes/venusdot3.jpg",
      descripcion:"La misión Mariner 10 requirió más correcciones de curso que cualquier misión anterior y fue la primera nave espacial en utilizar la atracción gravitacional de un planeta para ayudarla a llegar a otro planeta.",
      credito:"Esta imagen muestra a la sonda espacial Mariner 10, representada en una ilustración digital creada por el JPL-Caltech para mostrar cómo lucen las naves en su entorno operativo.",
    },
    {
      src:"Imagenes/venusdot4.jpg",
      descripcion:"En la fotografía se puede apreciar el cohete elevándose sobre una densa nube de humo y fuego generada por la ignición de sus motores. A la derecha, se observa la torre de servicio metálica del complejo de lanzamiento, que proporcionaba acceso y soporte al cohete antes del despegue.",
      credito:"Esta imagen fue tomada en el Complejo de Lanzamiento 36B en Cabo Cañaveral en ella se observa el despegue del cohete Atlas-Centaur llevando consigo la sonda espacial no tripulada Mariner 10 de la NASA.",
    },

      {
      src:"Imagenes/venusdot5.png",
      descripcion:"En la fotografía se puede apreciar el cohete elevándose sobre una densa nube de humo y fuego generada por la ignición de sus motores. A la derecha, se observa la torre de servicio metálica del complejo de lanzamiento, que proporcionaba acceso y soporte al cohete antes del despegue.",
      credito:"Durante su misión de dos años, la nave transmitió más de 12,000 imágenes de Mercurio y Venus. La misión terminó en marzo de 1975. Mariner 10 todavía orbita alrededor del sol, aunque sus sistemas electrónicos probablemente hayan sido destruidos por la radiación sola."
    },
  ]
  },
  tierra: {
    keys: ["tierra", "Tierra"],
    nombre: "Tierra",
    distancia: "1.00 UA / 149,600,000 Km",
    diametro: "12,742 Km",
    masa: "1 (referencia)",
    orbita: "365.25 días",
    rotacion: "23.9 horas",
    descubrimiento: "Antigüedad",
    composicion: "Núcleo de hierro y níquel, corteza de silicatos y agua.",
    imagenes: [
      {
      src:"Imagenes/earth_2.webp",
      descripcion:"En la imagen se distingue claramente el continente de África, la Península Arábiga y el casquete polar sur de la Antártida",
      credito:"Esta icónica imagen de la Tierra, conocida mundialmente como La Canica Azul (The Blue Marble), fue capturada el 7 de diciembre de 1972 por la tripulación de la misión Apolo 17."
    },

    {
      src:"Imagenes/earthdot2.png",
      descripcion:"En la fotografía, nuestro planeta aparece como un minúsculo punto de luz (un solo píxel) suspendido en un haz de luz solar dispersada por la cámara de la sonda.",
      credito:"Esta imagen es la famosa fotografía titulada Un Punto Azul Pálido (Pale Blue Dot), fue tomada por la sonda espacial Voyager 1 de la NASA el 14 de febrero de 1990"
    },

    {
      src:"Imagenes/earthdot3.jpg",
      descripcion:"La imagen fue tomada mientras el Apolo 8 orbitaba la Luna, siendo la primera vez que seres humanos orbitaban nuestro satélite y veían la Tierra desde esta perspectiva.",
      credito:"Esta imagen es la icónica fotografía conocida como Earthrise (Amanecer de la Tierra). Fue capturada por el astronauta William Anders el 24 de diciembre de 1968, durante la misión Apolo 8 de la NASA.",
    },
    {
      src:"Imagenes/earthdot4.jpg",
      descripcion:"El astronauta estadounidense McCandless utilizó la Unidad de Maniobra Tripulada (MMU), una mochila propulsada por 24 chorros de nitrógeno que le permitía moverse libremente por el espacio sin estar conectado a la nave por cables de seguridad.",
      credito:"Esta impresionante imagen captura al astronauta de la NASA Bruce McCandless II durante la primera caminata espacial sin ataduras de la historia, el 7 de febrero de 1984.",
    },

      {
      src:"Imagenes/eathdot5.jpg",
      descripcion:"Este módulo cuenta con siete ventanas que ofrecen una vista panorámica de la Tierra y los cuerpos celestes. Su propósito principal es ayudar en las operaciones robóticas y de acoplamiento, además de servir como observatorio para la tripulación.",
      credito:"El 11 de Septiembre de 2010 la astronauta e ingeniera de vuelo de la 24º expedición de la NASA, Tracy Caldwell Dyson observa la Tierra a través de una ventana desde la cúpula de la Estación Espacial Internacional. La imagen fue un auto-retrato empleando la luz natural."
    },
     ]
  },
  marte: {
    keys: ["marte", "Marte"],
    nombre: "Marte",
    distancia: "1.52 UA / 227,900,000 Km",
    diametro: "6,779 Km",
    masa: "0.107 (Tierra = 1)",
    orbita: "687 días",
    rotacion: "24.6 horas",
    descubrimiento: "Antigüedad",
    composicion: "Núcleo de hierro, manto rocoso con hielo en los polos.",
    imagenes: [
      {
      src:"Imagenes/mars_1.png",
      descripcion:"El planeta Marte es conocido como el planeta rojo debido a su color característico causado por el óxido de hierro(Fe₂O₃) en su superficie.",
      credito:"Esta imagen fue capturada por el Telescopio Espacial Hubble de la NASA y la ESA el 28 de octubre de 2005, La imagen fue tomada cuando Marte estaba en su punto más cercano a la Tierra, esta proximidad permitió al Hubble capturar detalles de la superficie y la atmósfera con una claridad excepcional. "
    },

    {
      src:"Imagenes/venusdot2.jpeg",
      descripcion:"Mariner 10 fue una misión histórica, ya que se convirtió en la primera nave en visitar dos planetas (Venus y Mercurio).",
      credito:"Este es un diagrama detallado de la sonda espacial Mariner 10, lanzada por la NASA el 3 de noviembre de 1973."
    },

    {
      src:"Imagenes/venusdot3.jpg",
      descripcion:"La misión Mariner 10 requirió más correcciones de curso que cualquier misión anterior y fue la primera nave espacial en utilizar la atracción gravitacional de un planeta para ayudarla a llegar a otro planeta.",
      credito:"Esta imagen muestra a la sonda espacial Mariner 10, representada en una ilustración digital creada por el JPL-Caltech para mostrar cómo lucen las naves en su entorno operativo.",
    },
    {
      src:"Imagenes/venusdot4.jpg",
      descripcion:"En la fotografía se puede apreciar el cohete elevándose sobre una densa nube de humo y fuego generada por la ignición de sus motores. A la derecha, se observa la torre de servicio metálica del complejo de lanzamiento, que proporcionaba acceso y soporte al cohete antes del despegue.",
      credito:"Esta imagen fue tomada en el Complejo de Lanzamiento 36B en Cabo Cañaveral en ella se observa el despegue del cohete Atlas-Centaur llevando consigo la sonda espacial no tripulada Mariner 10 de la NASA.",
    },

      {
      src:"Imagenes/venusdot5.png",
      descripcion:"En la fotografía se puede apreciar el cohete elevándose sobre una densa nube de humo y fuego generada por la ignición de sus motores. A la derecha, se observa la torre de servicio metálica del complejo de lanzamiento, que proporcionaba acceso y soporte al cohete antes del despegue.",
      credito:"Durante su misión de dos años, la nave transmitió más de 12,000 imágenes de Mercurio y Venus. La misión terminó en marzo de 1975. Mariner 10 todavía orbita alrededor del sol, aunque sus sistemas electrónicos probablemente hayan sido destruidos por la radiación sola."
    },
  ]
  },
  jupiter: {
    keys: ["jupiter","Jupiter","júpiter","Júpiter","jupíter","Jupíter"],
    nombre: "Júpiter",
    distancia: "5.20 UA / 778,500,000 Km",
    diametro: "139,820 Km",
    masa: "317.8 (Tierra = 1)",
    orbita: "4,333 días (11.86 años)",
    rotacion: "9.93 horas",
    descubrimiento: "Antigüedad",
    composicion: "Hidrógeno/helio, hidrógeno metálico.",
    img: "Imagenes/jupiter_2.jpg",
    descripcionImg:"Es el planeta más grande del sistema solar, Júpiter es un gigante gaseoso con una atmósfera compuesta principalmente de hidrógeno y helio. Tiene una gran mancha roja, una tormenta gigante que ha estado activa durante siglos.",
     creditoimg:"Esta imagen fue captada por el Telescopio Espacial Hubble en 2006. El color rojo traza mantos de neblina a gran altitud en las regiones polares."
  },
  saturno: {
    keys: ["saturno","Saturno"],
    nombre: "Saturno",
    distancia: "9.58 UA / 1,430,000,000 Km",
    diametro: "116,460 Km",
    masa: "95.16 (Tierra = 1)",
    orbita: "10,759 días (29.46 años)",
    rotacion: "10.7 horas",
    descubrimiento: "Antigüedad",
    composicion: "Hidrógeno/helio, anillos de hielo y roca.",
    img: "Imagenes/saturn_1.png",
   descripcionImg:"Es el sexto planeta contando desde el Sol, famoso por sus impresionantes anillos compuestos de hielo y roca. Saturno es otro gigante gaseoso con numerosas lunas, siendo Titán la más grande.",
    creditoimg:"Esta es una fotografía compuesta de Saturno creada a partir de imágenes tomadas por la nave espacial Cassini de la NASA el 6 de octubre de 2004."
  },
  urano: {
    keys: ["urano","Urano"],
    nombre: "Urano",
    distancia: "19.22 UA / 2,870,000,000 Km",
    diametro: "50,724 Km",
    masa: "14.54 (Tierra = 1)",
    orbita: "30,687 días (84.01 años)",
    rotacion: "17.24 horas",
    descubrimiento: "13 Mar 1781 (William Herschel)",
    composicion: "Núcleo rocoso, manto de hielos, atmósfera H/He.",
    img: "Imagenes/Hubble_Uranus_3.jpg",
    descripcionImg:"Un gigante helado con una atmósfera compuesta principalmente de hidrógeno, helio y metano. Urano tiene un eje de rotación muy inclinado, lo que provoca estaciones extremas.",
     creditoimg:"El planeta Urano capturado por el telescopio espacial Hubble en 2006. La característica blanca es una nube de metano brillante y de gran altitud."
  },
  neptuno: {
    keys: ["neptuno","Neptuno"],
    nombre: "Neptuno",
    distancia: "30.05 UA / 4,500,000,000 Km",
    diametro: "49,244 Km",
    masa: "17.15 (Tierra = 1)",
    orbita: "60,190 días (164.8 años)",
    rotacion: "16.11 horas",
    descubrimiento: "23 Septiembre 1846 (Le Verrier & Galle)",
    composicion: "Núcleo rocoso, manto de hielos, atmósfera dinámica.",
    img: "Imagenes/neptune_341414.png",
    descripcionImg:"El planeta más lejano del Sol, Neptuno es otro gigante helado conocido por sus fuertes vientos y tormentas. Tiene una luna llamada Tritón, que es geológicamente activa.",
     creditoimg:"Esta imagen se produjo a partir de fotografías tomadas por la nave espacial Voyager 2 de la NASA en el verano de 1989."
  }
};

/*ELEMENTOS DEL DOM */
const btn = document.getElementById('search-btn');
const input = document.getElementById('search-input');
const feedback = document.getElementById('search-feedback');
const panel = document.getElementById('planet-info');
const modal = document.getElementById("imagenModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementsByClassName("close")[0];
const planetImg = document.getElementById("planetImage");
const creditimg = document.getElementById("creditoimagen");
const downloadBtn = document.querySelector(".download-btn");

let galeriaActual = [];
let indiceImagen = 0;
let autoplayInterval = null;
let autoplayDelay = 15500; // 15.5 segundos
let startX = 0;
let endX = 0;


/*EJECUTA LA ACCION DANDO CLICK O ENTER */
btn.addEventListener('click', ejecutarBusqueda);
input.addEventListener('keyup',(e) =>{
    if (e.key === 'Enter') ejecutarBusqueda();
});

/*FUNCION PARA BUSCAR EL PLANETA EN LAS PALABRAS CLAVE*/
function buscarPlanetaPorTexto(texto){
    const t = texto.trim().toLowerCase();
    if (!t) return null;
    for (const key of Object.keys(planetas)) {
        const p = planetas[key];
        /*REVISA EN MINUSCULA */
        if (p.keys.some(k => k.toLowerCase() === t)) return p;
    }
    return null;
}
/**FUNCION PARA EJECUTAR LA BUSQUEDA */
function ejecutarBusqueda(){
    const valor = input.value;
    const encontrado = buscarPlanetaPorTexto(valor);
    
    if (!encontrado) {
        /*APARECE MENSAJE Y LIMPIA EL INPUT  */
        feedback.textContent = 'Ingresa una opción válida de la lista superior.';
        input.value = '';        panel.classList.remove('show');
        panel.setAttribute('aria-hidden','true');
        panel.removeAttribute("arian-hidden","false");
        return;
      }
      
      /*RELLENA LA TABLA */

    document.getElementById('p-nombre').textContent =encontrado.nombre;
    document.getElementById('p-distancia').textContent = encontrado.distancia;
    document.getElementById('p-diametro').textContent = encontrado.diametro;
    document.getElementById('p-masa').textContent = encontrado.masa;
    document.getElementById('p-orbita').textContent = encontrado.orbita;
    document.getElementById('p-rotacion').textContent = encontrado.rotacion;
    document.getElementById('p-descubrimiento').textContent = encontrado.descubrimiento;
    document.getElementById('p-composicion').textContent = encontrado.composicion;
    document.getElementById('planetImageDesc').textContent = encontrado.descripcionImg;
    creditimg.textContent = encontrado.creditoimg;

    /*ESTO DESPLIEGA LA IMAGEN DEL PLANETA (ESTE BLOQE FUE CAMBIADO POR EL DE ABAJO)*/
    /**const imgEL = document.getElementById('planetImage');
    imgEL.src = encontrado.img || '';
    imgEL.alt = 'imagen de ' + encontrado.nombre; */

    const imgEL = document.getElementById('planetImage');
    if (encontrado.imagenes && encontrado.imagenes.length >1) {
      cargarGaleria(encontrado.imagenes);
    } else {
      detenerAutoplay();
      galeriaActual = null;
      imgEL.src = encontrado.img || (encontrado.imagenes ? encontrado.imagenes[0] :  '');
      imgEL.alt = 'imagen de' + encontrado.nombre;
      document.getElementById("galleryDots").style.display = "none";
    }
    
    /*DESPLIEGA UN FEEDBACK */
    feedback.textContent = '';
    panel.classList.add('show');
    panel.setAttribute('aria-hidden','false');

    /*DEJA EL INPUT VACIO*/

    input.value = '';
  }

  /**ESTA FUNCION CARGA LA GALERIA PEQUEÑA DE IMAGENES* */
  function cargarGaleria(imagenes) {
        galeriaActual = imagenes;
        indiceImagen = 0;

        const dots = document.getElementById("galleryDots");
        dots.innerHTML = "";

        if(imagenes.length <= 1) {
          dots.style.display = "none";
        } else {
          dots.style.display = "block";
          imagenes.forEach((_, i) => {
            const dot = document.createElement("span");
            dot.onclick = () =>{
               cambiarImagen(i);
               /**detenerAutoplay(); USAR ESTO PARA QUE LAS IMAGENES SE DETENGAN AL HACER CLICK */
            };
            if (i==0) dot.classList.add("active");
            dots.appendChild(dot);
          });
        }
        planetImg.src = imagenes[0];
        iniciarAutoplay(); 
    }
  /**ESTA FUNCION FUE CAMBIADA POR EL BLOQUE DE ABAJO */
 /** function cambiarImagen(index) {
    indiceImagen = index;
    planetImg.src = galeriaActual[index];

    document.querySelectorAll(".gallery-dots span")
    .forEach(dot =>dot.classList.remove("active"));
    document.querySelectorAll(".gallery-dots span")[index]
    .classList.add("active");}
    **/

    function cambiarImagen(index) {
      if (!galeriaActual.length) return;

      planetImg.classList.add("fade");

      setTimeout(( )=> {
        indiceImagen = index;
        planetImg.src = galeriaActual[indiceImagen];

        document.querySelectorAll(".gallery-dots span")
        .forEach(dot =>dot.classList.remove("active"));

        if (document.querySelectorAll(".gallery-dots span") [index]) {
          document.querySelectorAll(".gallery-dots span")[index]
          .classList.add("active");

        }
        planetImg.classList.remove("fade");
      },300);

    }

    function iniciarAutoplay() {
      detenerAutoplay();
      
      if (galeriaActual.length <=1) return;

      autoplayInterval = setInterval(() => {
        let next = indiceImagen + 1;
        if (next >= galeriaActual.length) next = 0;
        cambiarImagen(next);
      }, autoplayDelay);
    }

    function detenerAutoplay(){
      if (autoplayInterval){
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }



  
/*MODAL ESTO DESPLIEGA UNA IMAGEN GRANDE AL HACER CLICK EN LA IMAGEN PEQUEÑA */
  planetImg.onclick = function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
    downloadBtn.href = this.src;
  };


  /*ESTO CIERRA CON UNA X */
  closeBtn.onclick = function(){
    modal.style.display = "none";
  };

  /*ESTO CIERRA EL MODAL HACIENDO CLICK AFUERA */
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
/**ESTO CIERRA EL MODAL CON LA TECLA ESC */
  document.addEventListener("keydown", function(event){
    if (event.key == "Escape") {
      modal.style.display = "none";

    }
  });

/**ESTO ES EL SWIPE EN MOVIL */
planetImg.addEventListener("touchstart", e =>{
  startX = e.touches[0].clientX;
});

planetImg.addEventListener("touchend" , e =>{
  endX = e.changedTouches[0].clientX;
  manejarSwipe ();

});

function manejarSwipe() {
  if (!galeriaActual || galeriaActual.length <=1) return;
  
  const diff = startX - endX;
  if (Math.abs(diff) < 50) return;
  
  detenerAutoplay();

  if (diff > 0) {
    let next = indiceImagen + 1;
    if (next >= galeriaActual.length) next = 0;
    cambiarImagen(next);
  } else {
    let prev = indiceImagen - 1;
    if (prev < 0) prev = galeriaActual.length -1;
    cambiarImagen(prev);
  }

}
/**DROPDOWN DE LA BARRA DE NAVEGACION */
document.querySelectorAll(".dropdown li").forEach(item =>{
  item.addEventListener("click", ()=>{
    const planeta = item.dataset.planeta;

    input.value = planeta;
    ejecutarBusqueda();
  });
});



document.getElementById('year').textContent = new Date().getFullYear();






