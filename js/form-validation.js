// Form Validation



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('expertForm').addEventListener('submit', function (e) {
        const form = this;
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        form.classList.add('was-validated');
    });
});
