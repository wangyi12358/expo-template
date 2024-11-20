import { PropsWithChildren } from 'react';
import { ThemedView } from './themed-view';

export interface PageContainerProps {
  className?: string;
}

export function PageContainer(props: PropsWithChildren<PageContainerProps>) {
  const { children } = props;
  return <ThemedView className=" flex-1">{children}</ThemedView>;
}
