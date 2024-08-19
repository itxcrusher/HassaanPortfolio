(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "XZB7nrR299U0EOFrp",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // https://dashboard.emailjs.com/admin
        // https://dashboard.emailjs.com/admin/templates
        emailjs.sendForm('service_fmz6mxd', 'template_3brgp3p', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}