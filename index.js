
const tabs = document.querySelectorAll('.tab');

///////////////////////////  skills  tab javascript /////////////////////////////
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));

        // Add 'active' class to the clicked tab
        tab.classList.add('active');

        // Hide all tab content
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Show the corresponding tab content
        const tabContent = document.getElementById(tab.getAttribute('data-tab'));
        tabContent.classList.add('active');
    });
});




////////////////////////// from javascript   ////////////////////////////////
document.getElementById('clientForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    let isValid = true;

    // Validate name
    if (!name) {
        console.log('JJJJJJJJ')
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Validate phone
    const phonePattern = /^[0-9]{10}$/;
    if (!phone) {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
        isValid = false;
    }

    if (isValid) {
        // Send POST request
        const url = 'https://example.com/api/submit'; // Replace with your actual URL
        const data = {
            name,
            email,
            phone,
            details: document.getElementById('details').value.trim()
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    alert('Form submitted successfully!');
                } else {
                    alert('Failed to submit form.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            });
    }
});