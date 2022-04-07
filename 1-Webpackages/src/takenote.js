async function takeNote(e) {
    if (e.key === "Enter") {
        let todonote = document.createElement('p');
        todonote.textContent = document.getElementById("notes").value;
        document.getElementById("root").append(todonote);
    }
}

export { takeNote };