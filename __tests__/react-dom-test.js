/**
 * React DOM 模块测试
 */

describe('React DOM 功能测试', () => {
  let ReactDOM, container;

  beforeEach(() => {
    // 在每个测试前导入 ReactDOM 并创建容器
    ReactDOM = require('../src/react-dom');
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // 清理测试环境
    document.body.removeChild(container);
    jest.resetModules();
  });

  describe('createRoot 函数', () => {
    it('应该创建根节点对象', () => {
      const root = ReactDOM.createRoot(container);
      
      expect(root).toBeDefined();
      expect(typeof root.render).toBe('function');
      expect(typeof root.unmount).toBe('function');
    });

    it('应该抛出错误当容器无效时', () => {
      expect(() => {
        ReactDOM.createRoot(null);
      }).toThrow();

      expect(() => {
        ReactDOM.createRoot(undefined);
      }).toThrow();
    });
  });

  describe('render 方法', () => {
    it('应该渲染内容到容器', () => {
      // 由于是简化版本，我们只测试渲染方法是否存在
      const root = ReactDOM.createRoot(container);
      
      expect(typeof root.render).toBe('function');
      
      // 测试渲染调用不抛出错误
      expect(() => {
        root.render({ type: 'div', props: { children: 'Hello' } });
      }).not.toThrow();
    });
  });

  describe('unmount 方法', () => {
    it('应该卸载根节点', () => {
      const root = ReactDOM.createRoot(container);
      
      expect(typeof root.unmount).toBe('function');
      
      // 测试卸载调用不抛出错误
      expect(() => {
        root.unmount();
      }).not.toThrow();
    });
  });

  describe('unmountComponentAtNode 函数', () => {
    it('应该正确卸载组件', () => {
      expect(typeof ReactDOM.unmountComponentAtNode).toBe('function');
      
      // 测试卸载不存在的组件返回 false
      const result = ReactDOM.unmountComponentAtNode(container);
      expect(result).toBe(false);
    });

    it('当容器无效时应该返回 false', () => {
      const result1 = ReactDOM.unmountComponentAtNode(null);
      const result2 = ReactDOM.unmountComponentAtNode(undefined);
      
      expect(result1).toBe(false);
      expect(result2).toBe(false);
    });
  });

  describe('findDOMNode 函数', () => {
    it('应该返回 DOM 节点或 null', () => {
      expect(typeof ReactDOM.findDOMNode).toBe('function');
      
      // 测试传入 null 和 undefined 返回 null
      expect(ReactDOM.findDOMNode(null)).toBe(null);
      expect(ReactDOM.findDOMNode(undefined)).toBe(null);
      
      // 测试传入 DOM 节点返回自身
      const div = document.createElement('div');
      expect(ReactDOM.findDOMNode(div)).toBe(div);
    });
  });

  describe('createPortal 函数', () => {
    it('应该创建门户对象', () => {
      const children = 'Portal content';
      const portalContainer = document.createElement('div');
      const portal = ReactDOM.createPortal(children, portalContainer);
      
      expect(portal).toBeDefined();
      expect(portal.children).toBe(children);
      expect(portal.containerInfo).toBe(portalContainer);
    });
  });

  describe('hydrateRoot 函数', () => {
    it('应该创建水合根节点', () => {
      expect(typeof ReactDOM.hydrateRoot).toBe('function');
      
      // 测试创建水合根节点不抛出错误
      expect(() => {
        ReactDOM.hydrateRoot(container, { type: 'div', props: {} });
      }).not.toThrow();
    });
  });
});