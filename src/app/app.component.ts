import { Component } from '@angular/core';

@Component({
  selector: 'apm-root',
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      <apm-products></apm-products>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = 'APM Product Management';
}
