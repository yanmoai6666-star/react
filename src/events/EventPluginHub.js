/**
 * 事件插件中心，管理 React 事件系统
 */
const EventPluginHub = {
  // 事件插件存储
  plugins: [],
  
  // 事件分发器
  eventDispatchers: {},
  
  // 事件监听缓存
  listeners: {},
  
  // 注册事件插件
  registerPlugin(plugin) {
    this.plugins.push(plugin);
    // 初始化插件
    if (plugin.initialize) {
      plugin.initialize();
    }
  },
  
  // 注册事件分发器
  registerDispatcher(dispatcher) {
    this.eventDispatchers[dispatcher.eventType] = dispatcher;
  },
  
  // 注册事件监听器
  addEventListener(element, eventType, handler) {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = new Map();
    }
    
    if (!this.listeners[eventType].has(element)) {
      this.listeners[eventType].set(element, []);
    }
    
    this.listeners[eventType].get(element).push(handler);
  },
  
  // 移除事件监听器
  removeEventListener(element, eventType, handler) {
    if (!this.listeners[eventType] || !this.listeners[eventType].has(element)) {
      return;
    }
    
    const handlers = this.listeners[eventType].get(element);
    const index = handlers.indexOf(handler);
    if (index !== -1) {
      handlers.splice(index, 1);
    }
  },
  
  // 分发事件
  dispatchEvent(element, eventType, nativeEvent) {
    if (!this.listeners[eventType] || !this.listeners[eventType].has(element)) {
      return;
    }
    
    const handlers = this.listeners[eventType].get(element);
    const dispatcher = this.eventDispatchers[eventType];
    
    // 创建合成事件
    const syntheticEvent = dispatcher ? dispatcher.createSyntheticEvent(nativeEvent) : nativeEvent;
    
    // 触发所有处理器
    handlers.forEach(handler => {
      try {
        handler(syntheticEvent);
      } catch (error) {
        console.error('Error in event handler:', error);
      }
    });
  },
  
  // 初始化事件系统
  initialize() {
    // 初始化插件
    this.plugins.forEach(plugin => {
      if (plugin.initialize) {
        plugin.initialize();
      }
    });
  }
};

export default EventPluginHub;