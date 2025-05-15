function addSubject() {
  const container = document.getElementById("subjectFields");
  const div = document.createElement("div");
  div.classList.add("subject-entry");

  const input = document.createElement("input");
  input.type = "text";
  input.name = "subjects[]";
  input.placeholder = "Enter Subject";
  input.required = true;

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  removeBtn.className = "add-btn";
  removeBtn.type = "button";
  removeBtn.onclick = () => container.removeChild(div);

  div.appendChild(input);
  div.appendChild(removeBtn);
  container.appendChild(div);
}

function generatePDF(preview = false) {
  const formElement = document.getElementById('examForm');
  const clone = formElement.cloneNode(true);

  const options = {
    margin: [0.75, 0.75, 1, 0.75],
    filename: 'Exam_Form.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
      scale: 2,
      scrollY: 0,
      useCORS: true
    },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  if (preview) {
    html2pdf().set(options).from(clone).outputPdf('dataurlnewwindow');
  } else {
    html2pdf().set(options).from(clone).save();
  }
}

function previewPDF() {
  generatePDF(true);
}

function downloadPDF() {
  generatePDF(false);
}


function addSubject() {
  const container = document.getElementById("subjectFields");
  const div = document.createElement("div");

  const input = document.createElement("input");
  input.type = "text";
  input.name = "subjects[]";
  input.placeholder = "Enter Subject";
  input.required = true;

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  removeBtn.className = "add-btn";
  removeBtn.type = "button";
  removeBtn.onclick = () => container.removeChild(div);

  div.appendChild(input);
  div.appendChild(removeBtn);
  container.appendChild(div);
}

function addTimestamp() {
  const now = new Date();
  const formatted = now.toLocaleString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById("timestamp").textContent = formatted;
}

function generatePDF(preview = false) {
  addTimestamp(); // Add timestamp before generating PDF

  const form = document.getElementById("examForm");
  const opt = {
    margin: 0,
    filename: "Student_Exam_Form.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollY: 0
    },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  const clonedForm = form.cloneNode(true);

  if (preview) {
    html2pdf().set(opt).from(clonedForm).outputPdf("dataurlnewwindow");
  } else {
    html2pdf().set(opt).from(clonedForm).save();
  }
}

function previewPDF() {
  generatePDF(true);
}

function downloadPDF() {
  generatePDF(false);
}
