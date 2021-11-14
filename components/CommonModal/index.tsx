import React, {useState} from 'react';
import './index.scss';

type Props = {
  innerContent: any;
  setModal: (modal: boolean) => void;
};

const CommonModal = ({setModal, innerContent}: Props) => {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="commonModalWrapper">
      <div className="commonModalOverlay" onClick={() => setModal(false)} />
      <div className="commonModalContent">
        <button className="cancelButton" onClick={() => setModal(false)}>
          X
        </button>
        {innerContent}
      </div>
    </div>
  );
};
export default CommonModal;
