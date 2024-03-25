import ModalCSS from '../styles/modules/modal.module.css';
export default function Modal({ toggleModal, children}) {
    return (
        <>
            <div className={ModalCSS.modal}>
                <div className={ModalCSS.modalContent}>
                    <span className={ModalCSS.close} onClick={(() => toggleModal())}>&times;</span>
                    {children}
                </div>
            </div>
        </>
    );
}
