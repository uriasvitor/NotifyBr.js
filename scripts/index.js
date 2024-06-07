// index.js
class Notify {
  mensage = "";
  type = "";
  delay = 0;

  createNotify(mensage, type, delay) {
    const typeLowerCase = type.toLocaleLowerCase();
    const delayInt = parseInt(delay);
    console.log(delay);
    console.log(delayInt);

    if (isNaN(delayInt)) {
      return console.error(
        `Delay must be a number, the current delay is a string`
      );
    }

    const notifyIdElement = document.getElementById("notify");

    if (!(mensage && type)) {
      return console.error("Please provide a mensage and type");
    }

    if (
      typeLowerCase !== "erro" &&
      typeLowerCase !== "warn" &&
      typeLowerCase !== "info" &&
      typeLowerCase !== "sucess"
    ) {
      return console.error(
        "Please just choose one of these: 'erro', 'warn', 'info', 'sucess'"
      );
    }

    const notifyId = this.getRandomNumber();

    notifyIdElement.insertAdjacentHTML(
      `beforeend`,
      `<p id="notify-${notifyId}" class="${typeLowerCase}">${mensage}</p>`
    );

    const getCurrentNotify = document.querySelectorAll(`#notify-${notifyId}`);

    setTimeout(() => {
      console.log(getCurrentNotify);
      getCurrentNotify.forEach((elements) => elements.remove());
    }, delayInt);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 50);
  }
}

export default Notify;
