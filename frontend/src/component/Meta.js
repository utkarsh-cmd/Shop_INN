import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </div>
  );
};
Meta.defaultProps = {
  title: "Shop_In with us",
};
export default Meta;
