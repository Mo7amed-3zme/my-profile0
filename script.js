AOS.init({
    duration: 1100,
    once: false,
    mirror: true 
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height = Math.random() * 10 + 5 + 'px';

    document.querySelector('.snowfall').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 3000); 
}

setInterval(createSnowflake, 100);
