import TextInput, { InputType } from "../../../../components/TextInput";

const LocationInfo = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center text-primary gap-x-2">
        <span className="block bg-primary w-3 h-3 circle"></span>
        <p className="fw-500">Location Infomation</p>
      </div>
      <div className="px-3">
        <div>
          <TextInput
            label="Organisation"
            placeholder=""
            type={InputType.text}
          />
        </div>
        <div>
          <TextInput
            label="Organisation Base Address"
            placeholder=""
            type={InputType.text}
          />
        </div>
        <div>
          <TextInput label="Postal Code" placeholder="" type={InputType.text} />
        </div>
        <div>
          <TextInput label="Country" placeholder="" type={InputType.text} />
        </div>
        <div>
          <TextInput
            label="State/Province"
            placeholder=""
            type={InputType.text}
          />
        </div>
        <div>
          <TextInput label="City" placeholder="" type={InputType.text} />
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
