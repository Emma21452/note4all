const notesList = document.getElementById("notesList");
const noteContent = document.getElementById("noteContent");
const addNoteBtn = document.getElementById("addNote");
const deleteBtn = document.getElementById("deleteNote");

let notes = [];
let activeIndex = null;

// Carregar notas
chrome.storage.local.get(["notes"], (result) => {
  notes = result.notes || [];
  if (notes.length > 0) {
    activeIndex = 0;
    render();
  }
});

function render() {
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note-item" + (index === activeIndex ? " active" : "");
    div.textContent = note.title || "Nota " + (index + 1);

    div.onclick = () => {
      activeIndex = index;
      render();
    };

    notesList.appendChild(div);
  });

  if (activeIndex !== null) {
    noteContent.value = notes[activeIndex].content;
  } else {
    noteContent.value = "";
  }

  chrome.storage.local.set({ notes });
}

// Criar nova nota
addNoteBtn.onclick = () => {
  notes.push({
    title: "Nova Nota",
    content: ""
  });
  activeIndex = notes.length - 1;
  render();
};

// Salvar automaticamente
noteContent.addEventListener("input", () => {
  if (activeIndex !== null) {
    notes[activeIndex].content = noteContent.value;
    notes[activeIndex].title = noteContent.value.split("\n")[0] || "Sem título";
    render();
  }
});

// Excluir nota
deleteBtn.onclick = () => {
  if (activeIndex !== null) {
    notes.splice(activeIndex, 1);
    activeIndex = notes.length ? 0 : null;
    render();
  }
};

const captureBtn = document.getElementById("captureScreen");

captureBtn.onclick = async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.captureVisibleTab(tab.windowId, { format: "png" }, (dataUrl) => {

      const now = new Date();

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hour = String(now.getHours()).padStart(2, "0");
      const minute = String(now.getMinutes()).padStart(2, "0");

      const filename = `captura_${year}-${month}-${day}_${hour}-${minute}.png`;

      if (chrome.downloads) {
  chrome.downloads.download({
    url: dataUrl,
    filename: filename,
    saveAs: false
  });
} else {
  alert("Permissão de download não ativa.");
}
    });

  } catch (error) {
    console.error("Erro ao capturar tela:", error);
  }
};