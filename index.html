function createFeatureIcon() {
  return `<svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
  </svg>`;
}

function createActivityCard(activity) {
  return `
    <article class="flex flex-col lg:flex-row shadow-xl rounded-2xl overflow-hidden group transform duration-500 hover:-translate-y-1 hover:shadow-2xl transition-all ease-in-out bg-white h-full">
      <div class="lg:w-1/2 relative h-48 md:h-56 lg:h-64">
        <img class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" 
             src="${activity.image}" 
             alt="${activity.title}" 
             width="400" 
             height="300">
        <div class="absolute top-4 left-4 ${activity.badge === 'Popular' ? 'bg-blue-500' : 'bg-green-500'} text-white px-4 py-2 rounded-full text-sm font-semibold">
          ${activity.badge}
        </div>
      </div>
      <div class="lg:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col flex-grow">
        <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">${activity.title}</h3>
        <p class="text-base md:text-lg text-gray-600 mb-2 leading-snug">
          <span class="text-gray-900 font-bold">from ${activity.price}</span>
        </p>
        <p class="text-sm md:text-base text-gray-600 mb-3 leading-relaxed">
          ${activity.description}
        </p>
        <div class="space-y-1.5 md:space-y-2 mb-3">
          ${activity.features.map(feature => `
            <div class="flex items-center text-gray-600">
              ${createFeatureIcon()}
              <span class="text-sm md:text-base leading-snug">${feature}</span>
            </div>
          `).join('')}
        </div>
        <div class="mt-auto">
          <a href="https://booking.jskborneoreef.my/JSKBR/VisitDate.aspx?PageCode=ADDON" 
             class="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 md:py-2.5 px-4 md:px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
            Book Now
          </a>
          <p class="mt-1.5 text-xs md:text-sm text-gray-500 leading-tight">
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
    container.innerHTML = activities.map(activity => createActivityCard(activity)).join('');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderActivities); 
