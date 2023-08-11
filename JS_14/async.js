window.onload = function(){
    const planetsContainer = document.querySelector('.line');

    async function fetchPlanets(){
        try {
            const result = await fetch('https://swapi.dev/api/planets/');
            const data = await result.json();

// Створюємо картку планети:
        data.results.forEach(planet => {
            const planetCard = document.createElement('div');
            planetCard.classList.add('col', 'planet-card');
                
            planetCard.innerHTML = `
                <h3>${planet.name}</h3>
                <p>Rotation Period: ${planet.rotation_period}</p>
                <p>Orbital Period: ${planet.orbital_period}</p>
                <p>Diameter: ${planet.diameter}</p>
                <button class="films-button">Add films</button>
            `;
            
// Додаємо обробник подій на кнопку "Add films":
            const filmsButton = planetCard.querySelector('.films-button');
            filmsButton.onclick = async function() {
                const filmUrls = planet.films;
              
                for (const filmUrl of filmUrls) {
                    try {
                        const response = await fetch(filmUrl);
                        const filmData = await response.json();

                        planetCard.classList.add('film');
                            let filmsHTML = '';

                            filmsHTML += `
                            <h5>"${filmData.title}"</h5>
                            <p class='film'>Episode number: ${filmData.episode_id}</p>
                            <p class='film'>Release: ${filmData.release_date}</p>
                            `; 

                            planetCard.innerHTML += filmsHTML;
                    } catch (error) {
                    console.error('Error getting movie data:', error);
                    }                                    
                }
            };                                
                planetsContainer.appendChild(planetCard);
            });

        } catch (error) {
            console.error('Помилка при отриманні даних:', error);
        }
    }
        fetchPlanets();

// Обробник події для кнопки сортування:
    const sortButton = document.querySelector('#sortButton');
    const criteriaDropdown = document.querySelector('.dropdown-menu');
    const criteriaItems = criteriaDropdown.querySelectorAll('.dropdown-item');

        sortButton.onclick = function () {   
        criteriaDropdown.classList.toggle('show');
        };

        criteriaItems.forEach(item => {
            item.addEventListener('click', function(event) {
                const criteria = event.target.getAttribute('data-criteria');
                sortPlanets(criteria);
                criteriaDropdown.classList.remove('show');
            });
        });
        
        function sortPlanets(sortBy) {
            const planetCards = document.querySelectorAll('.planet-card');
            const planetCardArray = Array.from(planetCards);            
            const criteriaIndexes = {
                diameter: 2,
                orbital_period: 1
            };            

    console.log('Sorting by:', sortBy);
    console.log('planetCardArray before sorting:', planetCardArray);
        
            planetCardArray.sort((a, b) => {
                const aValue = a.querySelectorAll('p')[criteriaIndexes[sortBy]].textContent;
                const bValue = b.querySelectorAll('p')[criteriaIndexes[sortBy]].textContent;
                
                const aValueValue = parseInt(aValue.split(': ')[1]);
                const bValueValue = parseInt(bValue.split(': ')[1]);
                
                return aValueValue - bValueValue;
            });
    console.log('planetCardArray after sorting:', planetCardArray);

    // Замінюємо поточний порядок відображення карточок на відсортований:
            planetCards.forEach(planetCard => {
                planetCard.remove();
            });
        
            planetCardArray.forEach(planetCard => {
                planetsContainer.appendChild(planetCard);
            });
        }
   
// Обробник події для кнопки пошуку:
    const searchIcon = document.querySelector('#searchIcon');
    const searchInput = document.querySelector('#searchInput');
    const resetIcon = document.querySelector('#resetIcon');
    searchIcon.style.cursor = 'pointer';    
    resetIcon.style.cursor = 'pointer';

    searchIcon.onclick = function () {
        const searchKeyword = searchInput.value.toLowerCase();
        const planetCards = document.querySelectorAll('.planet-card');
  
        planetCards.forEach(function (serchName) {
        const taskElement = serchName.querySelector('h3');            
        const taskText = taskElement.textContent.toLowerCase();

        if (taskText.includes(searchKeyword)) {
            serchName.style.display = "block";
        } else {
            serchName.style.display = "none";
        }
        });
      };
      
    resetIcon.onclick = function () {
        searchInput.value = '';
        const planetCards = document.querySelectorAll('.planet-card');

        planetCards.forEach (function (backCards) {
            backCards.style.display = 'block';
        });
    };
};