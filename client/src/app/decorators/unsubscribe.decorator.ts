import { isFunction } from './../utils';

function AutoUnsubscribe(blackList: any = []) {
  return (constructor) => {
    const original = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function() {
      for (const prop in this) {
        if (this.hasOwnProperty(prop)) {
          const property = this[prop];
          if (!blackList.includes(prop)) {
            if (property && isFunction(property.unsubscribe)) {
              property.unsubscribe();
            }
          }
        }
      }
      original.apply(this, arguments);
    };
  };
}

export default AutoUnsubscribe;
