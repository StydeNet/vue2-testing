import { mount } from 'vue-test-utils';
import App from '@/App';

test('component has a name', () => {
  const wrapper = mount(App);
  expect(wrapper.name()).toBe('App');
});

test('default data is correct', () => {
  const wrapper = mount(App);
  expect(wrapper.vm.msg).toBe('');
  expect(wrapper.vm.firstName).toBe('');
  expect(wrapper.vm.lastName).toBe('');
});

test('msg data is displayed', () => {
  const wrapper = mount(App);
  wrapper.setData({ msg: 'Hello World!' });
  expect(wrapper.text()).toContain('Hello World!');
});

test('msg is bound to input value', () => {
  const wrapper = mount(App);
  wrapper.setData({ msg: 'Initial text' });
  const input = wrapper.find('input');
  input.element.value = 'Updated text';
  input.trigger('input');
  expect(wrapper.html()).toContain('Updated text');
});

test('fullName computed is firstName + lastName', () => {
  const wrapper = mount(App);
  wrapper.setData({
    firstName: 'John',
    lastName: 'Doe'
  });
  expect(wrapper.vm.fullName).toBe('John Doe');
});

test('fullName computed is displayed', () => {
  const wrapper = mount(App, {
    computed: {
      fullName: () => 'Jane Doe'
    }
  });

  expect(wrapper.text()).toContain('Jane Doe');
});

test('toUppercase method is called when button is pressed', () => {
  const toUppercase = jest.fn();
  const wrapper = mount(App, {
    methods: {
      toUppercase
    }
  });
  expect(toUppercase).toHaveBeenCalledTimes(0);
  const button = wrapper.find('button');
  button.trigger('click');
  expect(toUppercase).toHaveBeenCalledTimes(1);
});

test('firstName is in uppercase when toUppercase method is called', () => {
  const wrapper = mount(App);
  wrapper.setData({
    firstName: 'John'
  });
  wrapper.vm.toUppercase();
  expect(wrapper.vm.firstName).toBe('JOHN');
});

test('msg is displayed inside message span', () => {
  const wrapper = mount(App);
  wrapper.setData({
    msg: 'Hello World'
  });
  const span = wrapper.find('span#message');
  expect(span.text()).toBe('Hello World');
});

test('fullName is displayed inside full-name span', () => {
  const wrapper = mount(App, {
    computed: { fullName: () => 'John Doe' }
  });
  const span = wrapper.find('span#full-name');
  expect(span.text()).toBe('John Doe');
});

test('message is displayed before full-name', () => {
  const wrapper = mount(App, {
    computed: { fullName: () => 'John Doe' }
  });
  wrapper.setData({
    msg: 'Hello World'
  });
  const spans = wrapper.findAll('span');
  expect(spans.wrappers[0].text()).toBe('Hello World');
  expect(spans.wrappers[1].text()).toBe('John Doe');
});

test('warning is displayed if msg is empty', () => {
  const wrapper = mount(App);
  wrapper.setData({
    msg: ''
  });
  expect(wrapper.contains('#warning')).toBe(true);
});

test('warning is not displayed if msg is not empty', () => {
  const wrapper = mount(App);
  wrapper.setData({
    msg: 'something'
  });
  expect(wrapper.contains('#warning')).toBe(false);
});
