
import { createContext, useContext } from 'react';

import UserStore from './userStore';
import CommonStore from "./commonStore";
import TestStore from "./testStore";
import RoleStore from './roleStore';

interface Store {
    userStore: UserStore;
    commonStore: CommonStore;
    testStore: TestStore;
    roleStore: RoleStore;
}

export const store: Store = {
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    testStore : new TestStore(),
    roleStore : new RoleStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
