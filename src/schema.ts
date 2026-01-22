import { type FormSchema } from "./form/types";

export const dynamicSchema: FormSchema = {
  id: "dynamicForm",
  fields: [
    {
      id: "fullName",
      type: "text", // ✅ must match TextField
      label: "Full Name",
      validators: [{ type: "required" }],
    },
    {
      id: "email",
      type: "text",
      label: "Email",
      validators: [
        { type: "required" },
        { type: "async", message: "Email already taken" },
      ],
    },
    {
      id: "userType",
      type: "select",
      label: "User Type",
      options: [
        { label: "Student", value: "student" },
        { label: "Teacher", value: "teacher" },
      ],
      validators: [{ type: "required" }],
    },
    {
      id: "schoolInfo",
      type: "group",
      label: "School Info",
      visibleWhen: { field: "userType", equals: "student" },
      fields: [
        {
          id: "schoolName",
          type: "text",
          label: "School Name",
          validators: [{ type: "required" }],
        },
        {
          id: "grade",
          type: "select",
          label: "Grade",
          options: [
            { label: "9th", value: "9" },
            { label: "10th", value: "10" },
          ],
        },
      ],
    },
    {
      id: "pets",
      type: "repeat",
      label: "Pets",
      fields: [
        {
          id: "petName",
          type: "text",
          label: "Pet Name",
          validators: [{ type: "required" }],
        },
        {
          id: "petType",
          type: "select",
          label: "Pet Type",
          options: [
            { label: "Dog", value: "dog" },
            { label: "Cat", value: "cat" },
            { label: "Other", value: "other" },
          ],
        },
      ],
    },
  ],
};

