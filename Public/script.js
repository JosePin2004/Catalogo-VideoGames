//Datos de Prueba//

const videogames = [
    {
        id: 1,
        nombre: "Elden Ring",
        descripcion: "Acción · RPG · PC / PS5 / Xbox",
        rating: 4.3,
        imagen: "https://flowgames.gg/wp-content/uploads/2023/07/9edf816d-5625-45d2-9ef6-8b2ae65bb7eaCover_Elder-Ring.webp",
    },
    {
        id: 2,
        nombre: "God of War",
        descripcion: "Acción · Aventura · PS4 / PS5",
        rating: 4.8,
        imagen: "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-listing-thumb-01-ps4-us-12jun17?$facebook$",
    },
    {
        id: 3,
        nombre: "Zelda: TOTK",
        descripcion: "Aventura · Acción · Nintendo Switch",
        rating: 4.7,
        imagen: "https://androidgram.com/wp-content/uploads/2023/05/Zelda-Tears-of-the-Kingdom-ToTK-All-Towns-Settlements-List-with-coordinates-2.jpg",
    },
    {
        id: 4,
        nombre: "Fortnite",
        descripcion: "Battle Royale · Multijugador · PC / Consolas / Móvil",
        rating: 4.0,
        imagen: "https://www.actualidadgadget.com/wp-content/uploads/2025/11/Los-Simpson-llegaron-a-Fortnite.webp",
    },
     {
        id: 5,
        nombre: "Call of Duty: Warzone",
        descripcion: "Battle Royale · Multijugador · PC / Consolas / Móvil",
        rating: 4.0,
        imagen: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:376/h:211/q:75/https://bleedingcool.com/wp-content/uploads/2025/10/call-of-duty-warzone-2025-art.jpg",
    },
];

const grid = document.querySelector('#grid-videogames');

//funcion para pintar las cards//

function renderizarVideojuegos(lista) {
    grid.innerHTML = ''; // Limpiar el grid antes de renderizar

    lista.forEach((juego) => {

        //Crear el html de la card//
        const card = document.createElement('article');
        card.className = 'bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 flex flex-col';

        //Contenido de la card//
        card.innerHTML = `
        <img
          src="${juego.imagen}"
          alt="${juego.nombre}"
          class="h-40 w-full object-cover"
        />
        <div class="p-4 flex flex-col gap-2 flex-1">
        <h3 class="text-md font-semibold text-slate-900">${juego.nombre}</h3>
        <p class="text-sm text-slate-600 flex-1">${juego.descripcion}</p>
        <div class="mt-4 flex items-center justify-between ">
            <span class="text-yellow-500 font-semibold">⭐ ${juego.rating}</span>
            <button class="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm hover:bg-slate-800">Ver detalles</button>
        </div>
        </div>
        `;
          //Agregar la card al grid//
        grid.appendChild(card);
    });
    }

    renderizarVideojuegos(videogames);
 