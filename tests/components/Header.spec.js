import { shallow } from '@vue/test-utils';
import Header from '@/components/Header';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve())
}));

const { get } = require('axios');

describe('Component header', () => {
  test('it has a name', () => {
    const wrapper = shallow(Header);
    expect(wrapper.name()).toBe('Header');
  });

  test('user comes from api call', () => {
    get.mockImplementationOnce(() => Promise.resolve('USER'));
    const wrapper = shallow(Header);
    wrapper.vm.$nextTick(() => {
      expect(get).toHaveBeenCalled();
      expect(get.mock.calls[0][0]).toBe('/api/user');
      expect(wrapper.vm.user).toBe('USER');
    });
  });
});
