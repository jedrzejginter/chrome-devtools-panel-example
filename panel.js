function handleClick() {
  chrome.devtools.inspectedWindow.eval('alert("Message from Dev Tools")');
}

document.getElementById('button').addEventListener('click', handleClick);
