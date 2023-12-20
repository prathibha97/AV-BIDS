import React, { FC } from 'react';
import RequireAuth from '../../components/require-auth';
import PlannerGuard from './planner-guard';

const PlannerAndAuthWrapper: FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <RequireAuth>
    <PlannerGuard>{children}</PlannerGuard>
  </RequireAuth>
);

export default PlannerAndAuthWrapper;
