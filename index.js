var toggleButton = document.getElementById('toggleButton');
var electionIframe = document.getElementById('electionIframe');
var caption = document.querySelector('.caption');
function resizeContainer() {
    var viewportWidth = window.innerWidth;
    var containerWidth = Math.min(viewportWidth, 1200); // Maximum width for the container

    document.querySelector('.container').style.width = containerWidth + 'px';
}

// Call the resizeContainer function initially and whenever the window is resized
resizeContainer();
window.addEventListener('resize', resizeContainer);


// Ensure that you're appending the chart to the correct div
var chartDiv = document.getElementById('chart_div');

toggleButton.addEventListener('click', function() {
  if (electionIframe.src.includes('senate')) {
    electionIframe.src = 'https://steepatticstairs.github.io/ElectionMap/?mode=gubernatorial';
    toggleButton.textContent = 'Gubernatorial';
    caption.textContent = 'Gubernatorial'; // Change the caption text
  } else if (electionIframe.src.includes('gubernatorial')) {
    electionIframe.src = 'https://steepatticstairs.github.io/ElectionMap/';
    toggleButton.textContent = 'House';
     caption.textContent = 'House of Representatives'; // Change the caption text
  } else {
    electionIframe.src = 'https://steepatticstairs.github.io/ElectionMap/?mode=senate';
    toggleButton.textContent = 'Senate';
     caption.textContent = 'Senate'; // Change the caption text
  }
});
