import { bindable } from 'aurelia-framework';
import { MDCRipple } from '@material/ripple';

export class MdButton {
  @bindable value;
  button: HTMLBaseElement;

  attached() {
    new MDCRipple(this.button);
  }

  valueChanged(newValue, oldValue) {

  }
}

