const btnMobile = document.getElementById("menu-js");
const html = document.documentElement;
// const setandoAtributo = btnMobile.setAttribute("" ,"")

function ativarMenu(event) {
  html.classList.toggle("ativo");
  const temAtivo = html.classList.contains("ativo");

    


  if (temAtivo) {
    btnMobile.setAttribute("aria-expanded", temAtivo);
    btnMobile.setAttribute("aria-label", "fechar menu");
  }else{
    btnMobile.setAttribute("aria-expanded" , temAtivo)
    btnMobile.setAttribute("aria-label" , "abrir menu")
  }
  
}

btnMobile.addEventListener("click", ativarMenu);
window.addEventListener("resize", () => {
  const larguraTela = window.innerWidth > 768;

  if (larguraTela) {
    html.classList.remove("ativo");
  }
});
