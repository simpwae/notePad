const btn = document.querySelector("#addNote");
let main = document.querySelector("#main");
const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  //   console.log(notes);
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(data));
};
btn.addEventListener("click", () => {
  addNote();
});

const addNote = (text = "") => {
  let note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
  <div class="toolBar">
    <i class="save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-trash"></i>
  </div>
  <textarea name="">${text}</textarea>`;

  note.querySelector(".trash").addEventListener("click", () => {
    note.remove();
    saveNotes();
  });
  note.querySelector(".save").addEventListener("click", () => {
    saveNotes();
  });
  main.appendChild(note);
  saveNotes();
};
(function () {
  const lsnotes = JSON.parse(localStorage.getItem("notes"));
  lsnotes.forEach((lsnotes) => {
    addNote(lsnotes);
  });
  //   if (lsnotes === 0) {
  //     localStorage.removeItem("notes");
  //   } else {
  //     addNote();
  //   }
})();
