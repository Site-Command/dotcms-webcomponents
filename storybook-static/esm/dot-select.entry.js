import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-ea58b93f.js';
import { g as getOriginalStatus, f as getDotOptionsFromFieldValue, a as getClassNames, b as getTagError, c as getTagHint, h as getHintId, j as getErrorClass, k as getId, u as updateStatus } from './utils-4c5e19e6.js';
import { c as checkProp } from './checkProp-c5680536.js';
import { g as getDotAttributesFromElement, s as setDotAttributesToElement } from './index-cd656efe.js';

const dotSelectCss = "";

const DotSelectComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dotValueChange = createEvent(this, "dotValueChange", 7);
        this.dotStatusChange = createEvent(this, "dotStatusChange", 7);
        /** Value set from the dropdown option */
        this.value = '';
        /** Name that will be used as ID */
        this.name = '';
        /** (optional) Text to be rendered next to input field */
        this.label = '';
        /** (optional) Hint text that suggest a clue of the field */
        this.hint = '';
        /** Value/Label dropdown options separated by comma, to be formatted as: Value|Label */
        this.options = '';
        /** (optional) Determine if it is mandatory */
        this.required = false;
        /** (optional) Text that will be shown when required is set and condition is not met */
        this.requiredMessage = `This field is required`;
        /** (optional) Disables field's interaction */
        this.disabled = false;
        this._dotTouched = false;
        this._dotPristine = true;
    }
    componentWillLoad() {
        this.validateProps();
        this.emitInitialValue();
        this.status = getOriginalStatus(this.isValid());
        this.emitStatusChange();
    }
    optionsWatch() {
        const validOptions = checkProp(this, 'options');
        this._options = getDotOptionsFromFieldValue(validOptions);
    }
    /**
     * Reset properties of the field, clear value and emit events.
     *
     * @memberof DotSelectComponent
     *
     */
    async reset() {
        this.value = '';
        this.status = getOriginalStatus(this.isValid());
        this.emitInitialValue();
        this.emitStatusChange();
    }
    componentDidLoad() {
        const htmlElement = this.el.querySelector('select');
        setTimeout(() => {
            const attrs = getDotAttributesFromElement(Array.from(this.el.attributes), []);
            setDotAttributesToElement(htmlElement, attrs);
        }, 0);
    }
    render() {
        const classes = getClassNames(this.status, this.isValid(), this.required);
        return (h(Host, { class: Object.assign({}, classes) }, h("dot-label", { label: this.label, required: this.required, name: this.name }, h("select", { "aria-describedby": getHintId(this.hint), class: getErrorClass(this.status.dotValid), id: getId(this.name), disabled: this.shouldBeDisabled(), onChange: (event) => this.setValue(event) }, this._options.map((item) => {
            return (h("option", { selected: this.value === item.value ? true : null, value: item.value }, item.label));
        }))), getTagHint(this.hint), getTagError(!this.isValid(), this.requiredMessage)));
    }
    validateProps() {
        this.optionsWatch();
    }
    shouldBeDisabled() {
        return this.disabled ? true : null;
    }
    // Todo: find how to set proper TYPE in TS
    setValue(event) {
        this.value = event.target.value;
        this.status = updateStatus(this.status, {
            dotTouched: true,
            dotPristine: false,
            dotValid: this.isValid()
        });
        this.emitValueChange();
        this.emitStatusChange();
    }
    emitInitialValue() {
        if (!this.value) {
            this.value = this._options.length ? this._options[0].value : '';
            this.emitValueChange();
        }
    }
    emitStatusChange() {
        this.dotStatusChange.emit({
            name: this.name,
            status: this.status
        });
    }
    isValid() {
        return this.required ? !!this.value : true;
    }
    emitValueChange() {
        this.dotValueChange.emit({
            name: this.name,
            value: this.value
        });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "options": ["optionsWatch"]
    }; }
};
DotSelectComponent.style = dotSelectCss;

export { DotSelectComponent as dot_select };
