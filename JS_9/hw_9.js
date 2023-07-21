// 1) Створіть сторінку де є інпут і кнопка, в інпут вводите число (кількість ) натискаєте кнопку і генеруєте діви розміром 50 на 50 рх з різним кольором ( для генерації різного кольору треба використати Math.random та кольорову схему rgb або hsl)

document.getElementById('numberEl').addEventListener('input', function(e) {
    const cleaner = this.value.replace(/\s/g, '');
    this.value = cleaner.replace(/\D/g, '');
});    

function generateEl() {
        const numberEl = parseInt(document.getElementById('numberEl').value, 10);
        

        const Container = document.getElementById('Container');
        Container.innerHTML = '';

        for (let i = 0; i < numberEl; i++) {
            const div = document.createElement('div');
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.marginBottom = '10px';
            div.style.border = '1px solid black';
            div.style.backgroundColor = Random();
            Container.appendChild(div);
        }
    }

    function Random() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }