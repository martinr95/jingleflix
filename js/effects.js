//SLIDER TEMPERATURE

// Get the temperature slider element
const temperatureSlider = document.getElementById("temperature-level");

// Add an event listener to the slider input
temperatureSlider.addEventListener("input", function () {
  // Get the current value of the slider
  const sliderValue = parseFloat(temperatureSlider.value);

  // Calculate the color intensity based on the slider value
  const redIntensity = Math.min(255, Math.round(sliderValue * 50));
  const blueIntensity = Math.min(255, Math.round((10 - sliderValue) * 50));

  // Set the background color of the slider thumb
  temperatureSlider.style.background = `linear-gradient(90deg, rgb(${blueIntensity}, 165, ${redIntensity}) ${
    sliderValue * 10
  }%, #e0e0e0 ${sliderValue * 10}%)`;
});
