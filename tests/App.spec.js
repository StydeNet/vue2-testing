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
