import { WhatsgoodPage } from './app.po';

describe('whatsgood App', function() {
  let page: WhatsgoodPage;

  beforeEach(() => {
    page = new WhatsgoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
