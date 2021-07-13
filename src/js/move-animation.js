const projects = document.querySelectorAll('#projects > li');
const root = document.documentElement;

root.style.setProperty('--project-opacity', '0');

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'animIn 2s forwards';
            observer.unobserve(entry.target);
        };    
    });
});

projects.forEach(project => {
    observer.observe(project);
});