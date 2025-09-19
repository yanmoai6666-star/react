/**
 * 合成事件基类，用于 React 事件系统
 */
class SyntheticEvent {
  constructor(nativeEvent, target) {
    this.nativeEvent = nativeEvent;
    this.target = target;
    this.currentTarget = null;
    this.type = nativeEvent.type;
    this.timeStamp = nativeEvent.timeStamp || Date.now();
    
    // 阻止默认行为标记
    this.isDefaultPrevented = false;
    this.isPropagationStopped = false;
  }
  
  // 阻止默认行为
  preventDefault() {
    const event = this.nativeEvent;
    if (event.preventDefault) {
      event.preventDefault();
    } else if (typeof event.returnValue !== 'undefined') {
      event.returnValue = false;
    }
    this.isDefaultPrevented = true;
  }
  
  // 阻止冒泡
  stopPropagation() {
    const event = this.nativeEvent;
    if (event.stopPropagation) {
      event.stopPropagation();
    } else if (typeof event.cancelBubble !== 'undefined') {
      event.cancelBubble = true;
    }
    this.isPropagationStopped = true;
  }
  
  // 阻止事件捕获
  stopImmediatePropagation() {
    this.stopPropagation();
    this.isImmediatePropagationStopped = true;
  }
  
  // 持久化事件对象，使其在回调后不被重用
  persist() {
    // 在简化版本中，此方法可以为空实现
  }
  
  // 静态方法：创建特定类型的合成事件
  static createEvent(eventType, nativeEvent, target) {
    const SyntheticEventClass = SyntheticEvent.getEventTypeClass(eventType);
    return new SyntheticEventClass(nativeEvent, target);
  }
  
  // 获取事件类型对应的类
  static getEventTypeClass(eventType) {
    // 在简化版本中，始终返回基础类
    return SyntheticEvent;
  }
}

/**
 * 鼠标事件类
 */
class SyntheticMouseEvent extends SyntheticEvent {
  constructor(nativeEvent, target) {
    super(nativeEvent, target);
    
    // 鼠标事件特有属性
    this.clientX = nativeEvent.clientX || 0;
    this.clientY = nativeEvent.clientY || 0;
    this.screenX = nativeEvent.screenX || 0;
    this.screenY = nativeEvent.screenY || 0;
    this.pageX = nativeEvent.pageX || 0;
    this.pageY = nativeEvent.pageY || 0;
    this.button = nativeEvent.button || 0;
    this.buttons = nativeEvent.buttons || 0;
  }
}

/**
 * 键盘事件类
 */
class SyntheticKeyboardEvent extends SyntheticEvent {
  constructor(nativeEvent, target) {
    super(nativeEvent, target);
    
    // 键盘事件特有属性
    this.key = nativeEvent.key || '';
    this.code = nativeEvent.code || '';
    this.keyCode = nativeEvent.keyCode || 0;
    this.charCode = nativeEvent.charCode || 0;
    this.shiftKey = nativeEvent.shiftKey || false;
    this.ctrlKey = nativeEvent.ctrlKey || false;
    this.altKey = nativeEvent.altKey || false;
    this.metaKey = nativeEvent.metaKey || false;
  }
}

// 导出事件类
export { SyntheticEvent, SyntheticMouseEvent, SyntheticKeyboardEvent };
export default SyntheticEvent;