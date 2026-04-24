import { especialidadesData } from "./data.js";

async function loadComponent(id, path) {
  const element = document.getElementById(id);
  if (!element) return;

  try {
    const response = await fetch(path);
    if (!response.ok) throw Error("Error al cargar el archivo");
    
    const html = await response.text();
    element.innerHTML = html;
    return true;

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

  const prodBtn = target.closest('.prod-btn');
  if (prodBtn) {
  const prodId = prodBtn.dataset.prodId;
  const producto = especialidadesData.ginecologia.productos.find(p => p.id === prodId);
  
  if (producto) {
    await loadComponent('main-placeholder', 'includes/comparativa.html');
    renderComparison(producto);
  }
  }
  
  const backToList = target.closest('.back-to-list');

  if (backToList) {
    await loadComponent('main-placeholder', 'includes/especialidades.html');
    setupEspecialidad('ginecologia');
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

function renderComparison(producto) {
  document.getElementById('name-peru').innerHTML = producto.peru.nombreProd;
  document.getElementById('name-usa-1').innerHTML = producto.usa1.nombreProd;
  document.getElementById('name-usa-2').innerHTML = producto.usa2.nombreProd;

  document.getElementById('img-peru').src = producto.peru.foto;
  document.getElementById('img-usa-1').src = producto.usa1.foto;
  document.getElementById('img-usa-2').src = producto.usa2.foto;

  document.getElementById('ficha-peru').innerHTML = producto.peru.ficha;
  document.getElementById('ficha-usa-1').innerHTML = producto.usa1.ficha;
  document.getElementById('ficha-usa-2').innerHTML = producto.usa2.ficha;

  const updateTabContent = (key) => {
    document.getElementById('dyn-peru').innerHTML = producto.peru[key];
    document.getElementById('dyn-usa-1').innerHTML = producto.usa1[key];
    document.getElementById('dyn-usa-2').innerHTML = producto.usa2[key];
  };

  updateTabContent('beneficios');

  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const key = btn.getAttribute('data-content');
      updateTabContent(key);
    });
  });
}





