import { TesteDateTimePickerPage } from './app.po';

describe('teste-date-time-picker App', () => {
  let page: TesteDateTimePickerPage;

  beforeEach(() => {
    page = new TesteDateTimePickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
