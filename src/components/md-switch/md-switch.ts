import {MDCSwitch} from '@material/switch';

export class MdSwitch {
  element: HTMLBaseElement;
  private _mdc: MDCSwitch;

  attached() {
    this._mdc = new MDCSwitch(this.element);
  }
}
