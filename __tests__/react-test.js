/**
 * React 核心模块测试
 */

describe('React 核心功能测试', () => {
  let React;

  beforeEach(() => {
    // 在每个测试前导入 React
    React = require('../src/react');
  });

  afterEach(() => {
    // 清理模块缓存
    jest.resetModules();
  });

  describe('createElement 函数', () => {
    it('应该创建正确的 React 元素对象', () => {
      const element = React.createElement('div', { className: 'test' }, 'Hello');
      
      expect(element).toBeDefined();
      expect(element.type).toBe('div');
      expect(element.props.className).toBe('test');
      expect(element.props.children).toBe('Hello');
    });

    it('应该正确处理多个子元素', () => {
      const element = React.createElement(
        'div',
        null,
        'Child 1',
        'Child 2',
        'Child 3'
      );
      
      expect(element.props.children).toHaveLength(3);
      expect(element.props.children[0]).toBe('Child 1');
      expect(element.props.children[1]).toBe('Child 2');
      expect(element.props.children[2]).toBe('Child 3');
    });

    it('应该正确处理 key 和 ref 属性', () => {
      const refCallback = () => {};
      const element = React.createElement(
        'div',
        { key: 'test-key', ref: refCallback }
      );
      
      expect(element.key).toBe('test-key');
      expect(element.ref).toBe(refCallback);
      expect(element.props.key).toBeUndefined();
      expect(element.props.ref).toBeUndefined();
    });
  });

  describe('Component 类', () => {
    it('应该正确初始化组件实例', () => {
      const TestComponent = class extends React.Component {
        constructor(props) {
          super(props);
        }
      };
      
      const props = { test: 'value' };
      const instance = new TestComponent(props);
      
      expect(instance.props).toBe(props);
      expect(instance.isReactComponent).toBeDefined();
    });

    it('应该有 setState 方法', () => {
      const TestComponent = class extends React.Component {};
      const instance = new TestComponent();
      
      expect(typeof instance.setState).toBe('function');
    });

    it('应该有 forceUpdate 方法', () => {
      const TestComponent = class extends React.Component {};
      const instance = new TestComponent();
      
      expect(typeof instance.forceUpdate).toBe('function');
    });
  });

  describe('PureComponent 类', () => {
    it('应该是 Component 的子类', () => {
      const PureTestComponent = class extends React.PureComponent {};
      const instance = new PureTestComponent();
      
      expect(instance.isReactComponent).toBeDefined();
      expect(instance.isPureReactComponent).toBe(true);
    });
  });

  describe('isValidElement 函数', () => {
    it('应该正确识别 React 元素', () => {
      const element = React.createElement('div');
      const nonElement = { type: 'div', props: {} };
      
      expect(React.isValidElement(element)).toBe(true);
      expect(React.isValidElement(nonElement)).toBe(false);
      expect(React.isValidElement(null)).toBe(false);
      expect(React.isValidElement(undefined)).toBe(false);
      expect(React.isValidElement('string')).toBe(false);
    });
  });

  describe('createContext 函数', () => {
    it('应该创建正确的上下文对象', () => {
      const defaultValue = 'default';
      const context = React.createContext(defaultValue);
      
      expect(context).toBeDefined();
      expect(context.Provider).toBeDefined();
      expect(context.Consumer).toBeDefined();
    });
  });
});