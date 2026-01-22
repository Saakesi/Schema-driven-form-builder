import { type FormSchema } from "../form/types";

export const exampleSchema: FormSchema = {
  id: "storybook-form",
  fields: [
    {
      id: "username",
      type: "text",
      label: "Your name",
      validators: [{ type: "required" }],
    },
    {
      id: "pet",
      type: "select",
      label: "Pet type",
      options: [
        { label: "Dog", value: "dog" },
        { label: "Cat", value: "cat" },
      ],
      validators: [{ type: "required" }],
    },
    {
      id: "petGroup",
      type: "group",
      label: "Pet details",
      fields: [
        {
          id: "petname",
          type: "text",
          label: "Pet name",
          validators: [{ type: "required" }],
        },
        {
          id: "vaccinated",
          type: "checkbox",
          label: "Vaccinated?",
        },
      ],
    },
    {
      id: "vaccines",
      type: "repeat",
      label: "Vaccines",
      fields: [
        {
          id: "vaccineName",
          type: "text",
          label: "Vaccine name",
        },
      ],
    },
  ],
};
