import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-nz-card-noborder',
  template: `
    <h4>No border <a href="https://github.com/cipchk/ng-zorro-antd-extra/blob/master/demo/src/app/nz-card-v3/noborder.component.ts" target="_blank">source</a></h4>
    <div style="background: #ECECEC; padding: 30px;">
        <nz-card-v3 [nzTitle]="'Card title'" [nzBordered]="false">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </nz-card-v3>
    </div>
`
})
export class DemoNzCardNoBoarderComponent {
}
