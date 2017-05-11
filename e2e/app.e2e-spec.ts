import { RaProject04Page } from './app.po';

describe('ra-project04 App', () => {
  let page: RaProject04Page;

  beforeEach(() => {
    page = new RaProject04Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
