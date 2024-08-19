const fileInput = document.querySelector("#file");
const filesContainer = document.querySelector("#files-container");

fileInput.addEventListener("change", (e) => {
  const files = e.target.files;
  processFiles(files);
});

function processFiles(files) {
  for (const file of files) {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", (e) => {
      const url = fileReader.result;
      const sizePrep = file.size / 1024;
      console.log(sizePrep);
      const size =
        sizePrep > 1000
          ? parseInt(sizePrep / 1024) + "MB"
          : parseFloat(sizePrep).toFixed(2) + "Kb";

      const idElem = "id-" + crypto.randomUUID();

      const html = `
                        <div class="file-item">
                            <img src="${url}" width="300" />
                            <div>${file.name}</div>
                            <div>${size}</div>
                            <div id="size-${idElem}">0%</div>
                            <div class="progress-bar" id="${idElem}"></div>
                        </div>`;

      filesContainer.innerHTML += html;
      upload(file, idElem);
    });
  }
}

function upload(f, id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.upload.onload = function () {
      console.log("La subida se completó");
      resolve();
    };

    xhr.upload.error = function () {
      console.error("La subida falló");
      reject();
    };

    xhr.upload.onabort = function () {
      console.error("Subida cancelada");
    };

    xhr.upload.onprogress = function (e) {
      const container = document.querySelector("#" + id);
      const sizeDiv = document.querySelector("#size-" + id);

      console.log(`Uploaded ${e.loaded} of ${e.total} bytes`);

      container.style.width = (e.loaded / e.total) * 100 + "%";
      sizeDiv.textContent = ((e.loaded / e.total) * 100).toFixed(0) + "%";
    };

    xhr.open("POST", "?view=upload");

    const formData = new FormData();

    formData.append("file", f);

    xhr.send(formData);
  });
}
