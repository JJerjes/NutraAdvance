async function loadComponent(id, path) {
  const element = document.getElementById(id);
  if (!element) return;

  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Error al cargar el archivo");
    const html = await response.text();
    element.innerHTML = html;
  } catch (error) {
    console.error("Error cargando el componente:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header-placeholder", "includes/header.html");
  loadComponent("main-pleaceholder", "includes/main.html");
  loadComponent("footer-placeholder", "includes/footer.html");
})