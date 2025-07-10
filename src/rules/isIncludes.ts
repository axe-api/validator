export default (value: unknown, ...args: unknown[]): boolean => {
  let params: unknown[];

  // validate() function passes the IContext all the time. So we should be sure
  // if there is an IContext parameter in the array.
  const maybeContext: any = args[args.length - 1];

  if (typeof maybeContext === "object" && maybeContext.definition) {
    params = args.slice(0, -1);
  } else {
    params = args as string[];
  }

  const options = params
    .map((item) => (item as any).toString())
    .map((item) => item.split(","))
    .flat();

  const items = options.map((item) =>
    item.toString().trim().toLocaleLowerCase()
  );

  return items.includes((value || "").toString().trim().toLocaleLowerCase());
};
