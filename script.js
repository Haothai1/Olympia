//~~~~~~~~~~~~~~~~~~Start of randomizer for tips.html~~~~~~~~~~~~~~~~~~
document.addEventListener("DOMContentLoaded", function() {
  const showImageButton = document.getElementById("tip-buttonX");
  const imageContainer = document.getElementById("rand-container");
  const randomImageElement = document.getElementById("rand-gen");

  const imageFilenames = [
    "1.jpg", //https://pixabay.com/photos/woman-jogging-running-exercise-2592247/
    "2.jpg", //https://pixabay.com/photos/man-person-power-strength-strong-1282232/
    "3.jpg", //https://pixabay.com/photos/woman-yoga-coast-exercise-fitness-1834827/
    "4.jpg", //https://pixabay.com/photos/silhouette-bike-fitness-woman-683751/
    "5.jpg", //https://pixabay.com/photos/walking-fitness-girl-dawn-fall-1868652/
    "6.jpg", //https://pixabay.com/photos/roller-skates-rollerblades-381216/
    "7.jpg", //https://pixabay.com/photos/boxer-woman-sport-fighter-fitness-1984344/
    "8.jpg", //https://pixabay.com/photos/surfing-surfer-wave-ocean-sea-926822/
    "9.jpg", //https://pixabay.com/photos/fitness-dumbbells-training-gym-594143/
    "10.jpg", //https://pixabay.com/photos/tartan-track-athletics-2678544/
    "11.jpg", //https://pixabay.com/photos/yoga-yoga-pose-asana-sunset-woman-5281457/
    "12.jpg", //https://pixabay.com/photos/yoga-outdoors-sunrise-meditation-6723315/
    "13.jpg", //https://pixabay.com/photos/handstand-man-beach-sea-ocean-2224104/
    "14.jpg", //https://pixabay.com/photos/golf-golfed-sunset-sports-golfer-787826/
    "15.jpg", //https://pixabay.com/photos/to-go-biking-poppy-leisure-time-5178398/
    "16.jpg", //https://pixabay.com/photos/running-woman-race-athlete-sport-4782722/
    "17.jpg", //https://pixabay.com/photos/sportsman-bicycle-sports-cycling-5055367/
    "18.jpg", //https://pixabay.com/photos/running-woman-track-exercise-7056590/
    "19.jpg", //https://pixabay.com/photos/cyclist-cycling-biking-bike-riding-5507225/
    "20.jpg", //https://pixabay.com/photos/skateboard-shoes-active-in-the-free-5326930/
    "21.jpg", //https://pixabay.com/photos/man-bicycle-fitness-activity-7036709/

    /* "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "0.jpg", */
  ];

  // Function to display a random image
  function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageFilenames.length);
    const randomImageSrc = "rand-img/" + imageFilenames[randomIndex];
    randomImageElement.src = randomImageSrc;
    randomImageElement.alt = "Random Image";
  }

  // Event listener for the button click
  showImageButton.addEventListener("click", displayRandomImage);
});

document.addEventListener("DOMContentLoaded", function() {
    const tipsButton = document.getElementById("tip-buttonX");
    const quoteContainer = document.getElementById("quote-container");

    // Function to display a random quote
    function displayRandomQuote() {
        fetch("quotes.txt") // Load the text file containing quotes
            .then(response => response.text())
            .then(text => {
                const quoteList = text.split("\n").filter(quoteLine => quoteLine.trim() !== "");

                // Parse and extract the quotes
                const quotes = quoteList.map(quoteLine => {
                    const [quote] = quoteLine.split(","); // Extract only the quote part
                    return quote.trim(); // Remove leading/trailing spaces
                });

                // Select a random quote
                const randomIndex = Math.floor(Math.random() * quotes.length);
                const randomQuote = quotes[randomIndex];

                // Display the selected quote
                quoteContainer.textContent = randomQuote;
            })
            .catch(error => {
                console.error("Error loading quotes:", error);
            });
    }

    // Event listener for the button click
    tipsButton.addEventListener("click", displayRandomQuote);
});

//~~~~~~~~~~~~~~~~~~~End of randomizer for tips.html~~~~~~~~~~~~~~~~~~~
