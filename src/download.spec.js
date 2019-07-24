import { createSandbox } from 'sinon';

import download from './download';

const sandbox = createSandbox();
const elementApi = {setAttribute: () => {}, style:{display:''}, click: () => {}};

describe('download.js', () => {
  let appendChild;
  let removeChild;
  let createElement;
  let setAttribute;
  let click;
  beforeEach(() => {
    appendChild = sandbox.stub(document.body, 'appendChild');
    removeChild = sandbox.stub(document.body, 'removeChild');
    createElement = sandbox.stub(document, 'createElement');
    setAttribute = sandbox.stub(elementApi, 'setAttribute');
    click = sandbox.stub(elementApi, 'click');
    createElement.returns(elementApi);

    download('fileName', 'base64')
  })
  afterEach(() => {
    sandbox.restore();
  })
  it('creates a pseudo-element', () => {
    expect(createElement.calledWith()).toBe(true);
  });
  it('sets attritubes for href and download', () => {
    const setAttrCalls = setAttribute.getCalls().map(call => call.args);
    expect(setAttrCalls[0]).toEqual(['href','data:application/zip;base64,base64'])
    expect(setAttrCalls[1]).toEqual(['download','fileName'])
  });
  it('adds and removes the child to the body', () => {
    expect(appendChild.callCount).toBe(1);
    expect(removeChild.callCount).toBe(1);
  });
  it('element is clicked', () => {
    expect(click.callCount).toBe(1);
  })
})