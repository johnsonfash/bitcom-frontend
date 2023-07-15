import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from ".."
import { reduxRequest } from "../../utils/request"
import ENUM from "../../utils/enum"
import { updateLgas } from "../states/lgas"

const useLgas = (auto: boolean = false) => {
  const dispatch = useAppDispatch()
  const lgasData = useAppSelector((state) => state.lgas)

  useEffect(() => {
    if (lgasData.loading === false &&
      lgasData.error === false &&
      lgasData.data === null && auto) {
      dispatch(reduxRequest(ENUM.LGA, 'get', updateLgas))
    }
  }, [auto, dispatch, lgasData]);

  return lgasData
}
export default useLgas