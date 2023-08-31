import { FC } from "react";

import { SkillBadgeContainer } from "./styledComponents";

interface ISkillBadgeProps {
  skill: string;
}

const SkillBadge: FC<ISkillBadgeProps> = ({ skill }) => (
  <SkillBadgeContainer>{skill}</SkillBadgeContainer>
);

export default SkillBadge;
