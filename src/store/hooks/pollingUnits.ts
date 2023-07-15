import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from ".."
import ENUM from "../../utils/enum"
import { reduxRequest } from "../../utils/request"
import { updatePollingUnits } from "../states/pollingUnits"

const usePollingUnits = (auto: boolean = false) => {
  const dispatch = useAppDispatch()
  const pollingUnitsData = useAppSelector((state) => state.pollingUnits)

  useEffect(() => {
    if (pollingUnitsData.loading === false &&
      pollingUnitsData.error === false &&
      pollingUnitsData.data === null && auto
    ) {
      dispatch(reduxRequest(`${ENUM.POLLING_UNIT}`, 'get', updatePollingUnits))
    }
  }, [auto, dispatch,  pollingUnitsData]);

  return pollingUnitsData

}
export default usePollingUnits