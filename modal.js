export class Modal {  
  constructor(overlayId){
    this.overlay = document.getElementById(overlayId);
    this.modal = this.overlay.querySelector(".modal-home");
    this.closeBtn = this.overlay.querySelector(".modal-off");
    this.closeBtn.addEventListener("click", () => this.close());
    this.overlay.addEventListener("click", (event) =>{
      if (event.target === this.overlay) {
        this.close();
      }
    });
  }

  open() {
    this.overlay.classList.add("modal-showed");
  }

  close() {
    this.overlay.classList.remove("modal-showed");
  }

  isOpen() {
    return this.overlay.classList.contains("modal-showed");
  }
}
