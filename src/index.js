/**
 * A class for creating and managing notifications on a web page.
 */
class Notify {
  constructor() {
    this.timeoutIds = new Map(); // Store timeouts for each notification
  }

  /**
   * Creates a notification and displays it on the web page.
   * @param {string} message - The message to display in the notification.
   * @param {string} type - The type of notification ('erro', 'warn', 'info', 'sucess').
   * @param {number|string} delay - The time in milliseconds before the notification is removed.
   * @throws Will throw an error if the message is not a string, if the type is invalid, or if the delay is not a number.
   */
  createNotify(message, type, delay) {
    const notifyIdElement = document.getElementById("notify");

    // Validate inputs
    this.validateInputs({ message, type, delay });

    // Parse delay to an integer
    const delayInt = parseInt(delay);

    // Generate a unique random ID between 0 and 50 for the notification.
    const notifyId = Math.floor(Math.random() * 50);

    // Insert the notification into the DOM
    notifyIdElement.insertAdjacentHTML(
      'beforeend',
      `<div id="notify-${notifyId}" class="${type.toLowerCase()}">${message}</div>`
    );

    // Get the current notification element by ID
    const getCurrentNotify = document.getElementById(`notify-${notifyId}`);

    // Remove the notification after the specified delay
    const timeoutId = setTimeout(() => {
      if (getCurrentNotify) {
        getCurrentNotify.remove();
      }
      this.timeoutIds.delete(notifyId);
    }, delayInt);

    // Store the timeout ID
    this.timeoutIds.set(notifyId, timeoutId);
  }

  /**
   * Validates the inputs for creating a notification.
   * @param {Object} params - The parameters for validation.
   * @param {string} params.message - The message to display in the notification.
   * @param {string} params.type - The type of notification ('erro', 'warn', 'info', 'sucess').
   * @param {number|string} params.delay - The time in milliseconds before the notification is removed.
   * @throws Will throw an error if the message is not a string, if the type is invalid, or if the delay is not a number.
   */
  validateInputs({ message, type, delay }) {
    const validTypes = ['erro', 'warn', 'info', 'sucess'];

    // Check if message is a non-empty string
    if (typeof message !== 'string' || !message.trim()) {
      throw new Error("Please provide a valid message");
    }

    // Check if type is one of the valid types
    if (!validTypes.includes(type.toLowerCase())) {
      throw new Error("Please choose one of these types: 'erro', 'warn', 'info', 'sucess'");
    }

    // Check if delay is a number
    if (isNaN(parseInt(delay))) {
      throw new Error("Delay must be a number");
    }
  }

  /**
   * Delete the notify without delay
   * @param {string} notifyId - The notify id.
   * @throws Will throw a error if id is not found
   */
  deleteInstant(notifyId) {
    const getCurrentNotify = document.getElementById(`notify-${notifyId}`);

    if (getCurrentNotify) {
      getCurrentNotify.remove();
      if (this.timeoutIds.has(notifyId)) {
        clearTimeout(this.timeoutIds.get(notifyId));
        this.timeoutIds.delete(notifyId);
      }
    } else {
      throw new Error("Notify id is not found");
    }
  }
}
