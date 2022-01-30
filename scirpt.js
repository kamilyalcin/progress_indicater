const circles = document.querySelectorAll('.circle');
const progressBar = document.querySelector('.progress-bar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 1;
updateBtn();
nextBtn.addEventListener('click', () => {
    index++;
    if(index > circles.length){
        index = circles.length;
    }
    updateBar();
    updateBtn();
});


prevBtn.addEventListener('click', () => {
    index--;
    if(index < 1){
        index = 1;
    }

    updateBar();
    updateBtn();
});

function updateBar () {
    circles.forEach((circle, idx) => {
        if(idx < index){
            circle.classList.add('active');
            progressBar.style.width = (100 / (circles.length - 1)) * (index - 1) + '%';
        } else if(idx >= index){
            circle.classList.remove('active');

        }
    })
}

function updateBtn () {
    if (index === 1) {
        prevBtn.style.backgroundColor = 'var(--pale-purple)';
    } else if (index > 1 && index < circles.length) {
        nextBtn.style.backgroundColor = 'var(--purple)';
        prevBtn.style.backgroundColor = 'var(--purple)';
    } else if (index === circles.length) {
        nextBtn.style.backgroundColor = 'var(--pale-purple)';

    }
}