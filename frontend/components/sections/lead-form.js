import { getButtonAppearance } from "utils/button";
import Button from "../elements/button";

const LeadForm = ({ data }) => {

  return (
    <div className="py-16 px-32 flex justify-between items-center bg-[#27aacb]">
      <h1 className="text-6xl text-white font-extrabold">{data.title}</h1>
      <div className="text-9xl text-white">→</div>
        <Button
          button={data.submitButton}
          appearance={getButtonAppearance(data.submitButton.type, "dark")}
          type="button"
        />
    </div>
  );
};

export default LeadForm;
