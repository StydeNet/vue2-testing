import { mount } from 'vue-test-utils';
import App from '@/App';

test('component has a name', () => {
  const wrapper = mount(App);
  expect(wrapper.name()).toBe('App');
});

test('default data is correct', () => {
  const wrapper = mount(App);
  expect(wrapper.vm.msg).toBe('Hello World!');
});

test('msg data is displayed', () => {
  const wrapper = mount(App);
  expect(wrapper.text()).toContain('Hello World!');
});

test('msg changes when button is clicked', () => {
  const wrapper = mount(App);
  const button = wrapper.find('button');
  button.trigger('click');
  expect(wrapper.html()).toContain('Updated text');
});
