
const tabs = document.querySelectorAll('.tab');
const formSubmitButton = document.getElementById('form_submit');
let formSubmitProcess = false;



////////////////////////// firbase connections //////////////////////////

{/* <script type="module"> */ }
// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";// TODO: Add SDKs for Firebase products that you want to use
// import { ref, push } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAgj-Wux_A1mHUsrMak8tWTh3wsrLFexCg",
//     authDomain: "know-tushar.firebaseapp.com",
//     databaseURL: "https://know-tushar-default-rtdb.firebaseio.com/",
//     projectId: "know-tushar",
//     storageBucket: "know-tushar.firebasestorage.app",
//     messagingSenderId: "933185447659",
//     appId: "1:933185447659:web:e7c92352c5e23b36c800ae",
//     measurementId: "G-09D1J8S7QW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMvARA-zE1mnabuXqiROaBeCajkurrDGM",
    authDomain: "ushar-know.firebaseapp.com",
    projectId: "ushar-know",
    storageBucket: "ushar-know.firebasestorage.app",
    messagingSenderId: "866544444193",
    appId: "1:866544444193:web:6fb2f5e755480995a7d460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


// import { database } from './firebase-config.js';
import { ref, push } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// Form submission handler
const clientForm = document.getElementById('clientForm');
clientForm.addEventListener('submit666', async (e) => {

    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const details = document.getElementById('details').value;

    try {
        console.log('HHHH')
        // Store data in Firebase Realtime Database
        const dbRef = ref(database, 'clients');
        console.log('HHHH333')
        await push(dbRef, { name, email, phone, details });
        console.log('HHHH33eeeee3')
        alert('Data submitted successfully!');
        clientForm.reset(); // Reset form
        console.log('HHHH111')
    } catch (error) {
        console.log('HHHH2222')
        console.error('Error submitting data:', error);
        alert('Failed to submit data. Please try again.');
    }
});


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
document.getElementById('clientForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    if (formSubmitProcess) {
        return
    }
    formSubmitProcess = true;
    formSubmitButton.innerText = 'Please Wait...';


    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const details = document.getElementById('details').value;

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
        // const url = 'https://example.com/api/submit'; // Replace with your actual URL
        // const data = {
        //     name,
        //     email,
        //     phone,
        //     details: document.getElementById('details').value.trim()
        // };

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             alert('Form submitted successfully!');
        //         } else {
        //             alert('Failed to submit form.');
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //         alert('An error occurred while submitting the form.');
        //     });


        try {
            // http://localhost:8000/fromSubmit
            const formData = {
                name,
                email,
                phone,
                details,
            }

            let response = await fetch('https://know-tushar-api.onrender.com/fromSubmit', {
                method: "POST", // HTTP method
                headers: {
                    "Content-Type": "application/json", // Inform the server about the data format
                },
                body: JSON.stringify(formData), // Send the form data as a JSON string
            });
            console.log(response)
            let data = await response.json()
            console.log(data)
            alert('Data submitted successfully!');
            clientForm.reset();
            formSubmitProcess = false;
            formSubmitButton.innerText = 'Submit';
        } catch (error) {

            console.error('Error submitting data:', error);
            alert('Failed to submit data. Please try again.');
            formSubmitProcess = false;
            formSubmitButton.innerText = 'Submit';
        }
    }

});



////////////////////////////////// hireme button click ///////////////////////////////
document.getElementById('hireMeButton').addEventListener('click', function scrollToForm() {
    const section7 = document.getElementById('section7');
    section7.scrollIntoView({ behavior: 'smooth' });
});
