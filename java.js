document.getElementById("buscador").addEventListener("keyup", function () {
    const filtro = this.value.toLowerCase();
    const filas = document.querySelectorAll("#tablaDatos tbody tr");
  
    filas.forEach(fila => {
      const celdas = fila.getElementsByTagName("td");
      let coincide = false;
  
      for (let celda of celdas) {
        if (celda.textContent.toLowerCase().includes(filtro)) {
          coincide = true;
          break;
        }
      }
  
      fila.style.display = coincide ? "" : "none";
    });
  });