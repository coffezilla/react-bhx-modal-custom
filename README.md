# react-bhx-modal-custom

This modal is very useful for all kind of React projects. It's really simple and clean that make the basic modal behaviour for you.

## Feat

- Typescript
- React ( sample is made using create-react-app )

## How to use

To use this simple modal, add the **ModalCustom** folder inside the component's folder of your project.

To call your modal simple add a button:

```tsx
<button type="button" onClick={() => openModal('MY_MODAL')}>
	Open My Sample Modal
</button>
```

Configure your type for Typescript purpose

```tsx
// type
type modalIndex = 'MY_MODAL';

function App() {

[...]

	const [modalState, setModalState] = useState({
		MY_MODAL: { status: false },
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
	
[...]
```

## Configure the content of your modal

Put the ModalCustom tag inside your component and add the modal property with a unique name.

```tsx
<ModalCustom status={modalState.MY_MODAL.status} closeModal={closeModal} modal="MY_MODAL">
	<h2>This is my Modal Custom</h2>
	<p>You can close this modal using the "ESCAPE KEY"</p>
	<p>You can close this modal clicking on the outside area</p>
	<p>You can close this clicking on the "CLOSE BUTTON"</p>
	<button type="button" onClick={() => closeModal('MY_MODAL')}>
		CLOSE BUTTON
	</button>
</ModalCustom>
```

Example

![custom-modal.gif](react-bhx-modal-custom%20b57a599b545341df9c7560db5f9d3354/custom-modal.gif)