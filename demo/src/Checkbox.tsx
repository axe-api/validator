import styled from "styled-components";

interface CheckboxProps {
  labelText: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 10px;
`;

const StyledCheckboxInput = styled.input`
  margin-right: 8px; /* Adjust spacing between checkbox and label */
  cursor: pointer;
  display: none;
`;

const StyledCustomCheckbox = styled.div<{ checked: boolean }>`
  width: 20px; /* Set the width of the checkbox area */
  height: 20px; /* Set the height of the checkbox area */
  border: 2px solid #000;
  background-color: ${(props) =>
    props.checked
      ? "#007bff"
      : "#fff"}; /* Change background color when checked */
  color: white;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

const Checkbox: React.FC<CheckboxProps> = ({
  labelText,
  checked,
  onChange,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <StyledCheckboxContainer>
      <StyledLabel>
        <StyledCheckboxInput
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <StyledCustomCheckbox checked={checked}>✓</StyledCustomCheckbox>
        {labelText}
      </StyledLabel>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
