import { T3DD16Page } from './app.po';

describe('t3-dd16 App', function() {
  let page: T3DD16Page;

  beforeEach(() => {
    page = new T3DD16Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('t3-dd16 works!');
  });
});
