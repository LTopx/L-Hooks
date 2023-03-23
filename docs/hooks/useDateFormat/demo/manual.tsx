/**
 * title: 手动调用
 * description: 初始化时不传参数，可以控制手动调用格式化函数 `format()` 获取结果
 */
import { Button } from 'antd';
import { useDateFormat, useNow } from 'l-hooks';
import * as React from 'react';

export default () => {
  const now = useNow();
  const [date, setDate] = React.useState('');
  const { format } = useDateFormat();

  const onClick = () => {
    setDate(format(now));
  };

  return (
    <>
      {date}
      <Button type="primary" onClick={onClick}>
        手动获取
      </Button>
    </>
  );
};
