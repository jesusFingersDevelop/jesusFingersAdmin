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
      <div className="commonModalContent" onClick={() => setModal(true)}>
        {innerContent}
      </div>
    </div>
  );
};
export default CommonModal;
