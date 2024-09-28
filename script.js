document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Replace icons using Lucide icons
    lucide.createIcons();

    // Replace the icons based on their IDs
    lucide.createIcon('Cpu', document.getElementById('cpu-icon'));
    lucide.createIcon('Menu', document.getElementById('menu-icon'));
    lucide.createIcon('X', document.getElementById('menu-icon'));
    lucide.createIcon('Car', document.getElementById('car-icon'));
    lucide.createIcon('Robot', document.getElementById('robot-icon'));
    lucide.createIcon('Users', document.getElementById('users-icon'));
});