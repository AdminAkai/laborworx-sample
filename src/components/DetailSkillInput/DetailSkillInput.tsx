import { FC } from "react";

import { useAppDispatch, useAppSelector } from "hooks/redux";

import { setWorkerError, setWorkerSkills, updateSkillsToDelete } from "redux/features/workerSlice";
import { selectAllSkills, selectWorkerSkillsForInput } from "redux/features/workerSlice/selectors";

import ProfileAutocompleteInput from "components/ProfileAutocompleteInput";

import textTheme from "theme/text";
import { themeColors } from "theme/colors";

import { ProfileOnChange } from "types/workers";

import { InputContainer } from "./styledComponents";
import { notEmptyArrayValid } from "constants/validation";

const DetailSkillInput: FC = () => {
  const dispatch = useAppDispatch();

  const allSkills = useAppSelector(selectAllSkills);
  const { oldWorkerSkills, currentWorkerSkills } = useAppSelector(selectWorkerSkillsForInput);

  const handleWorkerSkillSelect: ProfileOnChange = async ({ e, setInput, setError, newValue }) => {
    dispatch(setWorkerError({ property: "skills", value: "" }));
    setError("");
    e.preventDefault();
    setInput(newValue);
    const newSkills = [];
    const formatSkills = [];
    newValue.forEach((value) => {
      const skillIndex = allSkills.findIndex((skill) => skill.label === value);
      formatSkills.push(allSkills[skillIndex]);
      let exists = false;
      for (let i = 0; i < oldWorkerSkills.length; i++) {
        if (oldWorkerSkills[i] === allSkills[skillIndex].skillId) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        newSkills.push(allSkills[skillIndex].skillId);
      }
    });
    dispatch(setWorkerSkills({ workerSkills: formatSkills, skillsToAdd: newSkills }));
  };

  const handleDelete = async ({ option, newValues, setError }): Promise<void> => {
    try {
      await notEmptyArrayValid.validate(newValues);
      const skillIndex = allSkills.findIndex((skill) => skill.label === option);
      if (skillIndex !== -1) {
        dispatch(updateSkillsToDelete(allSkills[skillIndex].skillId));
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
      dispatch(setWorkerError({ property: "skills", value: error.message }));
    }
  };

  return (
    <InputContainer>
      <span
        style={{
          color: themeColors.text.Black,
          ...textTheme.headings.h1.inlineStyle,
          userSelect: "none",
          marginTop: "24px",
          marginBottom: "24px"
        }}
      >
        Skills
      </span>
      <ProfileAutocompleteInput
        options={allSkills.map((option) => `${option.label}`)}
        onChange={handleWorkerSkillSelect}
        onDelete={handleDelete}
        values={currentWorkerSkills}
        placeholder="Select Skill"
        multiple
      />
    </InputContainer>
  );
};

export default DetailSkillInput;
