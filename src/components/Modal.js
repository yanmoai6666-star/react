import React, { useEffect } from '../react';
import PropTypes from 'prop-types';

/**
 * 模态框组件
 */
function Modal(props) {
  const {
    isOpen,
    onClose,
    title,
    children,
    className = '',
    overlayClassName = '',
    closeOnOverlayClick = true
  } = props;

  // 当模态框打开时，阻止页面滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // 当模态框打开时，添加点击外部关闭的事件监听
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (closeOnOverlayClick && isOpen && event.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose, closeOnOverlayClick]);

  // 处理关闭按钮点击
  const handleCloseClick = () => {
    if (onClose) {
      onClose();
    }
  };

  // 处理ESC键关闭
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // 如果模态框未打开，不渲染任何内容
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`modal-overlay ${overlayClassName}`}>
      <div className={`modal ${className}`}>
        <div className="modal-header">
          {title && <h2 className="modal-title">{title}</h2>}
          <button
            className="modal-close-button"
            onClick={handleCloseClick}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}

// 定义属性类型
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
  closeOnOverlayClick: PropTypes.bool
};

// 导出组件
export default Modal;