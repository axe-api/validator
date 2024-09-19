import { IRuleResult } from "../Interface";
import ValidationError from "./ValidationError";

class StopOnFail extends ValidationError {
  constructor(ruleSet: IRuleResult) {
    super(ruleSet);
  }
}

export default StopOnFail;
