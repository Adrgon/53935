const $ = function (e) {
    return document.querySelector(e);
  },
  $$ = function (e) {
    return document.querySelectorAll(e);
  };
(HTMLElement.prototype.on = function (e, t, n) {
  return this.addEventListener(e, t, n);
}),
  (HTMLElement.prototype.off = function (e, t) {
    return this.removeEventListener(e, t);
  }),
  (HTMLElement.prototype.$ = function (e) {
    return document.querySelector(e);
  }),
  (HTMLElement.prototype.$$ = function (e) {
    return document.querySelectorAll(e);
  });
