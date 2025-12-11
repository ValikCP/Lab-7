// Обработчик кнопки "Узнать больше"
document.getElementById('moreInfoBtn').addEventListener('click', function() {
    const additionalInfo = document.getElementById('additionalInfo');
    const buttonIcon = this.querySelector('i');
    
    additionalInfo.classList.toggle('active');
    
    if (additionalInfo.classList.contains('active')) {
        buttonIcon.className = 'fas fa-chevron-up';
        this.innerHTML = '<i class="fas fa-chevron-up"></i> Скрыть детали';
    } else {
        buttonIcon.className = 'fas fa-chevron-down';
        this.innerHTML = '<i class="fas fa-chevron-down"></i> Узнать больше о возможностях';
    }
});

// Обработчики навигационных кнопок
document.getElementById('aboutBtn').addEventListener('click', function() {
    document.getElementById('additionalInfo').scrollIntoView({ behavior: 'smooth' });
    
    // Если дополнительная информация скрыта, показываем её
    if (!document.getElementById('additionalInfo').classList.contains('active')) {
        document.getElementById('moreInfoBtn').click();
    }
});

document.getElementById('bookingBtn').addEventListener('click', function() {
    alert('Для бронирования туров в регион Юнгфрау звоните по телефону +41 (33) 828 72 33 или посетите официальный сайт www.jungfrau.ch');
});

// Добавляем эффект появления элементов при прокрутке
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Назначаем анимацию появления для секций
const sections = document.querySelectorAll('.hero-section, .intermediate-section, .gallery-section, .info-section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(section);
});

// Добавляем анимацию для элементов галереи
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`;
    observer.observe(item);
});