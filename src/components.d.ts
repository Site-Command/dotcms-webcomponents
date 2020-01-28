/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  DotBinaryFileEvent,
  DotFieldStatusEvent,
  DotFieldValueEvent,
  DotKeyValueField,
} from './models';

export namespace Components {
  interface DotBinaryFile {
    /**
    * (optional) Text that be shown when the URL is not valid
    */
    'URLValidationMessage': string;
    /**
    * (optional) Describes a type of file that may be selected by the user, separated by comma  eg: .pdf,.jpg
    */
    'accept': string;
    /**
    * (optional) Text that be shown in the browse file button
    */
    'buttonLabel': string;
    /**
    * Clear value of selected file, when the endpoint fails.
    */
    'clearValue': () => Promise<void>;
    /**
    * (optional) Disables field's interaction
    */
    'disabled': boolean;
    /**
    * (optional) Text that be shown in the browse file button
    */
    'errorMessage': string;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint': string;
    /**
    * (optional) Text to be rendered next to input field
    */
    'label': string;
    /**
    * (optional) Set the max file size limit
    */
    'maxFileLength': string;
    /**
    * Name that will be used as ID
    */
    'name': string;
    /**
    * (optional) Placeholder specifies a short hint that describes the expected value of the input field
    */
    'placeholder': string;
    /**
    * (optional) Name of the file uploaded
    */
    'previewImageName': string;
    /**
    * (optional) URL of the file uploaded
    */
    'previewImageUrl': string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required': boolean;
    /**
    * (optional) Text that be shown when required is set and condition not met
    */
    'requiredMessage': string;
    /**
    * Reset properties of the field, clear value and emit events.
    */
    'reset': () => Promise<void>;
    /**
    * (optional) Text that be shown when the Regular Expression condition not met
    */
    'validationMessage': string;
  }
  interface DotBinaryFilePreview {
    /**
    * (optional) Delete button's label
    */
    'deleteLabel': string;
    /**
    * file name to be displayed
    */
    'fileName': string;
    /**
    * (optional) file URL to be displayed
    */
    'previewUrl': string;
  }
  interface DotBinaryTextField {
    /**
    * (optional) Describes a type of file that may be selected by the user, separated by comma  eg: .pdf,.jpg
    */
    'accept': string;
    /**
    * (optional) Disables field's interaction
    */
    'disabled': boolean;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint': string;
    /**
    * (optional) Placeholder specifies a short hint that describes the expected value of the input field
    */
    'placeholder': string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required': boolean;
    /**
    * Value specifies the value of the <input> element
    */
    'value': any;
  }
  interface DotBinaryUploadButton {
    /**
    * (optional) Describes a type of file that may be selected by the user, separated by comma  eg: .pdf,.jpg
    */
    'accept': string;
    /**
    * (optional) Text that be shown in the browse file button
    */
    'buttonLabel': string;
    /**
    * (optional) Disables field's interaction
    */
    'disabled': boolean;
    /**
    * Name that will be used as ID
    */
    'name': string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required': boolean;
  }
  interface DotCheckbox {
    /**
    * (optional) Disables field's interaction
    */
    'disabled': boolean;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint': string;
    /**
    * (optional) Text to be rendered next to input field
    */
    'label': string;
    /**
    * Name that will be used as ID
    */
    'name': string;
    /**
    * Value/Label checkbox options separated by comma, to be formatted as: Value|Label
    */
    'options': string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required': boolean;
    /**
    * (optional) Text that will be shown when required is set and condition is not met
    */
    'requiredMessage': string;
    /**
    * Reset properties of the field, clear value and emit events.
    * @memberof DotSelectComponent
    */
    'reset': () => Promise<void>;
    /**
    * Value set from the checkbox option
    */
    'value': string;
  }
  interface DotKeyValue {
    /**
    * (optional) Disables field's interaction
    */
    'disabled': boolean;
    /**
    * (optional) Label for the add button in the <key-value-form>
    */
    'formAddButtonLabel': string;
    /**
    * (optional) The string to use in the key label in the <key-value-form>
    */
    'formKeyLabel': string;
    /**
    * (optional) Placeholder for the key input text in the <key-value-form>
    */
    'formKeyPlaceholder': string;
    /**
    * (optional) The string to use in the value label in the <key-value-form>
    */
    'formValueLabel': string;
    /**
    * (optional) Placeholder for the value input text in the <key-value-form>
    */
    'formValuePlaceholder': string;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint': string;
    /**
    * (optional) Text to be rendered next to input field
    */
    'label': string;
    /**
    * (optional) The string to use in the delete button of a key/value item
    */
    'listDeleteLabel': string;
    /**
    * Name that will be used as ID
    */
    'name': string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required': boolean;
    /**
    * (optional) Text that will be shown when required is set and condition is not met
    */
    'requiredMessage': string;
    /**
    * Reset properties of the field, clear value and emit events.
    */
    'reset': () => Promise<void>;
    /**
    * Value of the field
    */
    'value': string;
  }
  interface DotLabel {
    /**
    * (optional) Text to be rendered
    */
    'label': string;
    /**
    * (optional) Field name
    */
    'name': string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required': boolean;
  }
  interface DotMultiSelect {
    /**
    * (optional) Disables field's interaction
    */
    'disabled': boolean;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint': string;
    /**
    * (optional) Text to be rendered next to input field
    */
    'label': string;
    /**
    * Name that will be used as ID
    */
    'name': string;
    /**
    * Value/Label dropdown options separated by comma, to be formatted as: Value|Label
    */
    'options': string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required': boolean;
    /**
    * (optional) Text that will be shown when required is set and condition is not met
    */
    'requiredMessage': string;
    /**
    * Reset properties of the field, clear value and emit events.
    * @memberof DotSelectComponent
    */
    'reset': () => Promise<void>;
    /**
    * (optional) Size number of the multi-select dropdown (default=3)
    */
    'size': string;
    /**
    * Value set from the dropdown option
    */
    'value': string;
  }
  interface DotRadio {
    /**
    * (optional) Disables field's interaction
    */
    'disabled': boolean;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint': string;
    /**
    * (optional) Text to be rendered next to input field
    */
    'label': string;
    /**
    * Name that will be used as ID
    */
    'name': string;
    /**
    * Value/Label ratio options separated by comma, to be formatted as: Value|Label
    */
    'options': string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required': boolean;
    /**
    * (optional) Text that will be shown when required is set and condition is not met
    */
    'requiredMessage': string;
    /**
    * Reset properties of the field, clear value and emit events.
    */
    'reset': () => Promise<void>;
    /**
    * Value set from the ratio option
    */
    'value': string;
  }
  interface DotTextfield {
    /**
    * (optional) Disables field's interaction
    */
    'disabled': boolean;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint': string;
    /**
    * (optional) Text to be rendered next to input field
    */
    'label': string;
    /**
    * Name that will be used as ID
    */
    'name': string;
    /**
    * (optional) Placeholder specifies a short hint that describes the expected value of the input field
    */
    'placeholder': string;
    /**
    * (optional) Regular expresion that is checked against the value to determine if is valid
    */
    'regexCheck': string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required': boolean;
    /**
    * (optional) Text that be shown when required is set and condition not met
    */
    'requiredMessage': string;
    /**
    * Reset properties of the field, clear value and emit events.
    */
    'reset': () => Promise<void>;
    /**
    * type specifies the type of <input> element to display
    */
    'type': string;
    /**
    * (optional) Text that be shown when the Regular Expression condition not met
    */
    'validationMessage': string;
    /**
    * Value specifies the value of the <input> element
    */
    'value': string;
  }
  interface KeyValueForm {
    /**
    * (optional) Label for the add item button
    */
    'addButtonLabel': string;
    /**
    * (optional) Disables all form interaction
    */
    'disabled': boolean;
    /**
    * (optional) The string to use in the key input label
    */
    'keyLabel': string;
    /**
    * (optional) Placeholder for the key input text
    */
    'keyPlaceholder': string;
    /**
    * (optional) The string to use in the value input label
    */
    'valueLabel': string;
    /**
    * (optional) Placeholder for the value input text
    */
    'valuePlaceholder': string;
  }
  interface KeyValueTable {
    /**
    * (optional) Label for the delete button in each item list
    */
    'buttonLabel': string;
    /**
    * (optional) Disables all form interaction
    */
    'disabled': boolean;
    /**
    * (optional) Message to show when the list of items is empty
    */
    'emptyMessage': string;
    /**
    * (optional) Items to render in the list of key value
    */
    'items': DotKeyValueField[];
  }
}

declare global {


  interface HTMLDotBinaryFileElement extends Components.DotBinaryFile, HTMLStencilElement {}
  var HTMLDotBinaryFileElement: {
    prototype: HTMLDotBinaryFileElement;
    new (): HTMLDotBinaryFileElement;
  };

  interface HTMLDotBinaryFilePreviewElement extends Components.DotBinaryFilePreview, HTMLStencilElement {}
  var HTMLDotBinaryFilePreviewElement: {
    prototype: HTMLDotBinaryFilePreviewElement;
    new (): HTMLDotBinaryFilePreviewElement;
  };

  interface HTMLDotBinaryTextFieldElement extends Components.DotBinaryTextField, HTMLStencilElement {}
  var HTMLDotBinaryTextFieldElement: {
    prototype: HTMLDotBinaryTextFieldElement;
    new (): HTMLDotBinaryTextFieldElement;
  };

  interface HTMLDotBinaryUploadButtonElement extends Components.DotBinaryUploadButton, HTMLStencilElement {}
  var HTMLDotBinaryUploadButtonElement: {
    prototype: HTMLDotBinaryUploadButtonElement;
    new (): HTMLDotBinaryUploadButtonElement;
  };

  interface HTMLDotCheckboxElement extends Components.DotCheckbox, HTMLStencilElement {}
  var HTMLDotCheckboxElement: {
    prototype: HTMLDotCheckboxElement;
    new (): HTMLDotCheckboxElement;
  };

  interface HTMLDotKeyValueElement extends Components.DotKeyValue, HTMLStencilElement {}
  var HTMLDotKeyValueElement: {
    prototype: HTMLDotKeyValueElement;
    new (): HTMLDotKeyValueElement;
  };

  interface HTMLDotLabelElement extends Components.DotLabel, HTMLStencilElement {}
  var HTMLDotLabelElement: {
    prototype: HTMLDotLabelElement;
    new (): HTMLDotLabelElement;
  };

  interface HTMLDotMultiSelectElement extends Components.DotMultiSelect, HTMLStencilElement {}
  var HTMLDotMultiSelectElement: {
    prototype: HTMLDotMultiSelectElement;
    new (): HTMLDotMultiSelectElement;
  };

  interface HTMLDotRadioElement extends Components.DotRadio, HTMLStencilElement {}
  var HTMLDotRadioElement: {
    prototype: HTMLDotRadioElement;
    new (): HTMLDotRadioElement;
  };

  interface HTMLDotTextfieldElement extends Components.DotTextfield, HTMLStencilElement {}
  var HTMLDotTextfieldElement: {
    prototype: HTMLDotTextfieldElement;
    new (): HTMLDotTextfieldElement;
  };

  interface HTMLKeyValueFormElement extends Components.KeyValueForm, HTMLStencilElement {}
  var HTMLKeyValueFormElement: {
    prototype: HTMLKeyValueFormElement;
    new (): HTMLKeyValueFormElement;
  };

  interface HTMLKeyValueTableElement extends Components.KeyValueTable, HTMLStencilElement {}
  var HTMLKeyValueTableElement: {
    prototype: HTMLKeyValueTableElement;
    new (): HTMLKeyValueTableElement;
  };
  interface HTMLElementTagNameMap {
    'dot-binary-file': HTMLDotBinaryFileElement;
    'dot-binary-file-preview': HTMLDotBinaryFilePreviewElement;
    'dot-binary-text-field': HTMLDotBinaryTextFieldElement;
    'dot-binary-upload-button': HTMLDotBinaryUploadButtonElement;
    'dot-checkbox': HTMLDotCheckboxElement;
    'dot-key-value': HTMLDotKeyValueElement;
    'dot-label': HTMLDotLabelElement;
    'dot-multi-select': HTMLDotMultiSelectElement;
    'dot-radio': HTMLDotRadioElement;
    'dot-textfield': HTMLDotTextfieldElement;
    'key-value-form': HTMLKeyValueFormElement;
    'key-value-table': HTMLKeyValueTableElement;
  }
}

declare namespace LocalJSX {
  interface DotBinaryFile {
    /**
    * (optional) Text that be shown when the URL is not valid
    */
    'URLValidationMessage'?: string;
    /**
    * (optional) Describes a type of file that may be selected by the user, separated by comma  eg: .pdf,.jpg
    */
    'accept'?: string;
    /**
    * (optional) Text that be shown in the browse file button
    */
    'buttonLabel'?: string;
    /**
    * (optional) Disables field's interaction
    */
    'disabled'?: boolean;
    /**
    * (optional) Text that be shown in the browse file button
    */
    'errorMessage'?: string;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint'?: string;
    /**
    * (optional) Text to be rendered next to input field
    */
    'label'?: string;
    /**
    * (optional) Set the max file size limit
    */
    'maxFileLength'?: string;
    /**
    * Name that will be used as ID
    */
    'name'?: string;
    'onDotStatusChange'?: (event: CustomEvent<DotFieldStatusEvent>) => void;
    'onDotValueChange'?: (event: CustomEvent<DotFieldValueEvent>) => void;
    /**
    * (optional) Placeholder specifies a short hint that describes the expected value of the input field
    */
    'placeholder'?: string;
    /**
    * (optional) Name of the file uploaded
    */
    'previewImageName'?: string;
    /**
    * (optional) URL of the file uploaded
    */
    'previewImageUrl'?: string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required'?: boolean;
    /**
    * (optional) Text that be shown when required is set and condition not met
    */
    'requiredMessage'?: string;
    /**
    * (optional) Text that be shown when the Regular Expression condition not met
    */
    'validationMessage'?: string;
  }
  interface DotBinaryFilePreview {
    /**
    * (optional) Delete button's label
    */
    'deleteLabel'?: string;
    /**
    * file name to be displayed
    */
    'fileName'?: string;
    /**
    * Emit when the file is deleted
    */
    'onDelete'?: (event: CustomEvent<any>) => void;
    /**
    * (optional) file URL to be displayed
    */
    'previewUrl'?: string;
  }
  interface DotBinaryTextField {
    /**
    * (optional) Describes a type of file that may be selected by the user, separated by comma  eg: .pdf,.jpg
    */
    'accept'?: string;
    /**
    * (optional) Disables field's interaction
    */
    'disabled'?: boolean;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint'?: string;
    'onFileChange'?: (event: CustomEvent<DotBinaryFileEvent>) => void;
    'onLostFocus'?: (event: CustomEvent<any>) => void;
    /**
    * (optional) Placeholder specifies a short hint that describes the expected value of the input field
    */
    'placeholder'?: string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required'?: boolean;
    /**
    * Value specifies the value of the <input> element
    */
    'value'?: any;
  }
  interface DotBinaryUploadButton {
    /**
    * (optional) Describes a type of file that may be selected by the user, separated by comma  eg: .pdf,.jpg
    */
    'accept'?: string;
    /**
    * (optional) Text that be shown in the browse file button
    */
    'buttonLabel'?: string;
    /**
    * (optional) Disables field's interaction
    */
    'disabled'?: boolean;
    /**
    * Name that will be used as ID
    */
    'name'?: string;
    'onFileChange'?: (event: CustomEvent<DotBinaryFileEvent>) => void;
    /**
    * (optional) Determine if it is mandatory
    */
    'required'?: boolean;
  }
  interface DotCheckbox {
    /**
    * (optional) Disables field's interaction
    */
    'disabled'?: boolean;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint'?: string;
    /**
    * (optional) Text to be rendered next to input field
    */
    'label'?: string;
    /**
    * Name that will be used as ID
    */
    'name'?: string;
    'onDotStatusChange'?: (event: CustomEvent<DotFieldStatusEvent>) => void;
    'onDotValueChange'?: (event: CustomEvent<DotFieldValueEvent>) => void;
    /**
    * Value/Label checkbox options separated by comma, to be formatted as: Value|Label
    */
    'options'?: string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required'?: boolean;
    /**
    * (optional) Text that will be shown when required is set and condition is not met
    */
    'requiredMessage'?: string;
    /**
    * Value set from the checkbox option
    */
    'value'?: string;
  }
  interface DotKeyValue {
    /**
    * (optional) Disables field's interaction
    */
    'disabled'?: boolean;
    /**
    * (optional) Label for the add button in the <key-value-form>
    */
    'formAddButtonLabel'?: string;
    /**
    * (optional) The string to use in the key label in the <key-value-form>
    */
    'formKeyLabel'?: string;
    /**
    * (optional) Placeholder for the key input text in the <key-value-form>
    */
    'formKeyPlaceholder'?: string;
    /**
    * (optional) The string to use in the value label in the <key-value-form>
    */
    'formValueLabel'?: string;
    /**
    * (optional) Placeholder for the value input text in the <key-value-form>
    */
    'formValuePlaceholder'?: string;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint'?: string;
    /**
    * (optional) Text to be rendered next to input field
    */
    'label'?: string;
    /**
    * (optional) The string to use in the delete button of a key/value item
    */
    'listDeleteLabel'?: string;
    /**
    * Name that will be used as ID
    */
    'name'?: string;
    'onDotStatusChange'?: (event: CustomEvent<DotFieldStatusEvent>) => void;
    'onDotValueChange'?: (event: CustomEvent<DotFieldValueEvent>) => void;
    /**
    * (optional) Determine if it is mandatory
    */
    'required'?: boolean;
    /**
    * (optional) Text that will be shown when required is set and condition is not met
    */
    'requiredMessage'?: string;
    /**
    * Value of the field
    */
    'value'?: string;
  }
  interface DotLabel {
    /**
    * (optional) Text to be rendered
    */
    'label'?: string;
    /**
    * (optional) Field name
    */
    'name'?: string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required'?: boolean;
  }
  interface DotMultiSelect {
    /**
    * (optional) Disables field's interaction
    */
    'disabled'?: boolean;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint'?: string;
    /**
    * (optional) Text to be rendered next to input field
    */
    'label'?: string;
    /**
    * Name that will be used as ID
    */
    'name'?: string;
    'onDotStatusChange'?: (event: CustomEvent<DotFieldStatusEvent>) => void;
    'onDotValueChange'?: (event: CustomEvent<DotFieldValueEvent>) => void;
    /**
    * Value/Label dropdown options separated by comma, to be formatted as: Value|Label
    */
    'options'?: string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required'?: boolean;
    /**
    * (optional) Text that will be shown when required is set and condition is not met
    */
    'requiredMessage'?: string;
    /**
    * (optional) Size number of the multi-select dropdown (default=3)
    */
    'size'?: string;
    /**
    * Value set from the dropdown option
    */
    'value'?: string;
  }
  interface DotRadio {
    /**
    * (optional) Disables field's interaction
    */
    'disabled'?: boolean;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint'?: string;
    /**
    * (optional) Text to be rendered next to input field
    */
    'label'?: string;
    /**
    * Name that will be used as ID
    */
    'name'?: string;
    'onDotStatusChange'?: (event: CustomEvent<DotFieldStatusEvent>) => void;
    'onDotValueChange'?: (event: CustomEvent<DotFieldValueEvent>) => void;
    /**
    * Value/Label ratio options separated by comma, to be formatted as: Value|Label
    */
    'options'?: string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required'?: boolean;
    /**
    * (optional) Text that will be shown when required is set and condition is not met
    */
    'requiredMessage'?: string;
    /**
    * Value set from the ratio option
    */
    'value'?: string;
  }
  interface DotTextfield {
    /**
    * (optional) Disables field's interaction
    */
    'disabled'?: boolean;
    /**
    * (optional) Hint text that suggest a clue of the field
    */
    'hint'?: string;
    /**
    * (optional) Text to be rendered next to input field
    */
    'label'?: string;
    /**
    * Name that will be used as ID
    */
    'name'?: string;
    'onDotStatusChange'?: (event: CustomEvent<DotFieldStatusEvent>) => void;
    'onDotValueChange'?: (event: CustomEvent<DotFieldValueEvent>) => void;
    /**
    * (optional) Placeholder specifies a short hint that describes the expected value of the input field
    */
    'placeholder'?: string;
    /**
    * (optional) Regular expresion that is checked against the value to determine if is valid
    */
    'regexCheck'?: string;
    /**
    * (optional) Determine if it is mandatory
    */
    'required'?: boolean;
    /**
    * (optional) Text that be shown when required is set and condition not met
    */
    'requiredMessage'?: string;
    /**
    * type specifies the type of <input> element to display
    */
    'type'?: string;
    /**
    * (optional) Text that be shown when the Regular Expression condition not met
    */
    'validationMessage'?: string;
    /**
    * Value specifies the value of the <input> element
    */
    'value'?: string;
  }
  interface KeyValueForm {
    /**
    * (optional) Label for the add item button
    */
    'addButtonLabel'?: string;
    /**
    * (optional) Disables all form interaction
    */
    'disabled'?: boolean;
    /**
    * (optional) The string to use in the key input label
    */
    'keyLabel'?: string;
    /**
    * (optional) Placeholder for the key input text
    */
    'keyPlaceholder'?: string;
    /**
    * Emit the added value, key/value pair
    */
    'onAdd'?: (event: CustomEvent<DotKeyValueField>) => void;
    /**
    * Emit when any of the input is blur
    */
    'onLostFocus'?: (event: CustomEvent<FocusEvent>) => void;
    /**
    * (optional) The string to use in the value input label
    */
    'valueLabel'?: string;
    /**
    * (optional) Placeholder for the value input text
    */
    'valuePlaceholder'?: string;
  }
  interface KeyValueTable {
    /**
    * (optional) Label for the delete button in each item list
    */
    'buttonLabel'?: string;
    /**
    * (optional) Disables all form interaction
    */
    'disabled'?: boolean;
    /**
    * (optional) Message to show when the list of items is empty
    */
    'emptyMessage'?: string;
    /**
    * (optional) Items to render in the list of key value
    */
    'items'?: DotKeyValueField[];
    /**
    * Emit the index of the item deleted from the list
    */
    'onDelete'?: (event: CustomEvent<number>) => void;
  }

  interface IntrinsicElements {
    'dot-binary-file': DotBinaryFile;
    'dot-binary-file-preview': DotBinaryFilePreview;
    'dot-binary-text-field': DotBinaryTextField;
    'dot-binary-upload-button': DotBinaryUploadButton;
    'dot-checkbox': DotCheckbox;
    'dot-key-value': DotKeyValue;
    'dot-label': DotLabel;
    'dot-multi-select': DotMultiSelect;
    'dot-radio': DotRadio;
    'dot-textfield': DotTextfield;
    'key-value-form': KeyValueForm;
    'key-value-table': KeyValueTable;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'dot-binary-file': LocalJSX.DotBinaryFile & JSXBase.HTMLAttributes<HTMLDotBinaryFileElement>;
      'dot-binary-file-preview': LocalJSX.DotBinaryFilePreview & JSXBase.HTMLAttributes<HTMLDotBinaryFilePreviewElement>;
      'dot-binary-text-field': LocalJSX.DotBinaryTextField & JSXBase.HTMLAttributes<HTMLDotBinaryTextFieldElement>;
      'dot-binary-upload-button': LocalJSX.DotBinaryUploadButton & JSXBase.HTMLAttributes<HTMLDotBinaryUploadButtonElement>;
      'dot-checkbox': LocalJSX.DotCheckbox & JSXBase.HTMLAttributes<HTMLDotCheckboxElement>;
      'dot-key-value': LocalJSX.DotKeyValue & JSXBase.HTMLAttributes<HTMLDotKeyValueElement>;
      'dot-label': LocalJSX.DotLabel & JSXBase.HTMLAttributes<HTMLDotLabelElement>;
      'dot-multi-select': LocalJSX.DotMultiSelect & JSXBase.HTMLAttributes<HTMLDotMultiSelectElement>;
      'dot-radio': LocalJSX.DotRadio & JSXBase.HTMLAttributes<HTMLDotRadioElement>;
      'dot-textfield': LocalJSX.DotTextfield & JSXBase.HTMLAttributes<HTMLDotTextfieldElement>;
      'key-value-form': LocalJSX.KeyValueForm & JSXBase.HTMLAttributes<HTMLKeyValueFormElement>;
      'key-value-table': LocalJSX.KeyValueTable & JSXBase.HTMLAttributes<HTMLKeyValueTableElement>;
    }
  }
}


