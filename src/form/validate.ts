import { type Field } from "./types";

export async function validateForm(
  fields: Field[],
  values: Record<string, any>
): Promise<Record<string, string>> {
  const errors: Record<string, string> = {};

  const walk = async (fields: Field[]) => {
    for (const field of fields) {
      const value = values[field.id];

      if (field.validators) {
        for (const v of field.validators) {
          if (v.type === "required" && (value === undefined || value === "")) {
            errors[field.id] = "Required";
          }

          if (v.type === "minLength" && value && value.length < v.value) {
            errors[field.id] = `Minimum ${v.value} characters`;
          }

          if (v.type === "async") {
            // simulate async validation
            await new Promise((r) => setTimeout(r, 500));
            if (value === "error") {
              errors[field.id] = v.message;
            }
          }
        }
      }

      // Recurse into nested fields
      if (field.type === "group" || field.type === "repeat") {
        await walk(field.fields);
      }
    }
  };

  await walk(fields);
  return errors;
}
