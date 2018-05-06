import { mount, shallow, RouterLinkStub, config } from '@vue/test-utils';
import Task from '@/components/Task';

config.stubs['router-link'] = '<div />';

describe('Component Task', () => {
  let mocks;

  beforeEach(() => {
    mocks = {
      $store: {
        dispatch: jest.fn()
      }
    };
  });
  test('it has name', () => {
    const wrapper = mount(Task);
    expect(wrapper.name()).toBe('Task');
  });

  test('it renders task prop', () => {
    const wrapper = mount(Task);
    wrapper.setProps({ task: { name: 'My new Task' } });
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
      propsData: { task: { name: 'MY TASK' } }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toEqual({
      path: '/task',
      params: {
        task: { name: 'MY TASK' }
      }
    });
  });

  test('checkbox is checked if task.done is true', () => {
    const wrapper = shallow(Task, {
      propsData: {
        task: { name: 'NAME', done: true }
      }
    });
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.element.checked).toBe(true);
  });

  test('checkbox is not checked if task.done is false', () => {
    const wrapper = shallow(Task, {
      propsData: {
        task: { name: 'NAME', done: false }
      }
    });
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.element.checked).toBe(false);
  });

  test('it calls to completeTask action when checkbox is clicked and is false', () => {
    const wrapper = shallow(Task, {
      mocks,
      propsData: {
        task: { name: 'My Task' }
      }
    });
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.element.checked = false;
    checkbox.trigger('click');
    expect(mocks.$store.dispatch).toHaveBeenCalledTimes(1);
    expect(mocks.$store.dispatch.mock.calls[0][0]).toBe('completeTask');
    expect(mocks.$store.dispatch.mock.calls[0][1]).toEqual({ name: 'My Task' });
  });

  test('it calls to uncompleteTask action when checkbox is clicked and is true', () => {
    const wrapper = shallow(Task, {
      mocks,
      propsData: {
        task: { name: 'My Task' }
      }
    });
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.element.checked = true;
    checkbox.trigger('click');
    expect(mocks.$store.dispatch).toHaveBeenCalledTimes(1);
    expect(mocks.$store.dispatch.mock.calls[0][0]).toBe('uncompleteTask');
    expect(mocks.$store.dispatch.mock.calls[0][1]).toEqual({ name: 'My Task' });
  });
});
