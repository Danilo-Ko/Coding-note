const writing = document.querySelector("#writing");
const input = document.querySelector("#writing input");
const note = document.querySelector("#note");

function noteWrite (event) {
    event.preventDefault();
    const newNote = input.value;
    input.value = "";
    note.innerText = newNote;
    localStorage.setItem("inputText", newNote);
}

writing.addEventListener("submit", noteWrite);
