/**
 * 共享工具函数集合
 */

/**
 * 检查对象是否拥有指定属性
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * 空函数
 */
function noop() {
  // 空实现
}

/**
 * 恒等函数，返回输入值
 */
function identity(value) {
  return value;
}

/**
 * 浅比较两个对象是否相等
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // 检查 objA 的每个键是否都在 objB 中，并且值相等
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

/**
 * 合并多个对象
 */
function assign(target, ...sources) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  const to = Object(target);

  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    if (source != null) {
      for (const key in source) {
        if (hasOwn(source, key)) {
          to[key] = source[key];
        }
      }
    }
  }

  return to;
}

/**
 * 警告函数
 */
function warning(condition, format, ...args) {
  if (condition) {
    return;
  }

  const message = 'Warning: ' + format.replace(/%s/g, () => args.shift());
  if (typeof console !== 'undefined') {
    console.error(message);
  }

  try {
    // 尝试获取调用栈，用于调试
    throw Error(message);
  } catch (x) {
    // 忽略错误
  }
}

/**
 * 不变量检查
 */
function invariant(condition, format, ...args) {
  if (condition) {
    return;
  }

  const error = new Error(
    'Invariant Violation: ' + format.replace(/%s/g, () => args.shift())
  );
  error.framesToPop = 1; // 跳过当前栈帧
  throw error;
}

/**
 * 判断是否为函数
 */
function isFunction(obj) {
  return typeof obj === 'function';
}

/**
 * 判断是否为对象
 */
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * 判断是否为数组
 */
function isArray(obj) {
  return Array.isArray(obj);
}

/**
 * 判断是否为字符串
 */
function isString(obj) {
  return typeof obj === 'string';
}

/**
 * 判断是否为数字
 */
function isNumber(obj) {
  return typeof obj === 'number' && !isNaN(obj);
}

/**
 * 判断是否为布尔值
 */
function isBoolean(obj) {
  return typeof obj === 'boolean';
}

// 导出工具函数
export {
  hasOwn,
  noop,
  identity,
  shallowEqual,
  assign,
  warning,
  invariant,
  isFunction,
  isObject,
  isArray,
  isString,
  isNumber,
  isBoolean
};

export default {
  hasOwn,
  noop,
  identity,
  shallowEqual,
  assign,
  warning,
  invariant,
  isFunction,
  isObject,
  isArray,
  isString,
  isNumber,
  isBoolean
};