import { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { ICellRendererParams } from 'ag-grid-community';
import Button from '@mui/material/Button';
import type { LaunchDataProps } from './types';
import type { LaunchDataEntryProps } from '../../services/spaceXApi.types';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { wrapper } from './styles';
import { BasicModal } from '../Modal';
import { prettyDate } from '../../utils/date';


const DateCellRenderer = ({ value }: ICellRendererParams) => prettyDate(value);

export const DataTable = ({ data }: LaunchDataProps ) => {
  const [itemData, setItemData] = useState<LaunchDataEntryProps | {}>({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = (isOpen: boolean) => setModalOpen(isOpen);

  const handleViewLaunchDetails = (data: LaunchDataEntryProps) => {
    setItemData(data);
    setModalOpen(true);
  };

  const BtnCellRenderer = ({ data }: { data: LaunchDataEntryProps }) => {
    return (
      <Button onClick={() => handleViewLaunchDetails(data)}>
        view rocket details
      </Button>
    );
  }

  if (data.length === 0) {
    return <div>No information available</div>;
  }
  
  return (
    <div className="ag-theme-alpine" style={wrapper}>
      <AgGridReact
        frameworkComponents={{
          BtnCellRenderer
        }}
        rowData={data}
      >
        <AgGridColumn
          field="mission_name"
          headerName="Launch Name"
          sortable
          filter
        ></AgGridColumn>
        <AgGridColumn
          field="launch_date_utc"
          headerName="Launch Date"
          cellRenderer={DateCellRenderer}
          sortable
        ></AgGridColumn>
        <AgGridColumn
          headerName="Actions"
          cellRenderer="BtnCellRenderer"
        ></AgGridColumn>
      </AgGridReact>
      <BasicModal
        data={itemData}
        modalOpen={modalOpen}
        handleToggleModal={handleToggleModal}
      />
    </div>
  )
}
