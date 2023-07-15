import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from ".."
import ENUM from "../../utils/enum"
import { reduxRequest } from "../../utils/request"
import { updateAgents } from "../states/agents"

const useAgents = (auto: boolean = false) => {
  const dispatch = useAppDispatch()
  const agentsData = useAppSelector((state) => state.agents)

  useEffect(() => {
    if (agentsData.loading === false &&
      agentsData.error === false &&
      agentsData.data === null && auto
    ) {
      dispatch(reduxRequest(`${ENUM.AGENTS}`, 'get', updateAgents))
    }
  }, [auto, dispatch, agentsData]);

  return agentsData

}
export default useAgents