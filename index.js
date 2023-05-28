const primaryBtn = document.getElementById("primary-btn");
const secondaryBtn = document.getElementById("secondary-btn");
const input = document.getElementById("input-area");
const output = document.getElementById("output-area");
const outputContainer = document.getElementById("output-container");
const container = document.getElementById("output__notext-container");
const btnCopy = document.getElementById("output__btncopy");

const regex = /[á-úÁ-ÚA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gm;

input.addEventListener("change", (e) => {
  if (input.value.length <= 0) {
    container.style.display = "flex";
    output.style.height = "0px";
    output.innerText = "";
    btnCopy.style.display = "none";
    console.log("ceroo");
  } else {
    console.log("algoo");
    output.style.height = "100%";
    btnCopy.style.display = "block";
  }
});
primaryBtn.addEventListener("click", () => {
  if (regex.test(input.value)) {
    alert("Sólo se permiten palabras en minusculas y sin acentos");
  } else {
    let texto = input.value;
    container.style.display = "none";
    output.innerText = encriptar(texto);
  }
});
secondaryBtn.addEventListener("click", () => {
  let texto = input.value;
  container.style.display = "none";
  output.innerText = desencriptar(texto);
});

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerText);
});

function encriptar(texto) {
  /* 
  La letra "a" es convertida para "ai"
  La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"
 */
  let textoEncriptado = "";
  for (let i in texto) {
    switch (texto[i]) {
      case "a":
        textoEncriptado += "ai";
        break;
      case "e":
        textoEncriptado += "enter";
        break;
      case "i":
        textoEncriptado += "imes";
        break;
      case "o":
        textoEncriptado += "ober";
        break;
      case "u":
        textoEncriptado += "ufat";
        break;
      default:
        textoEncriptado += texto[i];
        break;
    }
  }
  return textoEncriptado;
}

function desencriptar(texto) {
  let textoDesencriptado = texto;
  textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
  textoDesencriptado = textoDesencriptado.replaceAll("enter", "e");
  textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
  textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
  textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");

  return textoDesencriptado;
}
