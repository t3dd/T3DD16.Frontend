import { T3dd16Page } from './app.po';

describe('t3dd16 App', function() {
  let page: T3dd16Page;

  beforeEach(() => {
    page = new T3dd16Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
