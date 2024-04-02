var toggleButton = document.getElementById('toggleButton');
var electionIframe = document.getElementById('electionIframe');
var caption = document.querySelector('.caption');

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
