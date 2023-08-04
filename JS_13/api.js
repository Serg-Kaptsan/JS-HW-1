window.onload = function(){

    fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => {
            const planetsContainer = document.querySelector('.line');

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

                // Добавляем обработчик события на кнопку "Фильмы"
                const filmsButton = planetCard.querySelector('.films-button');
                filmsButton.onclick = function() {
                    // Получаем ссылки на фильмы из данных планеты
                    const filmUrls = planet.films;
                
                    // Выполняем запросы для каждого фильма и выводим информацию в консоль
                    filmUrls.forEach(filmUrl => {
                        fetch(filmUrl)
                            .then(response => response.json())
                            .then(filmData => {
                                console.log('Фильм:', filmData.title);
                                console.log('Эпизод:', filmData.episode_id);
                                console.log('Год выпуска:', filmData.release_date);
                                console.log('--------------');
                            })
                            .catch(error => {
                                console.error('Ошибка при получении данных о фильме:', error);
                            });
                    });
                };

                planetsContainer.appendChild(planetCard);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
// Обработчик события при клике на кнопку сортировки
    // const sortButton = document.querySelector('.sort');
    // sortButton.onclick function() {
    //     // Здесь будет код для сортировки и перерисовки планет
    // };

// Обработчик события при изменении текста в поле поиска
//     const searchInput = document.querySelector('#searchInput');
//     searchInput.addEventListener('input', () => {
// // Здесь будет код для фильтрации и перерисовки планет
//     });
}

