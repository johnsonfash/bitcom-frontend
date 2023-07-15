import { FormEvent, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Modal, Spinner } from "reactstrap";
import useAgents from "../../store/hooks/agents";
import { FormClear, FormHandler } from "../../utils/form";
import { toast } from "react-toastify";
import { normalRequest } from "../../utils/request";
import ENUM from "../../utils/enum";

const Create = () => {
  const { loading, data, message } = useAgents(true)
  const [results, setResults] = useState<{ party: string, score: string }[]>([]);
  const [formLoading, setFormLoading] = useState(false);
  const [name, setName] = useState('');
  const [modal, setModal] = useState(false);
  const { id } = useParams() as any
  const route = useNavigate()
  const toggle = useCallback(() => { if (!formLoading) setModal(!modal) }, [modal, formLoading])

  console.log(data, message)

  useEffect(() => {
    if (isNaN(id)) route('/')
  }, [id, route]);

  const handlePartyResultSubmit = (e: FormEvent<HTMLFormElement>) => {
    const data: any = FormHandler(e, ['party', 'score'])
    setResults((p) => [...p, data])
    FormClear(e, ['party', 'score']);
    toggle()
  }

  const handleDelete = (i: number) => {
    setResults((p) => p.filter((_, idx) => i !== idx))
  }

  const handleSubmit = async () => {
    if (!results?.length) return toast.error('Please add results')
    if (!name) return toast.error('Please select your name')
    setFormLoading(true)
    const res = await normalRequest(ENUM.CREATE_RESULT, { pollingUnitId: id, name, results })
    setFormLoading(false)
    if (res.error) return toast.error(res.message)
    toast.success('Successfully created!')
    setResults([])
  }

  return <div className="container p-3 p-md-5">
    <div>Polling Unit ID: <b>{id}</b></div>
    <h1>Create Result</h1>
    <div>
      <div>
        {
          loading ?
            <Spinner size='sm' /> :
            <select disabled={formLoading} onChange={(e) => setName(e.target.value)} required name='name' className="d-inline-block form-select">
              <option value="" hidden selected>Please select your name</option>
              {
                data?.length ?
                  data?.map((item, i) =>
                    <option value={item.firstname}>{item.firstname} {item.lastname}</option>
                  ) : null}
            </select>
        }
      </div>
      <div className="d-flex justify-content-between mt-3">
        <button disabled={formLoading} onClick={toggle} className="btn btn-light border border-2">+ Add Result</button>
        <button disabled={formLoading} onClick={handleSubmit} className="btn btn-primary">
          {formLoading && <Spinner size='sm' className='me-2' />}
          Submit Result</button>
      </div>
      <div className="my-3">
        {
          results.map((item, i) =>
            <div key={i} className="border rounded-2 py-3 px-3 my-2 d-flex justify-content-between">
              <div className='d-flex align-items-center w-100'>
                <div className="border-end border-2 w-50">
                  <h6><b>Name</b></h6>
                  <p>{item.party}</p>
                </div>
                <div className="w-50 text-end border-end pe-3">
                  <h6><b>Scores</b></h6>
                  <p>{item.score}</p>
                </div>
              </div>
              <div className="ps-3">
                <button onClick={() => handleDelete(i)} className="btn btn-danger">Del</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
    <Modal isOpen={modal} toggle={toggle} size="md" className="mt-5 pt-5">
      <form onSubmit={handlePartyResultSubmit}>
        <div className="py-2 px-3 border-bottom  d-flex align-items-center justify-content-between">
          <h3 className="my-0">Add Party Result</h3>
          <button type="submit" className="btn-primary btn">Save</button>
        </div>
        <div className="p-3">
          <div className="form-group">
            <div className="row">
              <div className="col-6">
                <label className="mb-2">Party</label>
                <input required name='party' type="text" className="form-control" placeholder='i.e PDP' />
              </div>
              <div className="col-6">
                <label className="mb-2">Scores</label>
                <input name='score' type="text" className="form-control" placeholder='i.e 456' />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  </div>;
};

export default Create;
