import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-imagems',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagemComponent {}
