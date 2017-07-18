import { SampleAuth0ProjectPage } from './app.po';

describe('sample-auth0-project App', () => {
  let page: SampleAuth0ProjectPage;

  beforeEach(() => {
    page = new SampleAuth0ProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
