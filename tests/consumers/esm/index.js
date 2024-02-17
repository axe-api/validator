import {
  validate,
  setLocales,
  setOptions,
  isEmail,
  az,
} from "robust-validator";

const data = {
  email: null,
};

const rules = {
  email: "required|email|min:1|max:50",
};

const main = async () => {
  setLocales(az);
  setOptions({ language: "az" });
  const result = await validate(data, rules);
  if (result.isValid) {
    throw new Error("The email should be invalid!");
  }

  const { message } = result.errors.email[0];
  if (message !== "Sahə tələb olunur.") {
    throw new Error(`Unaccepted message: ${message}`);
  }

  console.log("ESM module tests are succeed!");
  console.log("isEmail", isEmail);
};

main();
