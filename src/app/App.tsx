import {Providers} from "app/providers";
import {CustomModalInner, ModalKey, useModalStore} from "features/modal";

export function App() {
    const open = useModalStore((state) => state.open);

    return (
        <Providers>
            <div className="flex gap-3">
                <button onClick={() => open('Custom Modal', CustomModalInner)}>Open Custom Modal</button>
                <button onClick={() => open(ModalKey.DefaultModal)}>Open Default Modal</button>
            </div>
        </Providers>
    )
}
