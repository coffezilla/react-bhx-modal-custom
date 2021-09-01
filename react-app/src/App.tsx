import { useState } from 'react';
import ModalCustom from './components/ModalCustom';

type modalIndex = 'MY_MODAL' | 'SECOND_MODAL';
function App() {
	const [modalState, setModalState] = useState({
		MY_MODAL: { status: false },
		SECOND_MODAL: { status: false },
	});

	const openModal = (modalName: modalIndex) => {
		setModalState({ ...modalState, [modalName]: { status: true } });
	};

	const closeModal = (modalName: modalIndex) => {
		const documentBody: HTMLBodyElement | null = document.querySelector('body');
		if (documentBody !== null) {
			documentBody.className = '';
		}
		setModalState({ ...modalState, [modalName]: { status: false } });
	};

	return (
		<div>
			<h1>Modal Custom</h1>
			<ModalCustom status={modalState.MY_MODAL.status} closeModal={closeModal} modal="MY_MODAL">
				<h2>This is my Modal Custom</h2>
				<p>You can close this modal using the "ESCAPE KEY"</p>
				<p>You can close this modal clicking on the outside area</p>
				<p>You can close this clicking on the "CLOSE BUTTON"</p>
				<button type="button" onClick={() => closeModal('MY_MODAL')}>
					CLOSE BUTTON
				</button>
			</ModalCustom>
			<ModalCustom
				status={modalState.SECOND_MODAL.status}
				closeModal={closeModal}
				modal="SECOND_MODAL"
			>
				<h2>My Second Modal</h2>
			</ModalCustom>

			<button type="button" onClick={() => openModal('MY_MODAL')}>
				Open My Sample Modal
			</button>
			<button type="button" onClick={() => openModal('SECOND_MODAL')}>
				My second modal
			</button>
		</div>
	);
}

export default App;
