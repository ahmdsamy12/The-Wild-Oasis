import { useSettings } from "../features/settings/useSettings";
import { useUpdateSetting } from "../features/settings/useUpdateSetting";
import Form from "../ui/Form";
import FormRow1 from "../ui/FormRow";
import Heading from "../ui/Heading";
import Input from "../ui/Input";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";

function Settings() {
  const {
    isLoading,
    settings: {
      minBookingsLength,
      maxBookingsLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { settingUpdate, isUpdating } = useUpdateSetting();

  function handleUpdate(e, feild) {
    const { value } = e.target;

    if (!value) return;

    settingUpdate({ [feild]: value });
  }

  if (isLoading) return <Spinner />;
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <Form>
        <FormRow1 label="Minimum nights/booking">
          <Input
            type="number"
            id="min-nights"
            disabled={isUpdating}
            role="input"
            defaultValue={minBookingsLength}
            onBlur={(e) => handleUpdate(e, "minBookingsLength")}
          />
        </FormRow1>
        <FormRow1 label="Maximum nights/booking">
          <Input
            type="number"
            id="max-nights"
            disabled={isUpdating}
            defaultValue={maxBookingsLength}
            onBlur={(e) => handleUpdate(e, "maxBookingsLength")}
          />
        </FormRow1>
        <FormRow1 label="Maximum guests/booking">
          <Input
            type="number"
            id="max-guests"
            disabled={isUpdating}
            defaultValue={maxGuestsPerBooking}
            onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          />
        </FormRow1>
        <FormRow1 label="Breakfast price">
          <Input
            type="number"
            id="breakfast-price"
            disabled={isUpdating}
            defaultValue={breakfastPrice}
            onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          />
        </FormRow1>
      </Form>
    </Row>
  );
}

export default Settings;
