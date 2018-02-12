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
