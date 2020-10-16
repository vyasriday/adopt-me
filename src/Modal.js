import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
	const elRef = useRef(null);

	if (!elRef.current) {
		const div = document.createElement('div');
		elRef.current = div;
	}

	useEffect(() => {
		// we append the modal in the modal div
		const modalRoot = document.getElementById('modal');
		modalRoot.appendChild(elRef.current);

		// when modal unmounts we want to clear the modal div
		return () => modalRoot.removeChild(elRef.current);
	});
	// we could have done it using JS but then we won't have acess to React state and all.
	return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
