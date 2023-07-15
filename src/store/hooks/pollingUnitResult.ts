import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from ".."
import ENUM from "../../utils/enum"
import { reduxRequest } from "../../utils/request"
import { updatePollingUnitResult } from "../states/pollingUnitResult"

const usePollingUnitResult = (auto: boolean = false) => {
  const dispatch = useAppDispatch()
  const pollingUnitResultData = useAppSelector((state) => state.pollingUnitResult)
  const { id } = useParams()

  useEffect(() => {
    if (pollingUnitResultData.loading === false &&
      pollingUnitResultData.error === false &&
      pollingUnitResultData.data === null && auto && pollingUnitResultData.id !== Number(id)
    ) {
      dispatch(reduxRequest(`${ENUM.POLLING_UNIT}/${id}`, 'get', updatePollingUnitResult))
    }
  }, [auto, dispatch, id, pollingUnitResultData]);

  return pollingUnitResultData
  
}
export default usePollingUnitResult