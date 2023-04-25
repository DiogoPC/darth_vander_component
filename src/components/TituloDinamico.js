class TituloDinamico extends HTMLElement{
  constructor(){
    super();

    const shadow = this.attachShadow({mode: "open"});

    //base do componente
    const compomenteRoot = document.createElement("h1");
    compomenteRoot.textContent = this.getAttribute("titulo");

    //estilizar compomente

    const style = document.createElement("style");
    style.textContent = `
        h1{
          color: red;
        }
    `
    //enviar para  a shadown
    shadow.appendChild(compomenteRoot);
    shadow.appendChild(style);
  }
}

customElements.define("titulo-dinamico", TituloDinamico);