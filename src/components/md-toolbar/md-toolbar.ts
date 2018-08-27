
import { MDCTopAppBar } from '@material/top-app-bar';
export class MdToolbar {
  toolbar: HTMLBaseElement;
  attached() {
    new MDCTopAppBar(this.toolbar);
  }
}
