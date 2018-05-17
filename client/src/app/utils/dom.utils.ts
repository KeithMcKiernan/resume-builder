export class DomUtils {

  public static hasClass(el: HTMLElement, className: string) {
    return new RegExp(` ${className} `).test(` ${el.className} `);
  }

  public static addClass(el: HTMLElement, className: string) {
    if (!this.hasClass(el, className)) {
      el.className += ` ${className}`;
    }
  }

  public static removeClass(el: HTMLElement, className: string) {
    let newClass = ` ${el.className.replace(/[\t\r\n]/g, ' ')} `;
    if (this.hasClass(el, className)) {
      while (newClass.includes(` ${className} `)) {
        newClass = newClass.replace(` ${className} `, ' ');
      }
      el.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  }

  public static toggleClass(el: HTMLElement, className: string) {
    if (!this.hasClass(el, className)) {
      this.addClass(el, className);
    } else {
      this.removeClass(el, className);
    }
  }
}
