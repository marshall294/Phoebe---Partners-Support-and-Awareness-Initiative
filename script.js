    document.addEventListener("DOMContentLoaded", function () {
        function startCountUp(el, target) {
            let start = 0;
            let duration = 2000; // Animation duration in milliseconds
            let increment = target / (duration / 16); // Increment per frame
            let interval = setInterval(() => {
                start += increment;
                if (start >= target) {
                    start = target;
                    clearInterval(interval);
                }
                el.innerText = Math.floor(start).toLocaleString(); // Format numbers with commas
            }, 16);
        }

        function checkVisibility() {
            let stats = document.querySelectorAll(".stat");
            stats.forEach(stat => {
                let targetValue = parseInt(stat.getAttribute("data-target"));
                let bounding = stat.getBoundingClientRect();
                if (bounding.top < window.innerHeight && stat.innerText === "0") {
                    startCountUp(stat, targetValue);
                }
            });
        }

        window.addEventListener("scroll", checkVisibility);
        checkVisibility(); // Run once in case stats are already in view
    });

        function toggleMenu() {
            document.getElementById("navMenu").classList.toggle("nav-active");
        }