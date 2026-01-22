import { useEffect, useReducer, useState } from "react";
import { type FormSchema } from "./types";
import { formReducer, type FormState } from "./reducer";
import { renderField } from "./renderField";
import { validateForm } from "./validate";

type Props = {
  schema: FormSchema;
};

const initialState: FormState = {
  values: {},
  visible: new Set<string>(),
  errors: {},
};

export function FormBuilder({ schema }: Props) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(schema.id);
    if (!saved) return;

    const parsed = JSON.parse(saved) as Record<string, unknown>;
    Object.entries(parsed).forEach(([fieldId, value]) => {
      dispatch({
        type: "CHANGE",
        fieldId,
        value,
        fields: schema.fields,
      });
    });
  }, [schema.id, schema.fields]);

  useEffect(() => {
    dispatch({ type: "INIT", fields: schema.fields });
  }, [schema.fields]);

  useEffect(() => {
    localStorage.setItem(schema.id, JSON.stringify(state.values));
  }, [state.values, schema.id]);

  const handleSubmit = async () => {
    console.log("SUBMIT CLICKED");

    const errors = await validateForm(schema.fields, state.values);
    console.log("ERRORS:", errors);

    dispatch({ type: "SET_ERRORS", errors });

    if (Object.keys(errors).length === 0) {
      console.log("FORM SUBMITTED:", state.values);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex justify-center py-12">
      <form
        className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 space-y-6"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {submitted && (
          <div className="p-4 bg-green-100 text-green-800 rounded-md">
            ✅ Form submitted successfully
          </div>
        )}

        {schema.fields.map((field) =>
          renderField({
            field,
            state,
            dispatch,
            fields: schema.fields,
          })
        )}

        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium
                     hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>

        <pre className="mt-6 text-xs bg-gray-50 p-4 rounded-md overflow-auto">
          {JSON.stringify(state.values, null, 2)}
        </pre>
      </form>
    </div>
  );
}







