import Form from ", ../.. /ui/Form";
import FormRow1 from "../../ui/FormRow";
import Input from "../../ui/Input";

function UpdateSettingsForm() {
  return (
    <Form>
      <FormRow1 label="Minimum nights/booking">
        <Input type="number" id="min-nights" role="input" />
      </FormRow1>
      <FormRow1 label="Maximum nights/booking">
        <Input type="number" id="max-nights" />
      </FormRow1>
      <FormRow1 label="Maximum guests/booking">
        <Input type="number" id="max-guests" />
      </FormRow1>
      <FormRow1 label="Breakfast price">
        <Input type="number" id="breakfast-price" />
      </FormRow1>
    </Form>
  );
}

export default UpdateSettingsForm;
