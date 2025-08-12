// Datos de ejemplo (luego pondremos tus recomendaciones reales)
const recomendaciones = {
    libros: [
        { titulo: "El Principito", fecha: "1943", autor: "Antoine de Saint-Exupéry", genero: "Fábula" },
        { titulo: "Cien años de soledad", fecha: "1967", autor: "Gabriel García Márquez", genero: "Realismo mágico" }
    ],
    peliculas: [
        { titulo: "Inception", fecha: "2010", autor: "Christopher Nolan", genero: "Ciencia ficción" },
        { titulo: "El Padrino", fecha: "1972", autor: "Francis Ford Coppola", genero: "Drama" }
    ],
    musica: [
        { titulo: "Bohemian Rhapsody", fecha: "1975", autor: "Queen", genero: "Rock" },
        { titulo: "God Is Weapon", fecha: "2025", autor: "Falling In Reverse, Marilyn Manson", genero: "Rock" }
    ]
};

// Renderiza tarjetas
function renderTarjetas(tipo) {
    const container = document.getElementById("cards-container");
    container.innerHTML = "";
    document.getElementById("section-title").textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    
    recomendaciones[tipo].forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${item.titulo}</h3>
            <p><b>Fecha:</b> ${item.fecha}</p>
            <p><b>Autor:</b> ${item.autor}</p>
            <p><b>Género:</b> ${item.genero}</p>
            <button>Ver más</button>
        `;
        container.appendChild(card);
    });
}

// Manejo del menú
function configurarMenu() {
    document.querySelectorAll(".menu-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            renderTarjetas(btn.dataset.section);
        });
    });
}

// Buscador
function configurarBuscador() {
    const buscador = document.getElementById("search");
    if (buscador) {
        buscador.addEventListener("input", function() {
            const filtro = this.value.toLowerCase();
            document.querySelectorAll(".card").forEach(card => {
                card.style.display = card.textContent.toLowerCase().includes(filtro) ? "block" : "none";
            });
        });
    }
}

// Inicialización
function inicializarPagina() {
    configurarMenu();
    configurarBuscador();
    renderTarjetas("libros"); // sección inicial
}

document.addEventListener("DOMContentLoaded", inicializarPagina);
