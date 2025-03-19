@font-face {
    font-family: 'OSWALD';
    src: url('OSWALD.ttf') format('truetype'); /* Adjust the path if necessary */
    font-weight: normal;
    font-style: normal;
}
body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
}

.container {
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    margin-top: 20px;
}

.profile {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    margin: 0 20px;
    text-align: center;
    width: 200px;
    overflow: hidden; /* Hide overflow */
    transition: transform 0.3s;
}

.profile:hover {
    transform: scale(1.05);
}

.profile-pic {
    width: 100px;
    height: 100px;
    border-radius: 50%; /* Makes the image round */
    object-fit: cover;
}

.description {
    max-height: 0; /* Start hidden */
    overflow: hidden; /* Prevent text from showing */
    transition: max-height 0.25s ease-in-out, opacity 0.25s ease-in-out; /* Smooth transition */
    opacity: 0; /* Start with opacity 0 */
}

.profile:hover .description {
    max-height: 100px; /* Adjust this value based on your content */
    opacity: 1; /* Fade in description */
}

body:hover .container {
    visibility: visible;
    opacity: 1;
}
