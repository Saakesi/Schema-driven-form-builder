import type { Meta, StoryObj } from "@storybook/react";
import { FormBuilder } from "../FormBuilder";
import { exampleSchema } from "../../schema/exampleSchema";

const meta: Meta<typeof FormBuilder> = {
  title: "Form/FormBuilder",
  component: FormBuilder,
};

export const Empty: Story = {
  args: {
    schema: exampleSchema,
  },
};

export const WithSavedData: Story = {
  loaders: [
    async () => {
      localStorage.setItem(
        "pet-form",
        JSON.stringify({
          name: "Saakshi",
          hasPet: true,
          petName: "Bruno",
        })
      );
      return {};
    },
  ],
  args: {
    schema: exampleSchema,
  },
};

export const ValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector("button");
    button?.click();
  },
  args: {
    schema: exampleSchema,
  },
};

export const ConditionalFields: Story = {
  play: async ({ canvasElement }) => {
    const checkbox = canvasElement.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;

    checkbox?.click();
  },
  args: {
    schema: exampleSchema,
  },
};

export const RepeatField: Story = {
  play: async ({ canvasElement }) => {
    const addButton = canvasElement.querySelector(
      'button[type="button"]'
    );
    if (addButton instanceof HTMLButtonElement) {
  addButton.click();
}

  },
  args: {
    schema: exampleSchema,
  },
};

export const KeyboardOnly: Story = {
  parameters: {
    a11y: {
      disable: false,
    },
  },
  args: {
    schema: exampleSchema,
  },
};


export default meta;
type Story = StoryObj<typeof FormBuilder>;



