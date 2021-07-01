
import { createContext, useContext } from 'react';

import UserStore from './userStore';
import CommonStore from "./commonStore";
import TestStore from "./testStore";

interface Store {
    userStore: UserStore;
    commonStore: CommonStore;
    testStore: TestStore
}

export const store: Store = {
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    testStore : new TestStore()
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
