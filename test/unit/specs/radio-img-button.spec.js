import { createVue, destroyVM } from '../util';

describe('RadioImgButton', () => {
  let vm;
  const imgUrl = 'http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg';
  const text = 'radio-img-button';
  const description = '我是radio1';
  const name = 'nameStr';
  const basicVm = createVue({
    template: `
        <el-radio-img-button 
          v-model="value" 
          :imgUrl= "imgUrl"
          label="1" 
          :text="text" 
          vertical
          :name="name"
          width="310" 
          description="description">
        </el-radio-img-button>
      `,
    data() {
      return {
        value: '',
        imgUrl,
        text,
        description,
        name
      };
    }
  }, true);
  afterEach(() => {
    if (vm) {
      destroyVM(vm);
    }
    destroyVM(basicVm);
  });

  it('create', done => {
    let radioElm = basicVm.$el;
    expect(radioElm.classList.contains('el-radio-img-button')).to.be.true;
    radioElm.click();
    setTimeout(_ => {
      expect(radioElm.querySelector('.is-checked')).to.be.ok;
      done();
    }, 10);
  });

  it('disabled', done => {
    vm = createVue({
      template: `
        <el-radio-img-button 
          v-model="value" 
          imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg" 
          label="1" text="radio-img-button" 
          vertical 
          disabled
          description="我是radio1">
        </el-radio-img-button>
      `,
      data() {
        return {
          value: ''
        };
      }
    }, true);
    let radioElm = vm.$el;
    radioElm.click();
    setTimeout(_ => {
      expect(vm.value === '').to.be.true;
      expect(radioElm.querySelector('.is-disabled')).to.be.ok;
      done();
    }, 10);
  });

  it('name', () => {
    const inputDom = basicVm.$el.getElementsByClassName('el-radio-img-button__original')[0];
    expect(inputDom.name === name).to.be.true;
  });

  it('width', () => {
    const elm = basicVm.$el;
    expect(elm.style.width === '310px').to.be.true;
  });

  it('imgUrl', () => {
    const imgDom = basicVm.$el.getElementsByClassName('el-radio-img-button__img')[0];
    expect(imgDom.src === imgUrl).to.be.true;
  });

  it('text', () => {
    const textDom = basicVm.$el.getElementsByClassName('el-radio-img-button__text')[0];
    expect(textDom.title === text && textDom.innerText === text).to.be.true;
  });

  it('description', () => {
    const descriptionStr = '我是radio1';
    vm = createVue({
      template: `
        <el-radio-img-button 
          v-model="value" 
          imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg" 
          label="1" text="radio-img-button" 
          disabled
          :description="descriptionStr">
        </el-radio-img-button>
      `,
      data() {
        return {
          value: '',
          descriptionStr
        };
      }
    }, true);
    const descriptionDom = vm.$el.getElementsByClassName('el-radio-img-button__description')[0];
    expect(descriptionDom.title === descriptionStr && descriptionDom.innerText === descriptionStr).to.be.true;
  });
});

