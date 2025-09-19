import invariant from '../shared/invariant';

/**
 * Component 基类，React 组件的基础实现
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = {};
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

Component.prototype.setState = function(partialState, callback) {
  invariant(
    typeof partialState === 'object' || typeof partialState === 'function' || partialState == null,
    'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
  );
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

Component.prototype.forceUpdate = function(callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * PureComponent 基类，实现了浅比较优化
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = {};
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
PureComponent.prototype = new ComponentDummy();
PureComponent.prototype.constructor = PureComponent;

// 复制静态方法
Object.assign(PureComponent.prototype, Component.prototype);

// 标记为 PureComponent
PureComponent.prototype.isPureReactComponent = true;

/**
 * 空更新队列，用于开发环境
 */
const ReactNoopUpdateQueue = {
  isMounted: function(inst) {
    return false;
  },
  enqueueSetState: function(inst, payload, callback) {
    console.warn('setState(...) on an unmounted component.');
  },
  enqueueReplaceState: function(inst, payload, callback) {
    console.warn('replaceState(...) on an unmounted component.');
  },
  enqueueForceUpdate: function(inst, callback) {
    console.warn('forceUpdate(...) on an unmounted component.');
  }
};

export { Component, PureComponent };
