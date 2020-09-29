const gridContainer = document.getElementById('gridcontainer')
const resetBtn = document.getElementById('resetBtn');

createSquares(50);

resetBtn.addEventListener('click', function() {
    const howMany = prompt('How many squares per side?');
    gridContainer.innerHTML = '';
    createSquares(howMany);
});

function createSquares(squares) {
    gridContainer.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
    
    for (let i = 0; i < squares * squares; i++)
    {
    const newDiv = document.createElement('div');
    newDiv.style.borderRadius = 'px';
    gridContainer.appendChild(newDiv);
    
    let colorChange = document.querySelectorAll('newDiv');
    newDiv.addEventListener('mouseover', function() {
        newDiv.style.backgroundColor = randomColor();
    })
    }
}

function randomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
