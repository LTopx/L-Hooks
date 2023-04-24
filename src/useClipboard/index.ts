import * as React from 'react';

interface ClipboardReturn {
  copy: (value: any) => void;
}

const useClipboard = (): ClipboardReturn => {
  const copyByNavigator = async (value: any) => {
    try {
      const content = typeof value === 'object' ? JSON.stringify(value) : value;
      await navigator.clipboard.writeText(content);
    } catch (error) {
      console.warn('Copy failed', error);
    }
  };

  const copyByTextarea = (value: any) => {
    try {
      const content = typeof value === 'object' ? JSON.stringify(value) : value;
      const textarea = document.createElement('textarea');
      textarea.setAttribute('readonly', 'readonly');
      textarea.value = content;
      document.body.appendChild(textarea);
      textarea.setSelectionRange(0, 9999);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    } catch (error) {
      console.warn('Copy failed', error);
    }
  };

  const copy = React.useCallback((value: any) => {
    if (!value) return;
    if (navigator?.clipboard) {
      copyByNavigator(value);
    } else {
      copyByTextarea(value);
    }
  }, []);

  return { copy };
};

export default useClipboard;
