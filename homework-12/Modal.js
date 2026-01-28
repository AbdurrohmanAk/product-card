export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.closeButton = this.modal.querySelector('.modal-close-button');
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    this.#initClose();
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    this.#destroyClose();
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  handleClose() {
    this.close();
  }

  handleOverlayClick() {
    this.handleClose();
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose() {
    this.closeButton.addEventListener('click', this.handleClose);

    if(this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.handleOverlayClick);
    }
  }

  #destroyClose() {
    this.closeButton.removeEventListener('click', this.handleClose);

    if(this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.handleOverlayClick);
    }
  }
}