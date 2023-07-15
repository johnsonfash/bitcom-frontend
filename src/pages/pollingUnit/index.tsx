import { Spinner, Table } from "reactstrap"
import usePollingUnits from "../../store/hooks/pollingUnits"
import { useEffect } from "react"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function PollingUnits() {
  const { loading, error, data, message } = usePollingUnits(true)

  useEffect(() => {
    if (error) toast.error(message)
  }, [message, error]);

  return (
    <div className="container p-3 p-md-5">
      <h1 className="border-bottom pb-2">Polling Units</h1>
      <div className="my-3">
        <Table responsive>
          <thead>
            <th >S/N</th>
            <th className='no-break'>Polling Unit ID</th>
            <th>Location</th>
            <th>Number</th>
            <th>Action</th>
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
                      <td><Link to={`/${item.uniqueid}`} className="text-decoration-underline">{item.uniqueid}</Link></td>
                      <td>{item.polling_unit_name}</td>
                      <td>{item.polling_unit_number}</td>
                      <td className="no-break"><Link className="btn btn-primary" to={`/create/${item.uniqueid}`}>+ Add Result</Link></td>
                    </tr>
                  ) : null
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default PollingUnits