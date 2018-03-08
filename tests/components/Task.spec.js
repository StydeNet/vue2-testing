import { mount } from '@vue/test-utils';
import Task from '@/components/Task';

describe('Component Task', () => {
  test('it has name', () => {
    const wrapper = mount(Task);
    expect(wrapper.name()).toBe('Task');
  });

  test('it renders task prop', () => {
    const wrapper = mount(Task);
    wrapper.setProps({ task: 'My new Task' });
    expect(wrapper.text()).toBe('My new Task');
  });
});
