import { TextInput, Button } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import isEmail from "validator/lib/isEmail";

const ValidarEmailFormularioUserForm = () => {
  const form = useForm({
    initialValues: { email: "" },
    errorMessages: { email: "Email is required" },
    validationRules: {
      email: (value) => isEmail(value),
    },
  });

  function handleSubmit(values) {
    console.log("form submitted: ", values);
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        required
        label="Email"
        placeholder="Email Address"
        {...form.getInputProps("email")}
      />
      <Button style={{ marginTop: 10 }} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default ValidarEmailFormularioUserForm