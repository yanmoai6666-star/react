import ReactDOMRoot from './client/ReactDOMRoot';
import { listenToAllSupportedEvents } from '../events/EventListener';

/**
 * 将 React 元素渲染到 DOM 容器中
 */
function render(element, container, callback) {
  // 创建根节点
  const root = createRoot(container);
  // 渲染元素
  root.render(element);
  // 执行回调
  if (callback) {
    callback();
  }
  return root;
}

/**
 * 用于服务端渲染的水合方法
 */
function hydrate(element, container, callback) {
  const root = hydrateRoot(container, element);
  if (callback) {
    callback();
  }
  return root;
}

/**
 * 卸载指定容器中的组件
 */
function unmountComponentAtNode(container) {
  if (!container) {
    return false;
  }
  
  // 查找根节点
  const root = container._reactRootContainer;
  if (!root) {
    return false;
  }
  
  // 卸载组件
  root.unmount();
  return true;
}

/**
 * 查找与 React 组件对应的 DOM 节点
 */
function findDOMNode(componentOrElement) {
  if (componentOrElement == null) {
    return null;
  }
  
  if (typeof componentOrElement === 'object' && componentOrElement.nodeType === 1) {
    return componentOrElement;
  }
  
  return null;
}

/**
 * 创建门户组件
 */
function createPortal(children, container) {
  return {
    $$typeof: Symbol.for('react.portal'),
    children,
    containerInfo: container,
    implementation: null
  };
}

/**
 * 创建根节点
 */
function createRoot(container, options) {
  return new ReactDOMRoot(container, options);
}

/**
 * 创建严格模式根节点
 */
function createStrictRoot(container, options) {
  return new ReactDOMRoot(container, {
    ...options,
    strictMode: true
  });
}

/**
 * 创建水合根节点
 */
function hydrateRoot(container, initialChildren, options) {
  return new ReactDOMRoot(container, {
    ...options,
    hydrate: true
  });
}

const ReactDOM = {
  render,
  hydrate,
  unmountComponentAtNode,
  findDOMNode,
  createPortal,
  createRoot,
  createStrictRoot,
  hydrateRoot
};

export default ReactDOM;
export { render, hydrate, unmountComponentAtNode, findDOMNode, createPortal, createRoot, createStrictRoot, hydrateRoot };
