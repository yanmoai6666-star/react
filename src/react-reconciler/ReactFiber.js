/**
 * Fiber 节点类型定义
 */
const Fiber = {
  createFiber(tag, pendingProps, key, mode) {
    // 创建 Fiber 节点
    return {
      tag,
      key,
      elementType: null,
      type: null,
      stateNode: null,
      
      // 树结构关系
      return: null,
      child: null,
      sibling: null,
      index: 0,
      
      // 状态相关
      pendingProps,
      memoizedProps: null,
      updateQueue: null,
      memoizedState: null,
      
      // 副作用
      effectTag: 0,
      nextEffect: null,
      firstEffect: null,
      lastEffect: null,
      
      // 优先级相关
      priority: 0,
      
      // 其他
      alternate: null,
      mode
    };
  },
  
  // Fiber 节点类型
  HostRoot: 0,
  HostComponent: 1,
  HostText: 2,
  FunctionComponent: 3,
  ClassComponent: 4,
  Fragment: 5,
  Portal: 6,
  
  // 副作用类型
  NoEffect: 0,
  Placement: 1,
  Update: 2,
  Deletion: 3,
  
  // 创建 Fiber 根节点
  createHostRootFiber() {
    const mode = 0; // 简化版模式
    return Fiber.createFiber(Fiber.HostRoot, null, null, mode);
  }
};

export default Fiber;