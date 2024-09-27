import {useModalStore} from "features/modal/model/store.ts";
import {useState} from "react";

export function DefaultModal() {
    const close = useModalStore(state => state.close)
    const [disabled, setDisabled] = useState(false);

    const onConfirm = () => {
        setDisabled(true);

        setTimeout(() => {
            close();
            setDisabled(false);
        }, 1000)
    }

    return (<>
        Default Modal Content

        <div className="flex gap-3 mt-5 justify-end">
            <button onClick={close}>Cancel</button>
            <button disabled={disabled} onClick={onConfirm}>Continue</button>
        </div>
    </>)
}
