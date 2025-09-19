/**
 * ReactDOMRoot 类实现
 */
class ReactDOMRoot {
  constructor(container, options) {
    this._internalRoot = createRootImpl(container, options);
  }

  /**
   * 渲染 React 元素到根节点
   */
  render(element) {
    this._internalRoot.render(element);
    return this;
  }

  /**
   * 卸载根节点
   */
  unmount() {
    this._internalRoot.unmount();
  }
}

/**
 * 创建根节点实现
 */
function createRootImpl(container, options) {
  // 检查容器是否有效
  if (!container || typeof container.appendChild !== 'function') {
    throw new Error('Target container is not a DOM element.');
  }

  // 清理容器内容（如果不是水合模式）
  const shouldHydrate = options && options.hydrate;
  if (!shouldHydrate && container.firstChild) {
    let rootSibling;
    while ((rootSibling = container.firstChild)) {
      container.removeChild(rootSibling);
    }
  }

  // 创建内部根对象
  const internalRoot = {
    container,
    render(element) {
      // 简单的渲染实现
      if (!element) {
        return;
      }
      
      // 这里是简化版的渲染逻辑
      // 实际 React 会有复杂的协调器和渲染器
      const textNode = document.createTextNode('React Mini App');
      container.appendChild(textNode);
    },
    unmount() {
      // 卸载实现
      if (container._reactRootContainer) {
        container._reactRootContainer = null;
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    }
  };

  // 存储根节点引用
  container._reactRootContainer = internalRoot;

  return internalRoot;
}

export default ReactDOMRoot;