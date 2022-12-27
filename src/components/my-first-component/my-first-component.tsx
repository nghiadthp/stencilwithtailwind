import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-first-component',
  styleUrl: 'my-first-component.css',
  shadow: true,
})
export class MyFirstComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
