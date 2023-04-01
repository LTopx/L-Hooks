import { createLocalAtom } from 'l-hooks';

const myAtom = createLocalAtom({ age: 1 }, 'testKey');

export { myAtom };
