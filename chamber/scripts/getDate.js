const currentYear = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")

const today = new Date()

currentYear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

lastModified.innerHTML = `<p id="lastModified">Last Modification: ${document.lastModified}</p>`;