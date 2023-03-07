import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = (props) => <h4>啊{props.title}</h4>;

export default Foo;
