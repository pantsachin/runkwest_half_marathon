import "../../styles.css";
import Modal from "react-modal";
import { useAuthContext } from "../../contexts/auth-context.js";

export default function LoaderModal({loader}) {

  return (
    <Modal  isOpen={loader}>
     <div className="loader-modal"> <i class="fas fa-spinner"></i> </div>
    </Modal>
  )
}