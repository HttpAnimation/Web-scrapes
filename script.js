let scrapedText = '';

function scrapeText() {
  const url = document.getElementById('urlInput').value;
  
  // Perform text scraping using an appropriate method or library
  // For simplicity, let's assume we already have the scraped text
  scrapedText = 'This is the scraped text from the URL.';
}

function downloadHTML() {
  const filename = 'scraped_page.html';
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(scrapedText));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function downloadText() {
  const filename = 'scraped_page.txt';
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(scrapedText));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
