class DialogButton extends HTMLElement {
  static style = `
    <style>
      #dialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: none;
        align-items: center;
        justify-content: center;
      }

      #dialog.open {
        display: flex;
      }

      #dialogContent {
        width: 300px;
        height: 300px;
        background: white;
        padding: 10px;
      }
    </style>
  `;

  static template = `
    <button id="trigger"></button>
    <div id="dialog">
      <div id="dialogContent"></div>
    </dialog>
  `;

  label = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.label = this.getAttribute("label") || "Show Dialog";

    const dialogContent = this.innerHTML;
    this.shadowRoot.innerHTML = DialogButton.style;
    this.shadowRoot.innerHTML += DialogButton.template;

    const dialogElement = this.shadowRoot.querySelector("#dialog");
    dialogElement.addEventListener("click", function(event) {
      if (event.target.closest("#dialogContent")) {
        return;
      }

      dialogElement.classList.remove("open");
    });

    const triggerElement = this.shadowRoot.querySelector("button");
    triggerElement.innerHTML = this.label;
    triggerElement.addEventListener("click", function() {
      dialogElement.classList.add("open");
    });

    const contentElement = this.shadowRoot.querySelector("#dialogContent");
    contentElement.innerHTML = dialogContent;

    this.addEventListener("click", e => this.handleClick(e));
  }

  handleClick() {
    console.log(this.label);
  }
}

customElements.define("dialog-button", DialogButton);
