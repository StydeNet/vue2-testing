import { mount, shallow } from '@vue/test-utils';
import ToDoList from '@/components/ToDoList';
import Task from '@/components/Task';
import Header from '@/components/Header';
import TaskStub from '../stubs/Task';

describe('Component ToDoList', () => {
  test('it has name', () => {
    const wrapper = shallow(ToDoList);
    expect(wrapper.name()).toBe('ToDoList');
  });

  test('it renders Task component', () => {
    const wrapper = shallow(ToDoList);
    wrapper.setData({ tasks: ['hello'] });
    expect(wrapper.contains(Task)).toBe(true);
  });

  test('it renders as many Task components as tasks', () => {
    const wrapper = shallow(ToDoList, {
      stubs: {
        Task: TaskStub
      }
    });
    wrapper.setData({ tasks: [1, 2] });
    const tasks = wrapper.findAll(Task);
    expect(tasks.length).toBe(2);
  });

  test('it passes right props to Task component', () => {
    const wrapper = shallow(ToDoList, {
      stubs: {
        Task: TaskStub
      }
    });
    wrapper.setData({ tasks: ['MY PROP'] });
    const task = wrapper.find(Task);
    expect(task.props()).toEqual({ task: 'MY PROP' });
  });

  test('it renders Header component', () => {
    const wrapper = shallow(ToDoList, {
      stubs: {
        Header: '<div id="header"></div>'
      }
    });
    expect(wrapper.contains('#header')).toBe(true);
  });
});
