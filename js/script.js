window.addEventListener('DOMContentLoaded', () => {

    const list = document.querySelectorAll('.list-item');
    
    for(item of list) {
        item.addEventListener('click', function(e) {
            for (i of list) {
                i.classList.remove('active');
            }
            if (e.target.classList.contains('list-head') || e.target.classList.contains('arrow')) {
                this.classList.toggle('active');
            }
        });
    }
});