import React, { useContext } from 'react';

// 문제 10
// 아래 두 버튼은 각각 user 의 permissions에 따라 렌더링되어야 한다.
/*
  첫번째 버튼은 user 의 permissions 에 'read', 'write', 'delete' 가 포함되어 있어야 렌더링되고,
  두번째 버튼은 user 의 permissions 이 'read', 'write' 가 포함되어 있어야 렌더링 되어야 한다.

  아래 같은 경우는 read, write 만 있으므로 'I can Delete' 버튼은 렌더링 되지 않도록 해야합니다.
  컴포넌트들을 재사용성 있도록 설계해주세요.
*/

type Permission = 'read' | 'write' | 'delete';
type User = {
  permissions: Permission[];
};

const PermissionContext = React.createContext<Permission[]>([]);

const PermissionProvider = ({ children, permissions }: { children?: React.ReactNode; permissions: Permission[] }) => {
  return <PermissionContext.Provider value={permissions}>{children}</PermissionContext.Provider>;
};

type CanProps = {
  permissions: Permission[];
  children?: React.ReactNode;
};

const Can = ({ permissions: required, children }: CanProps) => {
  const userPermissions = useContext(PermissionContext);
  const hasAllPermissions = required.every((p) => userPermissions.includes(p));
  return hasAllPermissions ? <>{children}</> : null;
};

const AdminCan = ({ children }: { children?: React.ReactNode }) => {
  return <Can permissions={['read', 'write', 'delete']}>{children}</Can>;
};

const ManagerCan = ({ children }: { children?: React.ReactNode }) => {
  return <Can permissions={['read', 'write']}>{children}</Can>;
};

function App() {
  const user: User = {
    permissions: ['read', 'write', 'delete'],
  };

  return (
    <PermissionProvider permissions={user.permissions}>
      <AdminCan>
        <button onClick={() => {}}>I can Delete</button>
      </AdminCan>
      <ManagerCan>
        <button onClick={() => {}}>I can't Delete</button>
      </ManagerCan>
    </PermissionProvider>
  );
}

export default App;

import React, { useContext } from 'react';

type Permission = 'read' | 'write' | 'delete';
type User = {
  permissions: Permission[];
};

const PermissionProvider = React.createContext<Permission[]>([]);

function withInjectedProps<T extends {}, U extends T>(injected: T, Component: React.ComponentType<U>) {
  return function (props: Omit<U, keyof T>) {
    const newProps = { ...injected, ...props } as U;
    return <Component {...newProps} />;
  };
}

function Can({ children, requiredPermissions }: { children: React.ReactNode; requiredPermissions: Permission[] }) {
  const permissions = useContext(PermissionProvider);
  const hasPermission = requiredPermissions.every((permission) => permissions.includes(permission));
  if (!hasPermission) {
    return null;
  }
  return <>{children}</>;
}

const AdminCan = withInjectedProps({ requiredPermissions: ['read', 'write', 'delete'] }, Can);
const ManagerCan = withInjectedProps({ requiredPermissions: ['read', 'write'] }, Can);

function App() {
  const user: User = {
    permissions: ['read', 'write'],
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('clicked', event);
  };

  return (
    <PermissionProvider value={user.permissions}>
      <AdminCan>
        <button onClick={handleClick}>I can Delete</button>
      </AdminCan>
      <ManagerCan>
        <button onClick={handleClick}>I can't Delete</button>
      </ManagerCan>
    </PermissionProvider>
  );
}

export default App;
