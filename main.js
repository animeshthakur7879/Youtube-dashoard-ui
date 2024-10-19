// Sidebar Toggle for Small Screens
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".sidebar").toggleClass("active");
    });
});

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll(".card").forEach((card) => {
        card.classList.toggle("dark-card");
    });
}

// Chart.js for Analytics
var ctx = document.getElementById('analyticsChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Views',
            data: [1500, 2000, 1800, 2200, 2400, 2300],
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            borderColor: 'rgba(52, 152, 219, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});
