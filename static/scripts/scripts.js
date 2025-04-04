document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 10) {
            header.classList.add("dark");
        } else {
            header.classList.remove("dark");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navigation a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = target.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('refresh');

    scrollToTopButton.addEventListener('click', function() {
        scrollToTop();
    });

    function scrollToTop() {
        if (window.scrollY !== 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const dropdown = document.querySelector('.dropdown');
//     const dropdownContent = document.querySelector('.dropdown-content');

//     dropdown.addEventListener('click', function(event) {
//         this.classList.toggle('active');
        
//         dropdownContent.classList.toggle('active');

//         event.stopPropagation();
//     });

//     document.addEventListener('click', function(event) {
//         if (!event.target.closest('.dropdown')) {
//             dropdown.classList.remove('active');
//             dropdownContent.classList.remove('active');
//         }
//     });

//     const dropdownItems = document.querySelectorAll('.navigationlink');
//     dropdownItems.forEach(item => {
//         item.addEventListener('click', function() {
//             dropdown.classList.remove('active');
//             dropdownContent.classList.remove('active');
//         });
//     });
// });