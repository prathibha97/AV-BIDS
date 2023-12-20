import React, { FC } from 'react';
import RequireAuth from '../../components/require-auth';
import SubscriptionGuard from './subscription-guard';

const SubscriptionAndAuthWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <RequireAuth>
    <SubscriptionGuard>{children}</SubscriptionGuard>
  </RequireAuth>
);

export default SubscriptionAndAuthWrapper;
