
function hasClass(el: HTMLElement, className: string) {
  return new RegExp(` ${className} `).test(` ${el.className} `);
}

function addClass(el: HTMLElement, className: string) {
  if (!hasClass(el, className)) {
    el.className += ` ${className}`;
  }
}

function removeClass(el: HTMLElement, className: string) {
  let newClass = ` ${el.className.replace(/[\t\r\n]/g, ' ')} `;
  if (hasClass(el, className)) {
    while (newClass.includes(` ${className} `)) {
      newClass = newClass.replace(` ${className} `, ' ');
    }
    el.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}

function toggleClass(el: HTMLElement, className: string) {
  if (!hasClass(el, className)) {
    addClass(el, className);
  } else {
    removeClass(el, className);
  }
}

export {
  hasClass,
  addClass,
  removeClass,
  toggleClass
};


