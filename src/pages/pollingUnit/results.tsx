import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Spinner, Table } from "reactstrap";
import usePollingUnitResult from "../../store/hooks/pollingUnitResult";

function PollingUnitResult() {
  const { loading, error, data, message } = usePollingUnitResult(true)

  useEffect(() => {
    if (error) toast.error(message)
  }, [message, error]);

  return (
    <div className="container p-3 p-md-5">
      <h1 className="border-bottom pb-2">
        <Link to='/' className="btn btn-light me-3">{'<'} Back</Link>
        <span>Polling Unit Result</span>
      </h1>
      <div className="my-3">
        <Table responsive>
          <thead>
            <th >S/N</th>
            <th>Polling Unit ID</th>
            <th>Location</th>
            <th>Party</th>
            <th>Number</th>
          </thead>
          <tbody className="position-relative">
            {
              loading ?
                <div className="py-3 w-100">
                  <Spinner size='sm' />
                </div>
                :
                data?.length ?
                  data?.map((item, i) =>
                    <tr key={i}>
                      <td>{i + 1}.</td>
                      <td>{item.polling_unit_uniqueid}</td>
                      <td>{item.polling_unit_name}</td>
                      <td>{item.party_abbreviation}</td>
                      <td>{item.party_score}</td>
                    </tr>
                  ) : null
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default PollingUnitResult