import React from '../react';
import PropTypes from 'prop-types';

/**
 * 基础输入框组件
 */
function Input(props) {
  const {
    type = 'text',
    value,
    onChange,
    placeholder = '',
    disabled = false,
    required = false,
    className = '',
    name,
    id,
    ...rest
  } = props;

  // 生成样式类名
  const baseClassName = 'input';
  const typeClassName = `input--${type}`;
  const disabledClassName = disabled ? 'input--disabled' : '';
  const requiredClassName = required ? 'input--required' : '';
  
  // 合并所有类名
  const finalClassName = [
    baseClassName,
    typeClassName,
    disabledClassName,
    requiredClassName,
    className
  ].filter(Boolean).join(' ');

  // 处理输入变化事件
  const handleChange = (event) => {
    if (!disabled && onChange) {
      onChange(event);
    }
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      className={finalClassName}
      name={name}
      id={id}
      {...rest}
    />
  );
}

// 定义属性类型
Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string
};

// 导出组件
export default Input;