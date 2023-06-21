import * as React from 'react';

interface ClipboardReturn {
  isCopied: boolean;
  copy: (value: any) => void;
}

const useClipboard = (timeout = 2000): ClipboardReturn => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);

  const copyByNavigator = async (value: any) => {
    try {
      const content = typeof value === 'object' ? JSON.stringify(value) : value;
      navigator.clipboard.writeText(content).then(() => {
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, timeout);
      });
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
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
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

  return { isCopied, copy };
};

export default useClipboard;
