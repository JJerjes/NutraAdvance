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

// Carga inicial de la estructura (Fundamental para que no se vea vacío)
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

// --- COPIAR AL FINAL DE MAIN.JS ---

// document.addEventListener('click', (event) => {
//     // Detectar clic en el botón de producto
//     const btn = event.target.closest('.prod-btn');
    
//     if (btn) {
//         const prodId = btn.dataset.prodId;
//         // Buscamos los datos en el objeto de ginecología
//         const producto = especialidadesData.ginecologia.productos.find(p => p.id === prodId);
        
//         if (producto) {
//             const container = document.getElementById('comparison-table-container');
//             container.classList.remove('hidden'); // Mostramos la tabla
            
//             // Inyectamos la estructura de 3 columnas
//             container.innerHTML = `
//                 <div class="comparison-grid" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 20px;">
//                     <div style="font-weight: bold; border-bottom: 2px solid blue;">${producto.peru.nombreProd}</div>
//                     <div style="font-weight: bold; border-bottom: 2px solid blue;">${producto.usa1.nombreProd}</div>
//                     <div style="font-weight: bold; border-bottom: 2px solid blue;">${producto.usa2.nombreProd}</div>
                    
//                     <div><img src="${producto.peru.foto}" width="80"></div>
//                     <div><img src="${producto.usa1.foto}" width="80"></div>
//                     <div><img src="${producto.usa2.foto}" width="80"></div>

//                     <div style="font-size: 0.9rem;">${producto.peru.beneficios}</div>
//                     <div style="font-size: 0.9rem;">${producto.usa1.beneficios}</div>
//                     <div style="font-size: 0.9rem;">${producto.usa2.beneficios}</div>
//                 </div>
//             `;
//         }
//     }
// });