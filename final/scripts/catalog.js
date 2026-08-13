export async function initCatalog() {
  const container = document.getElementById('services-container');
  const modal = document.getElementById('service-modal');
  const modalContent = document.getElementById('modal-body');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!container) return;

  let servicesData = [];

  try {
    const response = await fetch('./data/services.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    servicesData = data.technicalServices;
    
    localStorage.setItem('bbem_last_fetched', new Date().toISOString());

    displayServices(servicesData);
  } catch (error) {
    console.error('Failed to load services data:', error);
    container.innerHTML = `<p style="color: var(--primary-color); text-align: center;">Unable to load technical services at this time. Please try again later.</p>`;
  }

  function displayServices(items) {
    container.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <div class="card-img-wrapper">
          <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy">
        </div>
        <div class="card-body">
          <div class="card-icon">${item.icon}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="card-footer">
            <span class="price">${item.priceEstimate}</span>
            <button class="details-btn" data-id="${item.id}">View Details</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    document.querySelectorAll('.details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'));
        const service = servicesData.find(s => s.id === id);
        if (service) openModal(service);
      });
    });
  }

  function openModal(service) {
    modalContent.innerHTML = `
      <img src="${service.image}" alt="${service.title}" class="modal-img" loading="lazy">
      <div class="modal-body-content">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${service.icon}</div>
        <h2 style="color: var(--primary-color); margin-bottom: 0.5rem;">${service.title}</h2>
        <p style="margin-bottom: 0.5rem;"><strong>Category:</strong> ${service.category.toUpperCase()}</p>
        <p style="margin-bottom: 1rem;">${service.description}</p>
        <p><strong>Standard Rate / Estimate:</strong> <span style="color: var(--secondary-color);">${service.priceEstimate}</span></p>
      </div>
    `;
    modal.showModal();
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => modal.close());
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const filterValue = e.target.getAttribute('data-filter');
      if (filterValue === 'all') {
        displayServices(servicesData);
      } else {
        const filtered = servicesData.filter(s => s.category === filterValue);
        displayServices(filtered);
      }
    });
  });
}