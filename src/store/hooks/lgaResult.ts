import { ChangeEvent } from "react"
import { useAppDispatch, useAppSelector } from ".."
import ENUM from "../../utils/enum"
import { reduxRequest } from "../../utils/request"
import { updateLgaResult } from "../states/lgaResult"

const useLgaResult = () => {
  const dispatch = useAppDispatch()
  const lgaResultData = useAppSelector((state) => state.lgaResult)

  const handleLgaChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value
    if (id) {
      dispatch(reduxRequest(`${ENUM.LGA}/${id}`, 'get', updateLgaResult))
    }
  }

  return { ...lgaResultData, handleLgaChange }
}
export default useLgaResult