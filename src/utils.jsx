import store from "./store"
import auth, { setUser } from "./store/auth"

export const userHandle = data => {
    store.dispatch(setUser(data))
}