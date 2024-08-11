import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";

export function createReduxStore(preloadedState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {},
        devTools: __IS_DEV__,
        preloadedState,
    });
}
