import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DClFI4J-.js";import"./preload-helper-PPVm8Dsz.js";function h(e,n){const i=new Set,u=l=>{l.forEach(a=>{(!a.visibleWhen||n[a.visibleWhen.field]===a.visibleWhen.equals)&&(i.add(a.id),(a.type==="group"||a.type==="repeat")&&u(a.fields))})};return u(e),i}function x(e,n){switch(n.type){case"INIT":return{values:{},errors:{},visible:h(n.fields,{})};case"CHANGE":{const i={...e.values,[n.fieldId]:n.value};return{...e,values:i,visible:h(n.fields,i)}}case"SET_ERRORS":return{...e,errors:n.errors};default:return e}}function w({field:e,state:n,dispatch:i,fields:u}){if(!n.visible.has(e.id))return null;const l=n.values[e.id]??"",a=n.errors[e.id];switch(`${e.id}`,e.type){case"text":return t.jsxs("div",{className:"space-y-1",children:[t.jsx("label",{htmlFor:e.id,className:"block text-sm font-medium text-gray-700",children:e.label}),t.jsx("input",{id:e.id,type:"text",value:l,"aria-invalid":!!a,"aria-describedby":a?`${e.id}-error`:void 0,onChange:r=>i({type:"CHANGE",fieldId:e.id,value:r.target.value,fields:u}),className:`
      w-full rounded-md border px-3 py-2 text-sm
      bg-gray-50 border-gray-300
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      ${a?"border-red-500 focus:ring-red-500":""}
    `}),a&&t.jsx("p",{id:`${e.id}-error`,className:"text-xs text-red-600",children:a})]});case"checkbox":return t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("input",{id:e.id,type:"checkbox",checked:!!l,"aria-invalid":!!a,onChange:r=>i({type:"CHANGE",fieldId:e.id,value:r.target.checked,fields:u}),className:"mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"}),t.jsx("label",{htmlFor:e.id,className:"text-sm text-gray-700",children:e.label}),a&&t.jsx("p",{className:"text-xs text-red-600",children:a})]});case"select":return t.jsxs("div",{className:"space-y-1",children:[t.jsx("label",{htmlFor:e.id,className:"block text-sm font-medium text-gray-700",children:e.label}),t.jsxs("select",{id:e.id,value:l,"aria-invalid":!!a,onChange:r=>i({type:"CHANGE",fieldId:e.id,value:r.target.value,fields:u}),className:`
      w-full rounded-md border px-3 py-2 text-sm
      bg-gray-50 border-gray-300
      focus:outline-none focus:ring-2 focus:ring-blue-500
      ${a?"border-red-500 focus:ring-red-500":""}
    `,children:[t.jsx("option",{value:"",children:"Select"}),e.options?.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))]}),a&&t.jsx("p",{className:"text-xs text-red-600",children:a})]});case"group":return t.jsxs("fieldset",{role:"group",className:"border border-gray-200 rounded-md p-4 space-y-4",children:[t.jsx("legend",{className:"px-1 text-sm font-medium text-gray-700",children:e.label}),e.fields.map(r=>t.jsx("div",{children:w({field:r,state:n,dispatch:i,fields:u})},r.id))]});case"repeat":{const r=n.values[e.id]||[{}];return t.jsxs("div",{className:"space-y-3",children:[t.jsx("label",{className:"block text-sm font-medium text-gray-700",children:e.label}),r.map((s,y)=>t.jsx("div",{className:"rounded-md border border-gray-200 bg-gray-50 p-4 space-y-3",children:e.fields.map(m=>t.jsxs("div",{className:"space-y-1",children:["const inputId = `$",e.id,"-$",y,"-$",m.id,"`;",t.jsx("label",{htmlFor:e.id,className:"text-sm text-gray-600",children:m.label}),t.jsx("input",{id:e.id,type:"text",value:s[m.id]??"","aria-invalid":!!a,className:`w-full rounded-md border border-gray-300 px-3 py-2 text-sm
             focus:outline-none focus:ring-2 focus:ring-blue-500`,onChange:j=>{const k=[...r];k[y]={...k[y],[m.id]:j.target.value},i({type:"CHANGE",fieldId:e.id,value:k,fields:u})}})]},m.id))},y)),t.jsx("button",{type:"button",className:"text-sm text-blue-600 hover:underline",onClick:()=>i({type:"CHANGE",fieldId:e.id,value:[...r,{}],fields:u}),children:"+ Add item"})]})}default:return null}}w.__docgenInfo={description:"",methods:[],displayName:"renderField",props:{field:{required:!0,tsType:{name:"union",raw:`| TextField
| CheckboxField
| SelectField
| GroupField
| RepeatField`,elements:[{name:"intersection",raw:`BaseField & {
  type: "text";
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "text";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "checkbox";
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "checkbox";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"checkbox"',required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "select";
  options: { label: string; value: string }[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "select";
  options: { label: string; value: string }[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"select"',required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]",required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "group";
  fields: Field[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "group";
  fields: Field[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"group"',required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"Field"}],raw:"Field[]",required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "repeat";
  fields: Field[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "repeat";
  fields: Field[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"repeat"',required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"Field"}],raw:"Field[]",required:!0}}]}}]}]},description:""},state:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  values: Record<string, any>;
  visible: Set<string>;
  errors: Record<string, string>;
}`,signature:{properties:[{key:"values",value:{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>",required:!0}},{key:"visible",value:{name:"Set",elements:[{name:"string"}],raw:"Set<string>",required:!0}},{key:"errors",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}}]}},description:""},dispatch:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<Action>",elements:[{name:"union",raw:`| { type: "INIT"; fields: Field[] }
| { type: "CHANGE"; fieldId: string; value: any; fields: Field[] }
| { type: "SET_ERRORS"; errors: Record<string, string> }`,elements:[{name:"signature",type:"object",raw:'{ type: "INIT"; fields: Field[] }',signature:{properties:[{key:"type",value:{name:"literal",value:'"INIT"',required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"union",raw:`| TextField
| CheckboxField
| SelectField
| GroupField
| RepeatField`,elements:[{name:"intersection",raw:`BaseField & {
  type: "text";
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "text";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "checkbox";
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "checkbox";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"checkbox"',required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "select";
  options: { label: string; value: string }[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "select";
  options: { label: string; value: string }[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"select"',required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]",required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "group";
  fields: Field[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "group";
  fields: Field[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"group"',required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"Field"}],raw:"Field[]",required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "repeat";
  fields: Field[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "repeat";
  fields: Field[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"repeat"',required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"Field"}],raw:"Field[]",required:!0}}]}}]}]}],raw:"Field[]",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "CHANGE"; fieldId: string; value: any; fields: Field[] }',signature:{properties:[{key:"type",value:{name:"literal",value:'"CHANGE"',required:!0}},{key:"fieldId",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"union",raw:`| TextField
| CheckboxField
| SelectField
| GroupField
| RepeatField`,elements:[{name:"intersection",raw:`BaseField & {
  type: "text";
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "text";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "checkbox";
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "checkbox";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"checkbox"',required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "select";
  options: { label: string; value: string }[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "select";
  options: { label: string; value: string }[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"select"',required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]",required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "group";
  fields: Field[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "group";
  fields: Field[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"group"',required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"Field"}],raw:"Field[]",required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "repeat";
  fields: Field[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "repeat";
  fields: Field[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"repeat"',required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"Field"}],raw:"Field[]",required:!0}}]}}]}]}],raw:"Field[]",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "SET_ERRORS"; errors: Record<string, string> }',signature:{properties:[{key:"type",value:{name:"literal",value:'"SET_ERRORS"',required:!0}},{key:"errors",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!0}}]}}]}]},description:""},fields:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| TextField
| CheckboxField
| SelectField
| GroupField
| RepeatField`,elements:[{name:"intersection",raw:`BaseField & {
  type: "text";
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "text";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "checkbox";
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "checkbox";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"checkbox"',required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "select";
  options: { label: string; value: string }[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "select";
  options: { label: string; value: string }[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"select"',required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]",required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "group";
  fields: Field[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "group";
  fields: Field[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"group"',required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"Field"}],raw:"Field[]",required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "repeat";
  fields: Field[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "repeat";
  fields: Field[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"repeat"',required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"Field"}],raw:"Field[]",required:!0}}]}}]}]}],raw:"Field[]"},description:""}}};async function F(e,n){const i={},u=async l=>{for(const a of l){const r=n[a.id];if(a.validators)for(const s of a.validators)s.type==="required"&&(r===void 0||r==="")&&(i[a.id]="Required"),s.type==="minLength"&&r&&r.length<s.value&&(i[a.id]=`Minimum ${s.value} characters`),s.type==="async"&&(await new Promise(y=>setTimeout(y,500)),r==="error"&&(i[a.id]=s.message));(a.type==="group"||a.type==="repeat")&&await u(a.fields)}};return await u(e),i}const L={values:{},visible:new Set,errors:{}};function f({schema:e}){const[n,i]=p.useReducer(x,L),[u,l]=p.useState(!1);p.useEffect(()=>{const r=localStorage.getItem(e.id);if(!r)return;const s=JSON.parse(r);Object.entries(s).forEach(([y,m])=>{i({type:"CHANGE",fieldId:y,value:m,fields:e.fields})})},[e.id,e.fields]),p.useEffect(()=>{i({type:"INIT",fields:e.fields})},[e.fields]),p.useEffect(()=>{localStorage.setItem(e.id,JSON.stringify(n.values))},[n.values,e.id]);const a=async()=>{console.log("SUBMIT CLICKED");const r=await F(e.fields,n.values);console.log("ERRORS:",r),i({type:"SET_ERRORS",errors:r}),Object.keys(r).length===0&&(console.log("FORM SUBMITTED:",n.values),l(!0))};return t.jsx("div",{className:"min-h-screen bg-blue-100 flex justify-center py-12",children:t.jsxs("form",{className:"w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 space-y-6",noValidate:!0,onSubmit:r=>{r.preventDefault(),a()},children:[u&&t.jsx("div",{className:"p-4 bg-green-100 text-green-800 rounded-md",children:"✅ Form submitted successfully"}),e.fields.map(r=>w({field:r,state:n,dispatch:i,fields:e.fields})),t.jsx("button",{type:"submit",className:`px-6 py-2 rounded-md bg-blue-600 text-white font-medium
                     hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`,children:"Submit"}),t.jsx("pre",{className:"mt-6 text-xs bg-gray-50 p-4 rounded-md overflow-auto",children:JSON.stringify(n.values,null,2)})]})})}f.__docgenInfo={description:"",methods:[],displayName:"FormBuilder",props:{schema:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: string;
  fields: Field[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"union",raw:`| TextField
| CheckboxField
| SelectField
| GroupField
| RepeatField`,elements:[{name:"intersection",raw:`BaseField & {
  type: "text";
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "text";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"text"',required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "checkbox";
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "checkbox";
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"checkbox"',required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "select";
  options: { label: string; value: string }[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "select";
  options: { label: string; value: string }[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"select"',required:!0}},{key:"options",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]",required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "group";
  fields: Field[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "group";
  fields: Field[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"group"',required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"Field"}],raw:"Field[]",required:!0}}]}}]},{name:"intersection",raw:`BaseField & {
  type: "repeat";
  fields: Field[];
}`,elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  validators?: Validator[];
  visibleWhen?: Condition;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"validators",value:{name:"Array",elements:[{name:"union",raw:`| { type: "required" }
| { type: "minLength"; value: number }
| { type: "async"; message: string }`,elements:[{name:"signature",type:"object",raw:'{ type: "required" }',signature:{properties:[{key:"type",value:{name:"literal",value:'"required"',required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "minLength"; value: number }',signature:{properties:[{key:"type",value:{name:"literal",value:'"minLength"',required:!0}},{key:"value",value:{name:"number",required:!0}}]}},{name:"signature",type:"object",raw:'{ type: "async"; message: string }',signature:{properties:[{key:"type",value:{name:"literal",value:'"async"',required:!0}},{key:"message",value:{name:"string",required:!0}}]}}]}],raw:"Validator[]",required:!1}},{key:"visibleWhen",value:{name:"signature",type:"object",raw:`{
  field: string;
  equals: any;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0}},{key:"equals",value:{name:"any",required:!0}}]},required:!1}}]}},{name:"signature",type:"object",raw:`{
  type: "repeat";
  fields: Field[];
}`,signature:{properties:[{key:"type",value:{name:"literal",value:'"repeat"',required:!0}},{key:"fields",value:{name:"Array",elements:[{name:"Field"}],raw:"Field[]",required:!0}}]}}]}]}],raw:"Field[]",required:!0}}]}},description:""}}};const d={id:"storybook-form",fields:[{id:"username",type:"text",label:"Your name",validators:[{type:"required"}]},{id:"pet",type:"select",label:"Pet type",options:[{label:"Dog",value:"dog"},{label:"Cat",value:"cat"}],validators:[{type:"required"}]},{id:"petGroup",type:"group",label:"Pet details",fields:[{id:"petname",type:"text",label:"Pet name",validators:[{type:"required"}]},{id:"vaccinated",type:"checkbox",label:"Vaccinated?"}]},{id:"vaccines",type:"repeat",label:"Vaccines",fields:[{id:"vaccineName",type:"text",label:"Vaccine name"}]}]},W={title:"Form/FormBuilder",component:f},o={args:{schema:d}},g={loaders:[async()=>(localStorage.setItem("pet-form",JSON.stringify({name:"Saakshi",hasPet:!0,petName:"Bruno"})),{})],args:{schema:d}},v={play:async({canvasElement:e})=>{e.querySelector("button")?.click()},args:{schema:d}},c={play:async({canvasElement:e})=>{e.querySelector('input[type="checkbox"]')?.click()},args:{schema:d}},b={play:async({canvasElement:e})=>{const n=e.querySelector('button[type="button"]');n instanceof HTMLButtonElement&&n.click()},args:{schema:d}},q={parameters:{a11y:{disable:!1}},args:{schema:d}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    schema: exampleSchema
  }
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  loaders: [async () => {
    localStorage.setItem("pet-form", JSON.stringify({
      name: "Saakshi",
      hasPet: true,
      petName: "Bruno"
    }));
    return {};
  }],
  args: {
    schema: exampleSchema
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const button = canvasElement.querySelector("button");
    button?.click();
  },
  args: {
    schema: exampleSchema
  }
}`,...v.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const checkbox = canvasElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
    checkbox?.click();
  },
  args: {
    schema: exampleSchema
  }
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const addButton = canvasElement.querySelector('button[type="button"]');
    if (addButton instanceof HTMLButtonElement) {
      addButton.click();
    }
  },
  args: {
    schema: exampleSchema
  }
}`,...b.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      disable: false
    }
  },
  args: {
    schema: exampleSchema
  }
}`,...q.parameters?.docs?.source}}};const N=["Empty","WithSavedData","ValidationErrors","ConditionalFields","RepeatField","KeyboardOnly"];export{c as ConditionalFields,o as Empty,q as KeyboardOnly,b as RepeatField,v as ValidationErrors,g as WithSavedData,N as __namedExportsOrder,W as default};
