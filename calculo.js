function calcularNotaMateria(idMateria) {
    let materia = {
      conceitual: document.getElementById(idMateria + "conceitual").value,
      checkpoints: document.getElementById(idMateria + "checkpoints").value,
      pratica: document.getElementById(idMateria + "pratica").value,
      avaliacao: document.getElementById(idMateria + "avaliacao").value
    };
  
    let notaFinal = calcularNotaFinal(materia);
  
    document.getElementById("resultado" + idMateria.charAt(0).toUpperCase() + idMateria.slice(1)).innerHTML = "Nota Final: " + notaFinal;
  }
  
  function calcularNotaTotal() {
    let notaFinal1 = parseFloat(document.getElementById("resultadoMateria1").innerHTML.split(": ")[1]);
    let notaFinal2 = parseFloat(document.getElementById("resultadoMateria2").innerHTML.split(": ")[1]);
    let notaFinal3 = parseFloat(document.getElementById("resultadoMateria3").innerHTML.split(": ")[1]);
    let notaFinal4 = parseFloat(document.getElementById("resultadoMateria4").innerHTML.split(": ")[1]);
    let notaFinal5 = parseFloat(document.getElementById("resultadoMateria5").innerHTML.split(": ")[1]);
  
    let mediaFinal = (notaFinal1 + notaFinal2 + notaFinal3 + notaFinal4 + notaFinal5) / 5;
  
    document.getElementById("resultadoTotal").innerHTML = "Média Final: " + mediaFinal + "<br>" +
                                                          (mediaFinal >= 80 ? "Passou" : "Não Passou");
  }
  
  function calcularNotaFinal(materia) {
    return 0.25*materia.conceitual + 0.25*materia.checkpoints + 0.25*materia.pratica + 0.25*materia.avaliacao;
  }