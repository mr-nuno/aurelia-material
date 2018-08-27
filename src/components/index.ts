import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./md-button/md-button'),
    PLATFORM.moduleName('./md-switch/md-switch'),
    PLATFORM.moduleName('./md-toolbar/md-toolbar'),
    PLATFORM.moduleName('./md-card/md-card')
  ]);
}
