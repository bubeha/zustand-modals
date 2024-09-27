import {Providers} from "./providers";
import {Modal} from "../shared/ui/modal";
import {useState} from "react";

export function App() {
    const [open, setOpen] = useState(false)

    return (
        <Providers>
            <button onClick={() => setOpen(true)}>Button</button>

            <Modal title="Test" open={open} onClose={() => setOpen(false)}>
                Test Modal
            </Modal>
        </Providers>
    )
}
