import { JediPage } from './app.po';

describe('jedi App', () => {
  let page: JediPage;

  beforeEach(() => {
    page = new JediPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
