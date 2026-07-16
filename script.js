// Theme Engine
const themeToggle = document.getElementById('theme-toggle');
const systemDarkConfig = window.matchMedia('(prefers-color-scheme: dark)');

// Check persistent preference database or fallback to user system UI settings
const activeTheme = localStorage.getItem('app-theme') || (systemDarkConfig.matches ? 'dark' : 'light');

if (activeTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('app-theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('app-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});
