import { createTest, destroyVM } from '../util';
import RadioImgButton from 'packages/radio-img-button';

describe('RadioImgButton', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(RadioImgButton, true);
    expect(vm.$el).to.exist;
  });
});

