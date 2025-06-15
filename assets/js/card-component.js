function createFeatureIcon() {
  return `<svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
  </svg>`;
}

function createActivityCard(activity, index) {
  // For the first card, add object-top and object-center to the image
  const imageClass =
    index === 0
      ? 'w-full h-full object-cover object-top object-center'
      : 'w-full h-full object-cover';
  return `
    <article class="flex flex-col shadow-xl rounded-2xl overflow-hidden group transform duration-500 hover:-translate-y-1 hover:shadow-2xl transition-all ease-in-out bg-white h-full">
      <div class="relative aspect-w-16 aspect-h-9 bg-gray-100">
        <img class="${imageClass}" 
             src="${activity.image}" 
             alt="${activity.title}" 
             width="400" 
             height="225">
        <div class="absolute top-4 left-4 ${activity.badge === 'Popular' ? 'bg-blue-500' : 'bg-green-500'} text-white px-4 py-2 rounded-full text-xs font-semibold shadow">
          ${activity.badge}
        </div>
      </div>
      <div class="flex flex-col flex-grow p-5 md:p-8">
        <h3 class="text-2xl md:text-3xl font-extrabold text-gray-800 mb-1 leading-tight">${activity.title}</h3>
        <div class="text-blue-600 text-lg md:text-xl font-semibold mb-3">${activity.price}</div>
        <p class="text-gray-700 text-base md:text-lg mb-4">${activity.description}</p>
        <ul class="mb-4 space-y-2">
          ${activity.features.map(feature => `
            <li class="flex items-center text-gray-600 text-sm md:text-base">
              ${createFeatureIcon()}
              <span>${feature}</span>
            </li>
          `).join('')}
        </ul>
        <div class="mt-auto">
          <a href="https://booking.jskborneoreef.my/JSKBR/VisitDate.aspx?PageCode=ADDON" 
             class="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 text-lg">
            Book Now
          </a>
          <p class="mt-2 text-xs md:text-sm text-gray-500 leading-tight">
            ${activity.note}
          </p>
        </div>
      </div>
    </article>
  `;
}

function renderActivities() {
  const container = document.getElementById('activities-container');
  if (container) {
    container.innerHTML = activities.map((activity, idx) => createActivityCard(activity, idx)).join('');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderActivities); 
