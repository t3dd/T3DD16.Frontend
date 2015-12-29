 /*
  * TODO: ES5 for now until I make a webpack plugin for protractor
  */
describe('App', function() {

  beforeEach(function() {
    browser.get('/');
  });


  it('should have a title', function() {
    var subject = browser.getTitle();
    var result  = 'T3DD16 - TYPO3 Developer Days 2016';
    expect(subject).toEqual(result);
  });

});
