new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    autoScrolling: true,
    scrollingSpeed: 250,
    navigation: true,
    anchors: ['', 'career', 'projects'],
    navigationTooltips: ['', 'Career', 'Projects'],
	slidesNavigation: true,
    showActiveTooltip: true,
    parallax: true,
    scrollOverflow: false,
    onSlideLeave: function(section, origin, destination, direction, trigger){
        let nextArrow = document.querySelector('.fp-controlArrow.fp-next');
        let previousArrow = document.querySelector('.fp-controlArrow.fp-prev');
        if(previousArrow){
            if(destination.isFirst){
                previousArrow.classList.add('display-none');
            }
            else {
                previousArrow.classList.remove('display-none');
            }
        }
        if(previousArrow){
            if(destination.isLast){
                nextArrow.classList.add('display-none');
            }
            else {
                nextArrow.classList.remove('display-none');
            }
        }
    },
});

let previousArrow = document.querySelector('.fp-controlArrow.fp-prev');
if(previousArrow){
    previousArrow.classList.add('display-none');
}

/* MATERIAL BUTTON STARTS HERE */
window.addEventListener('load', () => {
    const buttons = document.querySelectorAll('.ripple');
    if (!buttons) return;
    for (const button of buttons) {
        button.addEventListener('click', (e) => {
            const rippleEffect = button.querySelector('.ripple-effect');
            if (rippleEffect) rippleEffect.remove();
            const posX = button.offsetLeft;
            const posY = button.offsetTop;
            let buttonWidth = button.offsetWidth;
            let buttonHeight = button.offsetHeight;
            const span = document.createElement('span');
            if (button.classList.contains('dark')) {
                span.classList.add('ripple-effect-dark');
            } else {
                span.classList.add('ripple-effect');
            }
            button.appendChild(span);
    
            if (buttonWidth >= buttonHeight) {
                buttonHeight = buttonWidth;
            } else {
                buttonWidth = buttonHeight;
            }
            const x = e.pageX - posX - buttonWidth / 2;
            const y = e.pageY - posY - buttonHeight / 2;
            span.style.width = buttonWidth + 'px';
            span.style.height = buttonHeight + 'px';
            span.style.left = x + 'px';
            span.style.top = y + 'px';
            span.classList.add('ripple-animation');
        });
    }
});
/* MATERIAL BUTTON ENDS HERE */