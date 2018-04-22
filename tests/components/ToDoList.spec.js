import { mount, shallow } from '@vue/test-utils';
import ToDoList from '@/components/ToDoList';
import Task from '@/components/Task';
import Header from '@/components/Header';
import TaskStub from '../stubs/Task';

let mocks;

describe('Component ToDoList', () => {
  beforeEach(() => {
    mocks = {
      $store: {
        dispatch: jest.fn(),
        getters: {
          allTasks: []
        },
        state: {
          activeTask: {}
        }
      }
    };
  });

  test('it has name', () => {
    const wrapper = shallow(ToDoList, { mocks });
    expect(wrapper.name()).toBe('ToDoList');
  });

  test('it renders Task component', () => {
    mocks.$store.getters.allTasks = ['STRING'];
    const wrapper = shallow(ToDoList, { mocks });
    expect(wrapper.contains(Task)).toBe(true);
  });

  test('it renders as many Task components as tasks', () => {
    mocks.$store.getters.allTasks = [1, 2];
    const wrapper = shallow(ToDoList, {
      stubs: {
        Task: TaskStub
      },
      mocks
    });
    const tasks = wrapper.findAll(Task);
    expect(tasks.length).toBe(2);
  });

  test('it passes right props to Task component', () => {
    mocks.$store.getters.allTasks = ['MY PROP'];
    const wrapper = shallow(ToDoList, {
      stubs: {
        Task: TaskStub
      },
      mocks
    });
    const task = wrapper.find(Task);
    expect(task.props()).toEqual({ task: 'MY PROP' });
  });

  test('it renders Header component', () => {
    const wrapper = shallow(ToDoList, {
      stubs: {
        Header: '<div id="header"></div>'
      },
      mocks
    });
    expect(wrapper.contains('#header')).toBe(true);
  });

  test('it calls deleteTask method when task component emits delete event', () => {
    const wrapper = shallow(ToDoList, {
      mocks,
      computed: {
        allTasks: () => ['MY PROP']
      }
    });
    const task = wrapper.find(Task);
    task.vm.$emit('delete');
    expect(mocks.$store.dispatch).toHaveBeenCalledTimes(1);
    expect(mocks.$store.dispatch.mock.calls[0][0]).toBe('deleteTask');
    expect(mocks.$store.dispatch.mock.calls[0][1]).toBe(0);
  });

  test('it calls completeTask method when task component emits complete event', () => {
    const wrapper = shallow(ToDoList, {
      mocks,
      computed: {
        allTasks: () => ['MY PROP']
      }
    });
    const task = wrapper.find(Task);
    task.vm.$emit('complete');
    expect(mocks.$store.dispatch).toHaveBeenCalledTimes(1);
    expect(mocks.$store.dispatch.mock.calls[0][0]).toBe('completeTask');
    expect(mocks.$store.dispatch.mock.calls[0][1]).toBe(0);
  });

  test('it renders activeTask name', () => {
    mocks.$store.state.activeTask = { name: 'Task Name' };
    const wrapper = shallow(ToDoList, { mocks });
    expect(wrapper.text()).toContain('Task Name');
  });

  test('it calls addTask action when button is clicked', () => {
    const wrapper = shallow(ToDoList, { mocks });
    const newTextInput = wrapper.find('input[type=text]');
    newTextInput.element.value = 'My new task';
    newTextInput.trigger('input');

    const button = wrapper.find('button');
    button.trigger('click');
    expect(mocks.$store.dispatch).toHaveBeenCalledTimes(1);
    expect(mocks.$store.dispatch.mock.calls[0][0]).toBe('addTask');
    expect(mocks.$store.dispatch.mock.calls[0][1]).toBe('My new task');
  });
});
