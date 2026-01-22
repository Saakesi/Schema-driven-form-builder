# Form Schema Documentation

This document describes the structure, fields, and validation rules for the Schema-Driven Dynamic Form Builder project.

---

## Table of Contents

1. [Overview](#overview)  
2. [FormSchema](#formschema)  
3. [Field Properties](#field-properties)  
4. [Supported Field Types](#supported-field-types)  
5. [Validation Rules](#validation-rules)  
6. [Conditional Logic](#conditional-logic)  
7. [Nested Groups and Repeaters](#nested-groups-and-repeaters)  
8. [Async Options](#async-options)  
9. [Autosave & Resume](#autosave--resume)  
10. [Accessibility](#accessibility)  

---

## Overview

The form builder uses a **schema-first approach**, where all forms are defined using a JSON schema. The schema specifies:

- Fields
- Field types
- Validators
- Conditional visibility rules
- Nested structures
- Repeatable sections

The form engine dynamically renders forms based on this schema and supports:

- Real-time validation
- Conditional logic
- Keyboard navigation
- Screen reader accessibility
- Autosave and resume

---

## FormSchema

The top-level object defining a form:

```ts
export type FormSchema = {
  id: string;        // Unique identifier for the form
  fields: Field[];   // Array of fields in the form
};
