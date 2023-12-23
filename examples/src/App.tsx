import styled from "styled-components";
import * as prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import * as prettierPluginEstree from "prettier/plugins/estree";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { setLocales, validate } from "robust-validator";
import en from "robust-validator/dist/i18n/en.json";
import { RULE_PARAMETER_MAP } from "./Constants";
import Checkbox from "./Checkbox";
import { useEffect, useState } from "react";

setLocales(en);

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1``;

const SubTitle = styled.h2`
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
`;

const Frame = styled.div``;

const Highlight = styled(SyntaxHighlighter)`
  margin-top: 0px;
  font-size: 16px;
  background-color: #161618 !important;
`;

const Column = styled.div`
  display: flex;
  gap: 20px;
`;

const Options = styled.div`
  width: 35%;
`;

const Playground = styled.div`
  width: 65%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px 8px;
  font-size: 16px;
`;

const RuleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

interface IRule {
  key: string;
  params: any[];
  title: string;
}

function App() {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const [result, setResult] = useState<any>(null);
  const [selectedRules, setSelectedRule] = useState<Record<string, boolean>>({
    required: true,
    email: true,
    min: true,
    max: true,
  });

  const rules: IRule[] = [
    ...Object.keys(RULE_PARAMETER_MAP).map((key) => {
      const params = RULE_PARAMETER_MAP[key];
      const suffix = params.length === 0 ? "" : `:${params.join(",")}`;
      return {
        key,
        params,
        title: `${key}${suffix}`,
      };
    }),
  ];
  rules.sort((a, b) => a.title.localeCompare(b.title));

  const definition = {
    myInput: "",
  };

  const createCodes = async () => {
    const dataAsString = JSON.stringify({
      myInput: input,
    });
    const rulesAsString = JSON.stringify(definition);
    const definitionCode = `
    import { validate } from "robust-validator";

    const result = await validate(
      ${dataAsString}, // data
      ${rulesAsString} // validation rules
    )`;
    setCode(
      await prettier.format(definitionCode, {
        parser: "babel",
        plugins: [parserBabel, prettierPluginEstree],
      }),
    );
  };

  const validateData = async () => {
    const result = await validate(
      {
        myInput: input,
      },
      definition,
    );
    setResult(result);
  };

  useEffect(() => {
    createCodes();
    validateData();
    // eslint-disable-next-line
  }, [selectedRules, input]);

  const items: string[] = [];
  Object.keys(selectedRules).forEach((key) => {
    if (selectedRules[key]) {
      const ruleObject = rules.find((item) => item.key === key);
      if (ruleObject) {
        items.push(ruleObject.title);
      }
    }
  });

  definition.myInput = items.join("|");

  const handleRuleSelection = (rule: IRule) => {
    const newState = {
      ...selectedRules,
      [rule.key]: !selectedRules[rule.key],
    };
    setSelectedRule(newState);
  };

  return (
    <Container>
      <Title>robust-validator</Title>

      <Column>
        <Options>
          <SubTitle>Rules</SubTitle>
          <RuleList>
            {rules.map((rule, index) => (
              <Checkbox
                key={index}
                labelText={rule.title}
                checked={selectedRules[rule.key] || false}
                onChange={() => handleRuleSelection(rule)}
              />
            ))}
          </RuleList>
        </Options>
        <Playground>
          <SubTitle>Code</SubTitle>
          <Frame>
            <Highlight language="javascript" style={stackoverflowDark}>
              {code}
            </Highlight>
          </Frame>

          <SubTitle>myInput</SubTitle>
          <Input
            type="text"
            placeholder="Type something"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <SubTitle>result</SubTitle>
          <Frame>
            <Highlight language="json" style={stackoverflowDark}>
              {JSON.stringify(result, undefined, 2)}
            </Highlight>
          </Frame>
        </Playground>
      </Column>
    </Container>
  );
}

export default App;
