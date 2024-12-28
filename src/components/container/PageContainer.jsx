/* eslint-disable react/prop-types */
import {Container} from "@mui/material";
function PageContainer({children}) {
  return (
    <div>
      <Container maxWidth="lg">{children}</Container>
    </div>
  );
}

export default PageContainer;
