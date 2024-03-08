import { Box, Typography, useTheme} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataInvoices} from "../../data/mockData"
import Header from "../../components/Header";



const Invoice = () => {
  
const theme = useTheme();
const colors = tokens(theme.palette.mode);

const columns = [
    {field: "id", headerName:"ID"},
    {
     field:"name",
     headerName:"NAME",
     flex:1,
     cellClasName: "name-column--cell"
    }, 
    
   {
    field:"phone",
    headerName:"Phone Number",
    flex:1,
  },
  {
    field:"email",
    headerName:"Email",
    flex:1,
  },
  {field:"date",
   headerName:"Date"
  },
  
  {field:"cost",
   headerName:"Cost",
   flex:1,
   renderCell: (params) => (
    <Typography color={colors.greenAccent[500]}>
        ${params.row.cost}
    </Typography>
   )
  },

  
]

return(
    <Box m="20px">
        <Header title="INVOICE" subtitle="LIST OF INVOICES"/>
        <Box m="40px 0 0 0" height="75vh" sx={{
            " & .MuiDataGrid-root" : {
                border: "none"
            },
            "& .MuiDataGrid-cell" :{
                borderBottom: "none",
                // border:"none !important"
            },
            "& .name-column--cell" : {
                color:colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders":{
                backgroundColor: colors.blueAccent[900],
                borderBottom: "none"
            },
            "& .MuiDataGrid-virtualScroller" : {
                backgroundColor: colors.primary[400]
            },
            "& .MuiDataGrid-footerContainer" : {
                borderTop: "none",
                backgroundColor: colors.blueAccent[900]
            },
            "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]}`
            }
        }}>
            <DataGrid
            checkboxSelection
            rows={mockDataInvoices}
            columns={columns}
            />
        </Box>
    </Box>
)

}
export default Invoice;