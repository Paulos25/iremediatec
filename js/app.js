async function loadCards(path, targetId) {
  const target = document.getElementById(targetId);
  const res = await fetch(path);
  const items = await res.json();
  target.innerHTML = items.map(item => `
    <article class="card">
      <img src="${item.image}" alt="${item.title}">
      <div class="card-body">
        <h3>${item.title}</h3>
        <p class="subtitle">${item.subtitle}</p>
        <p class="desc">${item.desc}</p>
      </div>
    </article>
  `).join("");
}
loadCards("data/products.json", "productList");
loadCards("data/projects.json", "projectList");


async function loadClients(path, targetId) {
  const target = document.getElementById(targetId);
  const res = await fetch(path);
  const items = await res.json();
  target.innerHTML = items.map(item => `
    <article class="client-card">
      <img src="${item.image}" alt="${item.name}">
    </article>
  `).join("");
}
loadClients("data/clients.json", "clientList");
