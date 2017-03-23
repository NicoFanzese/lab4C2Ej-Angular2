import { Lab4C2Page } from './app.po';

describe('lab4-c2 App', function() {
  let page: Lab4C2Page;

  beforeEach(() => {
    page = new Lab4C2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
