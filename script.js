document.getElementById('surpriseBtn').addEventListener('click', function() {
    var surpriseMessage = document.getElementById('surpriseMessage');
    var button = document.getElementById('surpriseBtn');
    var container = document.querySelector('.container');
    
    if (surpriseMessage.classList.contains('hidden')) {
        // Show the message
        surpriseMessage.classList.remove('hidden');
        // Force reflow to restart the animation
        void surpriseMessage.offsetWidth;
        surpriseMessage.classList.add('show');
        button.textContent = 'Close this uppp';
        container.classList.add('animate-show');
        container.classList.remove('animate-hide');
    } else {
        // Hide the message
        surpriseMessage.classList.remove('show');
        surpriseMessage.classList.add('hide');
        // Wait for the animation to finish, then hide the element
        setTimeout(function() {
            surpriseMessage.classList.add('hidden');
            surpriseMessage.classList.remove('hide');
        }, 500); // Matches the CSS transition duration
        button.textContent = 'Click hereee *';
        container.classList.add('animate-hide');
        container.classList.remove('animate-show');
    }
});
