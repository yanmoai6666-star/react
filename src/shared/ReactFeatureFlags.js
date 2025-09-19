/**
 * React 特性标志，用于控制各种功能的启用状态
 */
const ReactFeatureFlags = {
  // 核心特性标志
  enableNewReconciler: false, // 启用新的协调器
  enableSchedulerPriority: false, // 启用调度器优先级
  enableObjectRestSpread: true, // 启用对象扩展运算符
  enableFragment: true, // 启用片段组件
  enableStrictMode: true, // 启用严格模式
  enableSuspense: false, // 启用Suspense
  
  // 开发模式特性
  enableDeveloperTools: true, // 启用开发者工具
  enableProfiler: false, // 启用性能分析器
  enableDebugTracing: false, // 启用调试跟踪
  
  // 实验性特性
  enableConcurrentMode: false, // 启用并发模式
  enableHooks: true, // 启用Hooks
  enableLazy: false, // 启用React.lazy
  enableMemo: true, // 启用React.memo
  
  // 性能优化特性
  enableBatchUpdates: true, // 启用批量更新
  enableSelectiveHydration: false, // 启用选择性水合
  enableBlockingMode: false, // 启用阻塞模式
  
  // 更新标志
  disableLegacyContext: false, // 禁用旧版上下文
  disableLegacyHiddenAPI: true, // 禁用旧版隐藏API
  
  // 实验性API标志
  enableNewJSXTransform: true, // 启用新的JSX转换
  enableExperimentalComponentDidCapture: false, // 启用实验性的componentDidCapture生命周期
  enableDeprecatedFlushSync: true, // 启用已弃用的flushSync
  
  // 测试相关标志
  __DEV__: process.env.NODE_ENV !== 'production', // 开发环境标志
  __PROFILE__: false, // 性能分析模式标志
  __EXPERIMENTAL__: false // 实验模式标志
};

// 根据环境调整特性标志
if (process.env.NODE_ENV === 'production') {
  // 生产环境禁用一些调试特性
  ReactFeatureFlags.enableDeveloperTools = false;
  ReactFeatureFlags.enableDebugTracing = false;
}

export default ReactFeatureFlags;