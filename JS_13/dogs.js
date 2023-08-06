window.onload = function(){
    const dogsContainer = document.querySelector('.line');

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            for (const breed in data.message) {
                const dogCard = document.createElement('li');
                dogCard.classList.add('col');

                dogCard.textContent = breed;

                dogCard.onclick = function () {
                    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
                        .then(response => response.json())
                        .then(data => {
                            const dogImage = document.createElement('img');
                            dogImage.src = data.message;

// Обробник кліка на зображенні для його зміни:
                            dogImage.onclick = () => {
                            dogImage.remove();
                            };

                            dogCard.appendChild(dogImage);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                };
                dogsContainer.appendChild(dogCard);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
};