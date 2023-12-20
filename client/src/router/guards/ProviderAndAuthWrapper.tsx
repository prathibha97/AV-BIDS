import React, { FC } from 'react';
import RequireAuth from '../../components/require-auth';
import ProviderGuard from './provider-guard';

const ProviderAndAuthWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <RequireAuth>
    <ProviderGuard>{children}</ProviderGuard>
  </RequireAuth>
);

export default ProviderAndAuthWrapper;
