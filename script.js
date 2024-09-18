<script>
    // JavaScript to toggle menu visibility on mobile
    document.addEventListener("DOMContentLoaded", function() {
        const menuToggle = document.querySelector(".menu-toggle");
        const navMenu = document.querySelector("nav ul");

        // Toggle class 'show' to display or hide the menu
        menuToggle.addEventListener("click", function() {
            navMenu.classList.toggle("show");
        });
    });
</script>
