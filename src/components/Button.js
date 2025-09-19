import React from '../react';
import PropTypes from 'prop-types';

/**
 * 基础按钮组件
 */
function Button(props) {
  const {
    onClick,
    type = 'button',
    variant = 'default',
    size = 'medium',
    disabled = false,
    className = '',
    children,
    ...rest
  } = props;

  // 根据variant和size生成样式类名
  const baseClassName = 'button';
  const variantClassName = `button--${variant}`;
  const sizeClassName = `button--${size}`;
  const disabledClassName = disabled ? 'button--disabled' : '';
  
  // 合并所有类名
  const finalClassName = [
    baseClassName,
    variantClassName,
    sizeClassName,
    disabledClassName,
    className
  ].filter(Boolean).join(' ');

  // 处理点击事件
  const handleClick = (event) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      className={finalClassName}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
}

// 定义属性类型
Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger', 'success']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

// 导出组件
export default Button;