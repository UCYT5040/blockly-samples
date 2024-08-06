/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from "blockly/core";
import {FieldAngle} from '@blockly/field-angle';

/**
 * A hue-picker to set the colour of a block.
 * TODO(#2159): Use the new angle field.
 */
export const colourHue = {
  init: function () {
    this.appendDummyInput()
      .appendField('hue:')
      .appendField(new FieldAngle('0', this.updateBlockColour), 'HUE');
    this.setOutput(true, 'Colour');
    this.setTooltip('Paint the block with this colour.');
    this.setHelpUrl('https://www.youtube.com/watch?v=s2_xaEvcVI0#t=55');
  },
  updateBlockColour: function (hue: number) {
    this.getSourceBlock().setColour(hue);
  },
};

/**
 * A hex input to set the colour of a block.
 */
export const colourHex = {
  init: function () {
    this.appendDummyInput()
      .appendField('hex:')
      .appendField(new Blockly.FieldTextInput('000000', this.updateBlockColour), 'HEX');
    this.setOutput(true, 'Colour');
    this.setTooltip('Paint the block with this colour.');
    this.setHelpUrl(null);
  },
  updateBlockColour: function (text: string) {
    let hex = Blockly.utils.colour.parse(text);
    if (hex) {
      this.getSourceBlock().setColour(hex);
    }
  }
};
