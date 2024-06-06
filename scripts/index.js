// index.js
class Notify {
  mensage = "";
  type = "";
  delay = 0;
  sendData = false; // Pode ser utilizado para enviar dados de erro para o banco

  createNotify(mensage, type, delay, sendData) {
    const notifyIdElement = document.getElementById("notify");

    if (!(mensage && type)) {
      return console.error("Please provide a mensage and type");
    }

    const notifyId = this.getRandomNumber();

    notifyIdElement.insertAdjacentHTML(
      `beforeend`,
      `<p id="notify-${notifyId}" class="${type}">${mensage}</p>`
    );
    const getCurrentNotify = document.querySelectorAll(`#notify-${notifyId}`);

    setTimeout(() => {
      console.log(getCurrentNotify)
      getCurrentNotify.forEach(elements => elements.remove())
    }, delay);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 50);
  }
}

export default Notify;
