import { IRuleResult } from "./Interface";

export type RuleType = "required" | "email" | "min";

export type ValidationFunction = (...args: any[]) => boolean;

export type ValidationResult = Record<string, IRuleResult[]>;
