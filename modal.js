export class Modal {
  constructor(overlayId) {
    this.overlay = document.getElementById(overlayId);
    this.modal = this.overlay.querySelector('.modal-home');
    this.closeBtn = this.overlay.querySelector('.modal-off');
    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', (event) => {
      if (event.target === this.overlay) {
        this.close();
      }
    });
  }
  open() {
  this.overlay.classList.add('overlay--visible');
  this.modal.classList.add('modal--visible');
  }
  close() {
  this.overlay.classList.remove('overlay--visible');
  this.modal.classList.remove('modal--visible');
  }
  isOpen() {
    return this.modal.classList.contains('modal--visible');
  }
}
