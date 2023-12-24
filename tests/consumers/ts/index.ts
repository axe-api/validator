import { validate, setLocales, setOptions, isEmail } from "robust-validator";
import en from "robust-validator/dist/i18n/en.json";

const data = {
  email: null,
};

const rules = {
  email: "required|email|min:1|max:50",
};

const main = async () => {
  setLocales(en);
  setOptions({
    language: "en",
  });
  const result = await validate(data, rules);
  if (result.isValid) {
    throw new Error("The email should be invalid!");
  }

  const { message } = result.errors.email[0];
  if (message !== "The field field is required.") {
    throw new Error(`Unaccepted message: ${message}`);
  }

  console.log("ESM module tests are succeed!");
  console.log("isEmail", isEmail);
};

main();
