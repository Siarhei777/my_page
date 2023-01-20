(() => {

    const appStart = () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.01
        };
        
            const observer = new IntersectionObserver(entries => {  entries.forEach(entry => {                 
                let elementClassName = '';
                let targetEl = null;
                switch (true) {
                    case entry.target.classList.contains('indicator__value'):
                        elementClassName = 'indicator-animation-name';
                        targetEl = entry.target;
                        break;
                    case entry.target.classList.contains('skills'):
                        elementClassName = 'move-skills-block';
                        targetEl = entry.target;
                        break;
                    case entry.target.classList.contains('titul-info'):
                        elementClassName = 'header-invisible';
                        targetEl = document.querySelector('header');
                        break;                          
                    case (entry.target.classList.contains('data-info') || entry.target.classList.contains('data-content')):
                        elementClassName = 'move-block-animation-name';
                        targetEl = entry.target;
                        break;                           
                    case (entry.target.classList.contains('slider-container__wrapper-image')):
                        elementClassName = 'work-slider';
                        targetEl = entry.target;
                        break;            
                    case (entry.target.classList.contains('my-contacts')):
                        elementClassName = 'show';
                        targetEl = entry.target;
                        break;            

                }
                if (entry.isIntersecting) {
                    targetEl.classList.add(elementClassName);
                }    
                else {
                    targetEl.classList.remove(elementClassName);
                }                    
            })}, observerOptions);

        document.querySelectorAll('.indicator__value, .skills, .data-info, .data-content, .slider-container__wrapper-image, .my-contacts, .titul-info').forEach( el => observer.observe(el));
    }

    document.addEventListener('DOMContentLoaded', appStart);

})();