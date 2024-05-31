import React from "react";
import { CompanyState } from "../../hooks/company/index.type";

interface DetailProps {
  company: CompanyState;
}

const Detail: React.FC<DetailProps> = ({ company }) => {
  return (
    <div className="flex items-center gap-2">
      <span>{company.id} : </span>
      <span className="text-info-900">{company.name}.</span>
      <span>{company.description}</span>
    </div>
  );
};

export default Detail;
