document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const containers = document.querySelectorAll(".tipos .carrosel .container");
    const totalContainers = containers.length;

    function showContainer(index) {
        containers.forEach((container, i) => {
            container.classList.remove("active");
            if (i === index) {
                container.classList.add("active");
            }
        });
    }

    document.getElementById("next").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % totalContainers;
        showContainer(currentIndex);
    });

    document.getElementById("prev").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + totalContainers) % totalContainers;
        showContainer(currentIndex);
    });

    // Show the first container initially
    showContainer(currentIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const containers = document.querySelectorAll(".casos .carrosel .container");
    const totalContainers = containers.length;

    function showContainer(index) {
        containers.forEach((container, i) => {
            container.classList.remove("active");
            if (i === index) {
                container.classList.add("active");
            }
        });
    }

    document.getElementById("next2").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % totalContainers;
        showContainer(currentIndex);
    });

    document.getElementById("prev2").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + totalContainers) % totalContainers;
        showContainer(currentIndex);
    });

    // Show the first container initially
    showContainer(currentIndex);
});
