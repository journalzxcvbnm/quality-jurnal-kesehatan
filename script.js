const citation = "Susilowati, & Mardiyaningsih. (2026). The Effectiveness of Brain Gym Exercises in Improving Cognitive Function in Older Adults: Literature Review. Quality: Jurnal Kesehatan, 20(1), 121–134. DOI: 909387/qjk.2187.145.";

const copyButton = document.getElementById("copyCitation");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

if (copyButton) copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(citation);
    showToast("Citation copied to clipboard.");
  } catch (error) {
    const field = document.createElement("textarea");
    field.value = citation;
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    showToast(copied ? "Citation copied to clipboard." : citation);
  }
});

// Warn users if the PDF has not yet been added to the files folder.
document.querySelectorAll('a[href="brain-gym-review.pdf"]').forEach(link => {
  link.addEventListener("click", event => {
    // Let the browser handle the link normally. If the PDF is missing,
    // the browser will show its usual file-not-found page.
  });
});
