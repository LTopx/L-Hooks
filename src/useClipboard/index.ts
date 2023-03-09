interface ClipboardReturn {
  copy: (value: any) => Promise<any>;
}

const useClipboard = (): ClipboardReturn => {
  const copy = (value?: any) => {
    return new Promise((resolve, reject) => {
      if (!value) {
        resolve(null);
        return;
      }
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
        resolve(null);
      } catch (error) {
        reject();
      }
    });
  };

  return { copy };
};

export default useClipboard;
