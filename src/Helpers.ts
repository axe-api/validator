export const toRuleNameArray = (rules: string): string[] => {
  return rules.split("|");
};

export const getValueViaPath = (data: any, path: string): any | undefined => {
  const keys = path.split(".");

  return keys.reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return acc[key];
    }
    return undefined;
  }, data);
};
