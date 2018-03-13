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
    expect(wrapper.text()).toContain('My new Task');
  });

  test('it emmits delete event when delete button is clicked', () => {
    const wrapper = mount(Task);
    const button = wrapper.find('#delete');
    button.trigger('click');
    expect(wrapper.emitted().delete).toBeTruthy();
  });
});
