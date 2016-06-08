export class T3DD16Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('t3-dd16-app h1')).getText();
  }
}
