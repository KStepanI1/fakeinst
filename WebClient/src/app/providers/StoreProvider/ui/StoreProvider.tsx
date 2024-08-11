import React, { FC } from "react";
import { Provider } from "react-redux";
import { DeepPartial } from "shared/types/_general/DeepPartial";

import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";

export interface StoreProviderProps {
    children: React.ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
