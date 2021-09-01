import React, { useEffect, useState } from 'react';
import './ModalCustom.scss';

interface IProps {
	modal: string;
	status: boolean;
	closeModal: any;
	size?: 'FULL';
	children?: React.ReactNode;
}

const Modal = ({ size, status, closeModal, modal, children }: IProps) => {
	const [mouseClickTarget, setMouseClickTarget] = useState(false);

	const escFunction = (e: any) => {
		if (e.key === 'Escape') {
			closeModal(modal);
		}
	};

	useEffect((): any => {
		if (status) {
			document.addEventListener('keyup', escFunction, false);
			return () => {
				document.removeEventListener('keyup', escFunction, false);
			};
		}
		return false;
	}, [size, modal, status]);

	useEffect(() => {
		const bhxModalCustomWrapperAll = document.querySelectorAll('.modal-custom--close');
		const bhxModalCustomAll = document.querySelectorAll('.bhx-modal-custom');
		const handleClickModalDown = (e: any) => {
			if (e.target.classList.contains('modal-custom--close')) {
				setMouseClickTarget(true);
			}
		};
		const handleClickModalUp = (e: any) => {
			if (e.target.classList.contains('modal-custom--close') && mouseClickTarget) {
				bhxModalCustomWrapperAll.forEach((element) => {
					element.removeEventListener('mousedown', handleClickModalDown, false);
					element.removeEventListener('mouseup', handleClickModalUp, false);
				});
				closeModal(modal);
				setMouseClickTarget(false);
			}
		};

		if (status) {
			bhxModalCustomWrapperAll.forEach((element) => {
				element.addEventListener('mousedown', handleClickModalDown, false);
				element.addEventListener('mouseup', handleClickModalUp, false);
			});
		} else {
			bhxModalCustomAll.forEach((element) => {
				// eslint-disable-next-line no-param-reassign
				element.scrollTop = 0;
			});
		}
	}, [status, mouseClickTarget]);

	return (
		<>
			<div
				className="bhx-modal-custom container-fluid"
				style={{ display: status ? 'block' : 'none' }}
			>
				<div
					id={`js-bhx-modal-custom__wrapper-${modal}`}
					className="modal-custom--close bhx-modal-custom__wrapper"
				>
					<div
						className={`ani-modal-opening bhx-modal-custom__body ${
							size === 'FULL' && 'bhx-modal-custom__body--full'
						}`}
					>
						{children}
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
