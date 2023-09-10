
type ModalProperties = {
    children: React.ReactNode,
    label: string;
}

export function toggleModal(id: string) {
    const modalElement = document.getElementById(id) as HTMLDialogElement;
    const modalIsOpen = modalElement?.open
    if (modalElement) {
        if(modalIsOpen) {
            modalElement.close()
        } else if(!modalIsOpen) {
            modalElement.showModal()
        }
    }
}


export default function Modal({
    children,
    label
}: ModalProperties) {
    return (
        <>
        <dialog id={label}>
            <button onClick={() => toggleModal(label)}>Close</button>
            {children}
        </dialog>
        </>
    )
}