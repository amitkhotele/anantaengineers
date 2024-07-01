document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
