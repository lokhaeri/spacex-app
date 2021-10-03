import { LaunchDataEntryProps } from "../../services/spaceXApi.types";


export interface ModalProps { 
  modalOpen: boolean, 
  handleToggleModal: (isOpen: boolean) => void, 
  data: Partial<LaunchDataEntryProps>
}