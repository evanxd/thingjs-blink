'use strict';

module.exports = {
  /**
   * The run method is the start point of the extension.
   * @param {Object} params          The extension parameters.
   * @param {Led}    params.led      The LED instance.
   * @param {Number} params.interval The blinking rate.
   */
  run: function(params) {
    params.led.blink(params.interval);
  }
}
