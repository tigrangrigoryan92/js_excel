import {ExcelComponent} from '@/core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  // constructor($root) {
  //   super($root, {
  //     name: 'Header',
  //     listeners: ['click']
  //   });
  // }

  toHTML() {
    return `
      <input
        type="text"
        class="input"
        value="New Table"
      >

      <div>
        <div class="button">
          <span class="material-icons">exit_to_app</span>
        </div>
        <div class="button">
          <span class="material-icons">delete</span>
        </div>
      </div>
    `;
  }
}
