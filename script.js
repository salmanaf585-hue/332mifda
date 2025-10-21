const form = document.getElementById("announcement-form");
const list = document.getElementById("announcement-list");

let announcements = JSON.parse(localStorage.getItem("announcements")) || [];

function renderAnnouncements() {
  list.innerHTML = "";
  announcements.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${item.judul}</h3>
      <p>${item.isi}</p>
      <small>Tanggal: ${item.tanggal}</small>
      <button class="delete-btn" onclick="deleteAnnouncement(${index})">Hapus</button>
    `;
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const judul = document.getElementById("judul").value.trim();
  const isi = document.getElementById("isi").value.trim();
  const tanggal = document.getElementById("tanggal").value;

  if (judul && isi && tanggal) {
    announcements.push({ judul, isi, tanggal });
    localStorage.setItem("announcements", JSON.stringify(announcements));
    renderAnnouncements();
    form.reset();
  }
});

function deleteAnnouncement(index) {
  announcements.splice(index, 1);
  localStorage.setItem("announcements", JSON.stringify(announcements));
  renderAnnouncements();
}

renderAnnouncements();
