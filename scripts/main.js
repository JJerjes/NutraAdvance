import { especialidadesData } from "./data.js";

async function loadComponent(id, path) {
  const element = document.getElementById(id);
  if (!element) return;

  try {
    const response = await fetch(path);
    if (!response.ok) throw Error("Error al cargar el archivo");
    
    const html = await response.text();
    element.innerHTML = html;

    if (path.includes('especialidades.html')) {
      return true;
    }
  } catch (error) {
    console.error("Error cargando el componente:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header-placeholder", "includes/header.html");
  loadComponent("main-placeholder", "includes/main.html");
  loadComponent("footer-placeholder", "includes/footer.html");
});

document.addEventListener('click', async (event) => {
  const target = event.target;
  const gineCard = target.closest('#ginecologia');

  if (gineCard) {
    await loadComponent('main-placeholder', 'includes/especialidades.html');
    setupEspecialidad('ginecologia');
  }

  const backBtn = target.closest('.back-btn');

  if (backBtn) {
    loadComponent('main-placeholder', 'includes/main.html');
  }
})

function setupEspecialidad(id) {
  const data = especialidadesData[id];
  if (!data) return;

  const titleEl = document.getElementById('specialty-title');
  if (titleEl) titleEl.innerText = data.titulo;

  const listContainer = document.getElementById('product-list');
  if (listContainer) {
    listContainer.innerHTML = data.productos.map(prod => `
        <button class="prod-btn" id="btn-${prod.id}" data-prod-id="${prod.id}">
          ${prod.nombre}
        </button>
      `).join('');
  }
}
