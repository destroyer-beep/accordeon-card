window.addEventListener('DOMContentLoaded', () => {

    const decription = document.querySelectorAll('.decription'),
          arrow = document.querySelectorAll('.arrow');

    function hideTabs() {
        description.forEach(item => {
            item.style.display = 'none';
        });

    }

    function showTabs(i) {
        description[i].style.display = 'inline';
    }

    arrow.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target && target.classList.contains('arrow')) {
            arrow.forEach((item, i) => {
                if (target == i) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });
});


