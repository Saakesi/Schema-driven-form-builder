import { FormBuilder } from "./form/FormBuilder";
import { dynamicSchema } from "./schema";

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Schema-Driven Form</h1>
      <FormBuilder schema={dynamicSchema} />
    </div>
  );
}

