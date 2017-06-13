import { FirstnpmtestPage } from './app.po';

describe('firstnpmtest App', () => {
  let page: FirstnpmtestPage;

  beforeEach(() => {
    page = new FirstnpmtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
