document.addEventListener("DOMContentLoaded", function () {
    const elemenTahun = document.getElementById("tahun-sekarang");
    if (elemenTahun) {
        elemenTahun.textContent = new Date().getFullYear();
    }

    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});