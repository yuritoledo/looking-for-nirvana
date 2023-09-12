import { combineReducers, configureStore } from "@reduxjs/toolkit"
import movingSlicer from "./movingSlicer"
import storageSession from "redux-persist/lib/storage/session"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["moving"],
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ moving: movingSlicer })
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export let persistor = persistStore(store)
