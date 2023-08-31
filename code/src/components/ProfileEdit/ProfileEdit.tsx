import { FC, useState } from "react";

import ProfileEditSection from "components/ProfileEditSection";

import { ProfileEditSectors } from "./lib";
import { MainSector } from "./styledComponents";

const ProfileEdit: FC = () => {
  const [openNumber, setOpenNumber] = useState<number | null>(0);

  return (
    <MainSector>
      {ProfileEditSectors.map(({ title, components }, i) => (
        <ProfileEditSection
          key={title}
          title={title}
          detailNumber={i}
          openNumber={openNumber}
          setOpenNumber={setOpenNumber}
        >
          {components.map((Component, index) => (
            <Component key={`${title}-${index}`} />
          ))}
        </ProfileEditSection>
      ))}
    </MainSector>
  );
};

export default ProfileEdit;
