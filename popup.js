function runScript() {
  chrome.tabs.executeScript({
    file: "linkedin.js"
  });
}

chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
  const url = tabs[0].url;
  const isOpened = url === "https://www.linkedin.com/mynetwork/" ? true : false;
  const open = document.getElementById("openPage");
  const hunt = document.getElementById("hunt");
  if (!isOpened) {
    open.style.display = "block";
    hunt.style.display = "none";
  } else {
    open.style.display = "none";
    hunt.style.display = "block";
    document.getElementById("clickme").addEventListener("click", runScript);
  }
});
