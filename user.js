function savedAudio() {
    // Simulating fetching saved audio data
    var savedAudioData = ["Audio 1", "Audio 2", "Audio 3"];

    var savedAudioDropdown = document.getElementById("savedAudioDropdown");

    // Clear previous options
    savedAudioDropdown.innerHTML = '';

    if (savedAudioData.length > 0) {
        // Add saved audio options to the dropdown
        savedAudioData.forEach(function (audio) {
            var option = document.createElement("option");
            option.value = audio;
            option.text = audio;
            savedAudioDropdown.add(option);
        });
    } else {
        // If no saved audio, add a default option
        var defaultOption = document.createElement("option");
        defaultOption.text = "No saved audio";
        savedAudioDropdown.add(defaultOption);
    }

    // Show the dropdown
    savedAudioDropdown.style.display = 'block';
}

function playSelectedAudio(select) {
    var selectedAudio = select.value;
    // Add logic to play the selected audio
    console.log("Playing audio: " + selectedAudio);
}

function changeUserName() {
    var newUserName = prompt("Enter new user name:");
    if (newUserName !== null) {
        console.log("New user name: " + newUserName);

        var userNameElement = document.getElementById("userName");
        userNameElement.textContent = newUserName;
    }
}



function changeEmail() {
    var newEmail = prompt("Enter new email address:");
    if (newEmail !== null) {
       
        console.log("New email address: " + newEmail);

       
        var userEmailElement = document.getElementById("userEmail");
        userEmailElement.textContent = "Email: " + newEmail;
    }
}

function changeProfilePicture(event) {
    var input = event.target;
    var file = input.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var userProfile = document.getElementById("userProfile");
            var currentProfilePicture = document.getElementById("currentProfilePicture");

            userProfile.style.backgroundImage = "none"; 
            currentProfilePicture.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}

function changePassword() {
    var newPassword = prompt("Enter new password:");
    if (newPassword !== null) {
        
        console.log("New password: " + newPassword);
    }
}

function savedAudio() {
    var audioNote = prompt("Enter audio note:");
    if (audioNote !== null) {
       
        console.log("Audio note: " + audioNote);
    }
}
