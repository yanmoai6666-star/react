import { Component } from './ReactBaseClasses';

// React 元素标识符
const $$typeof = Symbol.for('react.element');

// 创建 React 元素
function createElement(type, config, children) {
  const props = {};
  
  // 处理配置属性
  if (config != null) {
    for (const propName in config) {
      if (hasOwnProperty.call(config, propName) && propName !== 'key' && propName !== 'ref') {
        props[propName] = config[propName];
      }
    }
  }
  
  // 处理子元素
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }
  
  // 返回 React 元素
  return {
    $$typeof,
    type,
    key: config && config.key !== undefined ? '' + config.key : undefined,
    ref: config && config.ref !== undefined ? config.ref : undefined,
    props,
    _owner: null
  };
}

// 克隆元素
function cloneElement(element, config, children) {
  if (element === null || element === undefined) {
    throw new Error('React.cloneElement(...): The first argument must not be null or undefined.');
  }
  
  const props = Object.assign({}, element.props);
  const key = config && config.key !== undefined ? '' + config.key : element.key;
  const ref = config && config.ref !== undefined ? config.ref : element.ref;
  
  // 处理新的 props
  if (config != null) {
    for (const propName in config) {
      if (hasOwnProperty.call(config, propName) && propName !== 'key' && propName !== 'ref') {
        props[propName] = config[propName];
      }
    }
  }
  
  // 处理新的子元素
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }
  
  return {
    $$typeof: element.$$typeof,
    type: element.type,
    key,
    ref,
    props,
    _owner: null
  };
}

// 检查是否为有效的 React 元素
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === $$typeof;
}

// 创建上下文
function createContext(defaultValue) {
  const context = {
    $$typeof: Symbol.for('react.context'),
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  
  context.Provider = {
    $$typeof: Symbol.for('react.provider'),
    _context: context
  };
  
  context.Consumer = {
    $$typeof: Symbol.for('react.context'),
    _context: context,
    _calculateChangedBits: null
  };
  
  return context;
}

// 生成 React 实例
const React = {
  createElement,
  cloneElement,
  isValidElement,
  createContext,
  Component,
  PureComponent: Component,
  Fragment: Symbol.for('react.fragment'),
  StrictMode: Symbol.for('react.strict_mode'),
  Suspense: Symbol.for('react.suspense')
};

export default React;
export { createElement, cloneElement, isValidElement, createContext };