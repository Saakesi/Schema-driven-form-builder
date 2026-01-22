import { type Field } from "./types";

export function evaluateVisibility(
  fields: Field[],
  values: Record<string, any>
): Set<string> {
  const visible = new Set<string>();

  const walk = (fields: Field[]) => {
    fields.forEach((field) => {
      const isVisible =
        !field.visibleWhen ||
        values[field.visibleWhen.field] === field.visibleWhen.equals;

      if (isVisible) {
        visible.add(field.id);

        // recurse into groups & repeaters
        if (field.type === "group" || field.type === "repeat") {
          walk(field.fields);
        }
      }
    });
  };

  walk(fields);
  return visible;
}
