//when calculate button clicked, triggers event listener that sets the class of the error box to no longer be hidden

function printError(resultsBox: HTMLElement, errorBox: HTMLElement, error: string) {
    resultsBox.classList.add('hidden');
    errorBox.classList.remove('hidden');
    var errorContent = "<p>" + error + "</p>";
    errorBox.innerHTML = errorContent;
 };

