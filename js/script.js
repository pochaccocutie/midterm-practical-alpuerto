var navToggle = document.getElementById('nav-toggle');
var navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('is-open');
    });

    document.addEventListener('click', function(event) {
        var isClickInside = navMenu.contains(event.target) || navToggle.contains(event.target);
        if (!isClickInside && navMenu.classList.contains('is-open')) {
            navMenu.classList.remove('is-open');
        }
    });
}

var darkModeToggle = document.getElementById('dark-mode-toggle');

if (darkModeToggle) {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        darkModeToggle.textContent = '☀︎';
    }

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            darkModeToggle.textContent = '☀︎';
        } else {
            localStorage.setItem('theme', 'light');
            darkModeToggle.textContent = '⏾';
        }
    });
}

var servicesData = [
    { service: "Graphic Design", price: "Php 700-1500" },
    { service: "Digital Art", price: "Php 500-1500" }
];

var servicesBody = document.getElementById('services-body');

if (servicesBody) {
    var outputHTML = '';
    for (var i = 0; i < servicesData.length; i++) {
        outputHTML += '<tr>' +
            '<th scope="row">' + servicesData[i].service + '</th>' +
            '<td>' + servicesData[i].price + '</td>' +
            '</tr>';
    }
    servicesBody.innerHTML = outputHTML;
}

var contactForm = document.getElementById('contact-form');
var formFeedback = document.getElementById('form-feedback');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        var nameValue = document.getElementById('name').value;
        var emailValue = document.getElementById('email').value;
        var messageValue = document.getElementById('message').value;
        if (nameValue === '' || emailValue === '' || messageValue === '') {
            event.preventDefault(); 
            formFeedback.textContent = 'Please fill out all required fields before sending.';
            formFeedback.style.color = 'red';
        }   
        else {
            event.preventDefault(); 
            formFeedback.textContent = 'Thank you! Your message is succesfully sent.';
            formFeedback.style.color = 'green';
            contactForm.reset();
        }
    });
}
