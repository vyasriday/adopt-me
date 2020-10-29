import React, { FunctionComponent, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');
const Modal: FunctionComponent = ({ children }) => {
	const elRef = useRef(document.createElement('div'));


	useEffect(() => {
		if (!modalRoot) {
			return;
		}
		modalRoot.appendChild(elRef.current);

		// when modal unmounts we want to clear the modal div
		return () => {
			modalRoot.removeChild(elRef.current);
		}
	});
	// we could have done it using JS but then we won't have acess to React state and all.
	return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
