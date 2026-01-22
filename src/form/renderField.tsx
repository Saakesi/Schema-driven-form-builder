import React from "react";
import { type Field } from "./types";
import { type FormState, type Action } from "./reducer";

type Props = {
  field: Field;
  state: FormState;
  dispatch: React.Dispatch<Action>;
  fields: Field[];
};

export function renderField({
  field,
  state,
  dispatch,
  fields,
}: Props): React.ReactNode {
  if (!state.visible.has(field.id)) return null;

  const value = state.values[field.id] ?? "";
  const error = state.errors[field.id];
  const errorId = `${field.id}-error`;

  switch (field.type) {
    case "text":
      return (
        <div className="space-y-1">
  <label
    htmlFor={field.id}
    className="block text-sm font-medium text-gray-700"
  >
    {field.label}
  </label>

  <input
    id={field.id}
    type="text"
    value={value}
    aria-invalid={!!error}
    aria-describedby={error ? `${field.id}-error` : undefined}
    onChange={(e) =>
      dispatch({
        type: "CHANGE",
        fieldId: field.id,
        value: e.target.value,
        fields,
      })
    }
    className={`
      w-full rounded-md border px-3 py-2 text-sm
      bg-gray-50 border-gray-300
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      ${error ? "border-red-500 focus:ring-red-500" : ""}
    `}
  />

  {error && (
    <p
      id={`${field.id}-error`}
      className="text-xs text-red-600"
    >
      {error}
    </p>
  )}
</div>

      );

    case "checkbox":
      return (
        <div className="flex items-start gap-2">
  <input
    id={field.id}
    type="checkbox"
    checked={!!value}
    aria-invalid={!!error}
    onChange={(e) =>
      dispatch({
        type: "CHANGE",
        fieldId: field.id,
        value: e.target.checked,
        fields,
      })
    }
    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
  />

  <label
    htmlFor={field.id}
    className="text-sm text-gray-700"
  >
    {field.label}
  </label>

  {error && (
    <p className="text-xs text-red-600">{error}</p>
  )}
</div>

      );

    case "select":
      return (
        <div className="space-y-1">
  <label
    htmlFor={field.id}
    className="block text-sm font-medium text-gray-700"
  >
    {field.label}
  </label>

  <select
    id={field.id}
    value={value}
    aria-invalid={!!error}
    onChange={(e) =>
      dispatch({
        type: "CHANGE",
        fieldId: field.id,
        value: e.target.value,
        fields,
      })
    }
    className={`
      w-full rounded-md border px-3 py-2 text-sm
      bg-gray-50 border-gray-300
      focus:outline-none focus:ring-2 focus:ring-blue-500
      ${error ? "border-red-500 focus:ring-red-500" : ""}
    `}
  >
    <option value="">Select</option>
    {field.options?.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </select>

  {error && (
    <p className="text-xs text-red-600">{error}</p>
  )}
</div>

      );

    case "group":
      return (
        <fieldset
            role="group"
            className="border border-gray-200 rounded-md p-4 space-y-4"
          >
            <legend className="px-1 text-sm font-medium text-gray-700">
              {field.label}
            </legend>

            {field.fields.map((f) => (
              <div key={f.id}>
                {renderField({ field: f, state, dispatch, fields })}
              </div>
            ))}
        </fieldset>

      );

    case "repeat": {
      const rows = state.values[field.id] || [{}];

      return (
        <div className="space-y-3">
  <label className="block text-sm font-medium text-gray-700">
    {field.label}
  </label>

  {rows.map((row: any, index: number) => (
    <div
      key={index}
      className="rounded-md border border-gray-200 bg-gray-50 p-4 space-y-3"
    >
      {field.fields.map((f) => (
        <div key={f.id} className="space-y-1">
          const inputId = `${field.id}-${index}-${f.id}`;

          <label
            htmlFor={field.id}
            className="text-sm text-gray-600"
          >
            {f.label}
          </label>
          <input
            id={field.id}
  type="text"
  value={row[f.id] ?? ""}
  aria-invalid={!!error}
  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm
             focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              const newRows = [...rows];
              newRows[index] = {
                ...newRows[index],
                [f.id]: e.target.value,
              };
              dispatch({
                type: "CHANGE",
                fieldId: field.id,
                value: newRows,
                fields,
              });
            }}
          />
        </div>
      ))}
    </div>
  ))}

  <button
    type="button"
    className="text-sm text-blue-600 hover:underline"
    onClick={() =>
      dispatch({
        type: "CHANGE",
        fieldId: field.id,
        value: [...rows, {}],
        fields,
      })
    }
  >
    + Add item
  </button>
</div>

      );
    }

    default:
      return null;
  }
}



