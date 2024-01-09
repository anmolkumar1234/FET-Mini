function toggleInput(inputId) {

    const inputElement = document.getElementById(inputId);
    
    inputElement.style.display = inputElement.style.display === 'none' ? 'block' : 'none';
    
    }
    
    
    
    function handleProfilePictureChange(input) {
    
    const profilePicture = document.getElementById('profilePicture');
    
    const file = input.files[0];
    
    
    
    if (file) {
    
    const reader = new FileReader();
    
    
    
    reader.onload = function (e) {
    
    profilePicture.src = e.target.result;
    
    };
    
    
    
    reader.readAsDataURL(file);
    
    }
    
    }
    
    
    
    function changePhoneNumber(input) {
    
    const newPhoneNumber = input.value;
    
    // You can add logic to save the new phone number on the server
    
    if (newPhoneNumber) {
    
    // Update the UI or send the data to the server
    
    console.log('Phone number changed to:', newPhoneNumber);
    
    }
    
    }
    
    
    
    function changeEmail(input) {
    
    const newEmail = input.value;
    
    // You can add logic to save the new email on the server
    
    if (newEmail) {
    
    // Update the UI or send the data to the server
    
    console.log('Email changed to:', newEmail);
    
    }
    
    }