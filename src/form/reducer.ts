import { type Field } from "./types";
import { evaluateVisibility } from "./conditions";

export type FormState = {
  values: Record<string, any>;
  visible: Set<string>;
  errors: Record<string, string>;
};

export type Action =
  | { type: "INIT"; fields: Field[] }
  | { type: "CHANGE"; fieldId: string; value: any; fields: Field[] }
  | { type: "SET_ERRORS"; errors: Record<string, string> };

export function formReducer(
  state: FormState,
  action: Action
): FormState {
  switch (action.type) {
    case "INIT":
      return {
        values: {},
        errors: {},
        visible: evaluateVisibility(action.fields, {}),
      };

    case "CHANGE": {
      const newValues = {
        ...state.values,
        [action.fieldId]: action.value,
      };

      return {
        ...state,
        values: newValues,
        visible: evaluateVisibility(action.fields, newValues),
      };
    }

    case "SET_ERRORS":
      return { ...state, errors: action.errors };

    default:
      return state;
  }
}

