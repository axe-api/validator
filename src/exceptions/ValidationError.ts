import { IRuleResult } from "../Interface";

class ValidationError extends Error {
  public ruleSet: IRuleResult;

  constructor(ruleSet: IRuleResult) {
    super();
    this.ruleSet = ruleSet;
  }
}

export default ValidationError;
