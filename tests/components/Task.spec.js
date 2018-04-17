import { mount, shallow, RouterLinkStub, config } from '@vue/test-utils';
import Task from '@/components/Task';

config.stubs['router-link'] = '<div />';

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

  test('it renders default slot', () => {
    const wrapper = shallow(Task, {
      slots: {
        default: 'DEFAULT SLOT'
      }
    });
    expect(wrapper.text()).toContain('DEFAULT SLOT');
  });

  test('it renders close slot', () => {
    const wrapper = shallow(Task, {
      slots: {
        close: 'CLOSE SLOT'
      }
    });
    expect(wrapper.find('#delete').text()).toContain('CLOSE SLOT');
  });

  test('it renders the TaskView router-link', () => {
    const wrapper = shallow(Task, {
      stubs: {
        'router-link': RouterLinkStub
      },
      propsData: { task: 'MY TASK' }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toEqual({
      path: '/task',
      params: {
        task: 'MY TASK'
      }
    });
  });
});