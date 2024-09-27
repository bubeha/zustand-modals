import {create} from "zustand";
import {ElementType} from "react";
import {ModalKey} from "../constants/enum.ts";
import {DefaultModal} from "features/modal";

type ModalState = {
    modals: Modal[];
    activeModal: null | Modal;
    open: {
        (key: ModalKey): void;
        (title: string, component: ElementType): void;
    };
    close: () => void;
}

type Modal = {
    key: ModalKey,
    title: string,
    component: ElementType,
}

export const useModalStore = create<ModalState>((set, get) => ({
    modals: [{
        key: ModalKey.DefaultModal,
        component: DefaultModal,
        title: 'Default Title'
    }],
    activeModal: null,
    open: (title, component?: ElementType) => {
        if (!component) {
            const modal = get().modals.find((modal) => modal.key === title);

            if (modal) {
                set((state) => ({
                    ...state,
                    activeModal: modal,
                }));
            }

            return;
        }

        set((state) => ({
            ...state,
            activeModal: {
                key: ModalKey.DefaultModal,
                title: title.toString(),
                component,
            },
        }));
    },
    close: () => {
        set(state => ({...state, activeModal: null}))
    },
}));
