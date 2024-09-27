import * as Dialog from '@radix-ui/react-dialog';
import {PropsWithChildren} from "react";

import './modal.scss';

type ModalProps = PropsWithChildren<{
    open?: boolean;
    overlay?: boolean;
    title: string;
    description?: string;
    onClose?: () => void;
}>

export function Modal({open, title, description, overlay, children, onClose}: ModalProps) {
    const onOpenChangeHandler = (value: boolean) => {
        if (!value && onClose) {
            onClose()
        }
    }

    return <Dialog.Root open={open} onOpenChange={onOpenChangeHandler}>
        <Dialog.Portal>
            {overlay && <Dialog.Overlay className="modal-overlay"/>}
            <Dialog.Content className="modal-content">
                <Dialog.Title className="modal-title">{title}</Dialog.Title>
                {description && <Dialog.Description className="modal-description">{description}</Dialog.Description>}
                {children}
                <button className="modal-close_button" onClick={onClose}>X</button>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
}
