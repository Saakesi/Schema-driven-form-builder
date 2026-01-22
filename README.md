# Form Builder Project

## Overview
This project is a **dynamic, accessible, and fully customizable form builder** built with **React 18+, TypeScript, and Tailwind CSS**.  
It supports the following:

- Core field types: Text, Checkbox, Select, Group, Repeaters
- Conditional visibility (`visibleWhen`)
- Synchronous and asynchronous validation
- Autosave with resume functionality
- Keyboard-friendly and screen-reader accessible forms
- Storybook integration with interactive scenarios

---

## Tech Stack

**Mandatory:**

- React 18+  
- TypeScript (strict mode enabled)  
- Tailwind CSS (utility-first)  
- Vite (preferred)  
- Storybook + Chromatic  

**Accessibility:**

- axe-core / Storybook A11y addon

---
Schema Documentation

All fields share the following base properties:

Property	Type	Description
id	string	Unique identifier for the field
label	string	Display label for the field
validators	Validator[]	Optional validation rules
visibleWhen	Condition	Optional conditional visibility rule

Supported Field Types

Text Field (type: "text")

Single-line text input

Supports required, minLength, and async validation

Checkbox Field (type: "checkbox")

Boolean toggle

Supports required validation

Select Field (type: "select")

Dropdown with predefined options

Supports conditional visibility and validation

Group Field (type: "group")

Container for nested fields

Logical grouping for accessibility

Repeat Field (type: "repeat")

Repeater for multiple items

Each item contains a copy of the nested fields

Users can dynamically add new items

Validation Rules

export type Validator =
  | { type: "required" }
  | { type: "minLength"; value: number }
  | { type: "async"; message: string };


required – Field must have a value

minLength – Field value must meet minimum character length

async – Simulated async validation (e.g., checking availability)

Conditional Logic

export type Condition = {
  field: string;
  equals: any;
};


Example:

visibleWhen: { field: "hasPet", equals: true }


Nested Groups and Repeaters

Fully supported for dynamic forms

Async Options

Select fields can load options asynchronously (e.g., API fetch)

Autosave & Resume

Form saves automatically to localStorage

Form resumes on reload with saved values

Accessibility

Inputs: aria-invalid on errors

Errors linked with aria-describedby

Groups: role="group" and <legend> for screen readers

Keyboard navigation fully supported

Storybook

Storybook scenarios include:

Empty form

Filled form

Conditional visibility

Repeaters (add/remove items)

Validation errors

Accessibility checks (keyboard and screen reader)

How to open:

npm run storybook


Your components will be shown with interactive stories demonstrating edge cases, failure states, and accessibility compliance.

Deliverables

Form Builder Component

Schema Documentation (schema.md)

Public Storybook Link

Notes

No third-party UI libraries are used

All styling is Tailwind-only

TypeScript strict mode enabled

Inline styles only for unavoidable dynamic behavior