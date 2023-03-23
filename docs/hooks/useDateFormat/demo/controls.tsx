/**
 * title: 可控制
 * description: 传入 `controls:true` 可以控制手动调用格式化函数 `format()` 获取结果
 */
import { Button } from 'antd';
import { useDateFormat, useNow } from 'l-hooks';
import * as React from 'react';

export default () => {
  const now = useNow();
  const [date, setDate] = React.useState('');
  const { format } = useDateFormat(now, 'YYYY-MM-DD hh:mm:ss dddd', { controls: true });

  const onClick = () => {
    setDate(format());
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
