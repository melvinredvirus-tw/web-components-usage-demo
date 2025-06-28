'use client';

import { Provider } from 'react-redux';
import store from './store';

type AllProviderProps = {
  children: React.ReactNode;
};

function AllProvider(props: AllProviderProps) {
  return <Provider store={store}>{props.children}</Provider>;
}

export default AllProvider;
