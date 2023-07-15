import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner, Table } from "reactstrap";
import useLgas from "../../store/hooks/lgas";
import useLgaResult from "../../store/hooks/lgaResult";

function Lgas() {
  const { loading, error, data, message } = useLgas(true)
  const { data: lgaResultData, handleLgaChange, error: lgaResultError, message: lgaResultMessage, loading: LgaResultLoading } = useLgaResult()

  console.log(lgaResultData, lgaResultMessage)

  useEffect(() => {
    if (error) toast.error(message)
    if (lgaResultError) toast.error(lgaResultMessage)
  }, [message, error, lgaResultError, lgaResultMessage]);

  return (
    <div className="container p-3 p-md-5">
      <h1 className="border-bottom pb-2">Local Government Area Result</h1>
      {
        loading ?
          <div>
            <Spinner size='sm' />
          </div> :
          <select onChange={handleLgaChange} className="form-select">
            <option value="" hidden selected>Please select LGA</option>
            {
              data?.length ?
                data?.map((item, i) =>
                  <option value={item.uniqueid} key={i}>{item.lga_name}</option>
                )
                : null
            }
          </select>
      }
      <div className="my-3">
        {
          LgaResultLoading ?
            <div className="py-3 w-100">
              <Spinner size='sm' />
            </div>
            :
            lgaResultData?.length ?
              <div>
                <div className="my-2">Location: {lgaResultData?.length ? lgaResultData[0].lga_name : 'please select'}</div>
                <Table responsive>
                  <thead>
                    <th >S/N</th>
                    <th>Party</th>
                    <th>Score</th>
                  </thead>
                  <tbody className="position-relative">
                    {
                      lgaResultData?.map((item, i) =>
                        <tr key={i}>
                          <td>{i + 1}.</td>
                          <td>{item.party_abbreviation}</td>
                          <td>{item.total}</td>
                        </tr>
                      )
                    }
                  </tbody>
                </Table>
              </div> :
              <div className="alert alert-danger" role="alert">
                There is not result data for this location yet!
              </div>
        }
      </div>
    </div>
  )
}

export default Lgas