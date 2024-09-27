import {PropsWithChildren} from "react";

type ProvidersProps = PropsWithChildren

export function Providers({children}: ProvidersProps) {
    return <>
        {children}
    </>
}
