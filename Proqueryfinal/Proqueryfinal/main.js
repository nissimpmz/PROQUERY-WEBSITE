document.addEventListener("DOMContentLoaded", function() {

    // Function to hide all sections
    function hideAllSections() {
        const allSections = document.querySelectorAll('.section-content');
        allSections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Function to show the content based on the data-name
    function showContent(sectionName) {
        const section = document.querySelector(`#${sectionName}-content`);
        if (section) {
            section.style.display = 'block';
        }
    }

    // Add event listeners for dropdown links (with the `data-name` attribute)
    const dropdownLinks = document.querySelectorAll('.dropdown__link');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action (e.g., page reload)

            // Hide all sections
            hideAllSections();

            // Get the data-name attribute and use it to show the corresponding content
            const sectionName = this.getAttribute('data-name');
            showContent(sectionName);
        });
    });

    // Add event listeners to toggle dropdown menus
    const dropdownItems = document.querySelectorAll('.dropdown__item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const menu = this.querySelector('.dropdown__menu');
            menu.classList.toggle('show'); // Toggle the visibility of the dropdown menu
        });
    });

    // Optionally, handle the close of dropdown menu if clicking outside (optional feature)
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown__item')) {
            const openMenus = document.querySelectorAll('.dropdown__menu.show');
            openMenus.forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });

});
