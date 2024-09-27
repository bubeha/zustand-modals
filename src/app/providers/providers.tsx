import React, {PropsWithChildren} from "react";
import {Modal} from "shared/ui/modal";
import {useModalStore} from "features/modal/model/store.ts";

type ProvidersProps = PropsWithChildren

export function Providers({children}: ProvidersProps) {
    const {activeModal, close} = useModalStore();

    return <>
        {children}
        {activeModal && <Modal title={activeModal.title} open={true} onClose={close}>
            {React.createElement(activeModal.component)}
        </Modal>}
    </>
}
