import { FC } from "react";

import DetailsEditButton from "components/DetailsEditButton";

import { CertificationsContainer } from "./styledComponents";

const CertificationsEdit: FC = () => {
  return (
    <CertificationsContainer>
      <DetailsEditButton title="+ New Certification" disabled={true} />
    </CertificationsContainer>
  );
};

export default CertificationsEdit;
