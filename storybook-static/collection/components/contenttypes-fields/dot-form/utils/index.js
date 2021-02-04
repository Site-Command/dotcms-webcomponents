import { DotFormFields } from "./fields";
import { getStringFromDotKeyArray, isStringType } from "../../../../utils";
export const DOT_ATTR_PREFIX = "dot";
/**
 * Sets attributes to the HtmlElement from fieldVariables array
 *
 * @param HTMLElement element
 * @param DotCMSContentTypeFieldVariable fieldVariables
 */
export function setAttributesToTag(element, fieldVariables) {
    fieldVariables.forEach(({ key, value }) => {
        element.setAttribute(key, value);
    });
}
/**
 * Given a string formatted value "key|value,llave|valor" return an object.
 * @param values
 */
const pipedValuesToObject = (values) => {
    return isStringType(values)
        ? values.split(",").reduce((acc, item) => {
            const [key, value] = item.split("|");
            return Object.assign(Object.assign({}, acc), { [key]: value });
        }, {})
        : null;
};
function isDotAttribute(name) {
    return name.startsWith(DOT_ATTR_PREFIX);
}
/**
 * Sets attributes with "dot" prefix to the HtmlElement passed
 *
 * @param Element element
 * @param Attr[] attributes
 */
export function setDotAttributesToElement(element, attributes) {
    attributes.forEach(({ name, value }) => {
        element.setAttribute(name.replace(DOT_ATTR_PREFIX, ""), value);
    });
}
/**
 * Returns "Dot" attributes from all element's attributes
 *
 * @param Attr[] attributes
 * @param string[] attrException
 * @returns Attr[]
 */
export function getDotAttributesFromElement(attributes, attrException) {
    const exceptions = attrException.map((attr) => attr.toUpperCase());
    return attributes.filter((item) => !exceptions.includes(item.name.toUpperCase()) &&
        isDotAttribute(item.name));
}
/**
 * Returns if a field should be displayed from a comma separated list of fields
 * @param DotCMSContentTypeField field
 * @returns boolean
 */
export const shouldShowField = (field, fieldsToShow) => {
    const fields2Show = fieldsToShow ? fieldsToShow.split(",") : [];
    return !fields2Show.length || fields2Show.includes(field.variable);
};
/**
 * Returns value of a Field Variable from a given key
 * @param DotCMSContentTypeFieldVariable[] fieldVariables
 * @param string key
 * @returns string
 */
export const getFieldVariableValue = (fieldVariables, key) => {
    if (fieldVariables && fieldVariables.length) {
        const [variable] = fieldVariables.filter((item) => item.key.toUpperCase() === key.toUpperCase());
        return variable && variable.value;
    }
    return null;
};
/**
 * Parse a string to JSON and returns the message text
 * @param string message
 * @returns string
 */
export const getErrorMessage = (message) => {
    let messageObj;
    try {
        messageObj = JSON.parse(message);
    }
    catch (error) {
        messageObj = message;
    }
    return messageObj.errors && messageObj.errors.length && messageObj.errors[0].message
        ? messageObj.errors[0].message
        : message;
};
/**
 * Given a layout Object of fields, it returns a flat list of fields
 * @param DotCMSContentTypeLayoutRow[] layout
 * @returns DotCMSContentTypeField[]
 */
export const getFieldsFromLayout = (layout) => {
    return layout.reduce((acc, { columns }) => acc.concat(...columns.map((col) => col.fields)), []);
};
const fieldParamsConversionFromBE = {
    "Key-Value": (field) => {
        if (field.defaultValue && typeof field.defaultValue !== "string") {
            const valuesArray = Object.keys(field.defaultValue).map((key) => {
                return { key: key, value: field.defaultValue[key] };
            });
            field.defaultValue = getStringFromDotKeyArray(valuesArray);
        }
        return DotFormFields["Key-Value"](field);
    }
};
export const fieldCustomProcess = {
    "DOT-KEY-VALUE": pipedValuesToObject
};
export const fieldMap = {
    Time: DotFormFields.Time,
    Textarea: DotFormFields.Textarea,
    Text: DotFormFields.Text,
    Tag: DotFormFields.Tag,
    Select: DotFormFields.Select,
    Radio: DotFormFields.Radio,
    "Multi-Select": DotFormFields["Multi-Select"],
    "Key-Value": fieldParamsConversionFromBE["Key-Value"],
    "Date-and-Time": DotFormFields["Date-and-Time"],
    "Date-Range": DotFormFields["Date-Range"],
    Date: DotFormFields.Date,
    Checkbox: DotFormFields.Checkbox,
    Binary: DotFormFields.Binary
};
