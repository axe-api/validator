import { Translation } from "../Types";

const translations: Translation = {
  accepted: "O campo deve ser aceito.",
  after: "O campo deve ser depois de {0}.",
  after_or_equal: "O campo deve ser igual ou depois de {0}.",
  alpha: "O campo deve conter apenas caracteres alfabéticos.",
  alpha_dash:
    "O campo pode conter apenas caracteres alfanuméricos, traços e underscores.",
  alpha_num: "O campo deve ser alfanumérico.",
  array: "O campo deve ser um array.",
  before: "O campo deve ser antes de {0}.",
  before_or_equal: "O campo deve ser igual ou antes de {0}.",
  between: "O campo deve estar entre {0} e {1}.",
  boolean: "O campo deve ser um valor booleano.",
  confirmed: "A confirmação do campo não corresponde.",
  email: "O campo deve ser um email.",
  date: "O campo não está em um formato de data válido.",
  digits: "O campo deve ter {0} dígitos.",
  digits_between: "O campo deve ter entre {0} e {1} dígitos.",
  in: "O campo selecionado é inválido.",
  integer: "O campo deve ser um número inteiro.",
  hex: "O campo deve ter formato hexadecimal.",
  min: "O campo deve ser no mínimo {0}.",
  max: "O campo não pode ser maior que {0}.",
  not_in: "O campo selecionado é inválido.",
  numeric: "O campo deve ser um número.",
  required: "O campo é obrigatório.",
  size: "O tamanho do campo deve ser {0}.",
  string: "O campo deve ser uma string.",
  url: "O campo deve ser uma URL.",
};

export default translations;
