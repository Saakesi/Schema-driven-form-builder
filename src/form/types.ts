/* =========================
   Conditions
========================= */
export type Condition = {
  field: string;
  equals: any;
};

/* =========================
   Validators
========================= */
export type Validator =
  | { type: "required" }
  | { type: "minLength"; value: number }
  | { type: "async"; message: string };

/* =========================
   Base Field
========================= */
export type BaseField = {
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
};

/* =========================
   Field Types
========================= */
export type TextField = BaseField & {
  type: "text";
};

export type CheckboxField = BaseField & {
  type: "checkbox";
};

export type SelectField = BaseField & {
  type: "select";
  options: { label: string; value: string }[];
};

export type GroupField = BaseField & {
  type: "group";
  fields: Field[];
};

export type RepeatField = BaseField & {
  type: "repeat";
  fields: Field[];
};

/* =========================
   Field Union
========================= */
export type Field =
  | TextField
  | CheckboxField
  | SelectField
  | GroupField
  | RepeatField;

/* =========================
   Form Schema
========================= */
export type FormSchema = {
  id: string;
  fields: Field[];
};



