import { DecentStorePage } from './app.po';

describe('decent-store App', () => {
  let page: DecentStorePage;

  beforeEach(() => {
    page = new DecentStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('DECENT App Store');
  });
});
