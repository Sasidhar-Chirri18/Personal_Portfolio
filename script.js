document.addEventListener('DOMContentLoaded', () => {

    // -- Mobile Menu Toggle --
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = mobileMenuButton.querySelector('i');

    mobileMenuButton.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('fa-bars', isHidden);
        menuIcon.classList.toggle('fa-times', !isHidden);
    });

    // Close mobile menu
    mobileMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        }
    });

    // -- Dark/Light Mode Toggle --
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const darkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
    const lightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');
    const applyTheme = () => {
        const isDark = localStorage.getItem('theme') === 'dark' || 
                       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        document.documentElement.classList.toggle('dark', isDark);

        // Desktop icons
        darkIcon.classList.toggle('hidden', !isDark);
        lightIcon.classList.toggle('hidden', isDark);

        // Mobile icons
        darkIconMobile.classList.toggle('hidden', !isDark);
        lightIconMobile.classList.toggle('hidden', isDark);
    };
    const handleToggleClick = () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        applyTheme();
    };
    themeToggleBtn.addEventListener('click', handleToggleClick);
    themeToggleMobileBtn.addEventListener('click', handleToggleClick);
    applyTheme();
});