var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-ea58b93f.js';
import { g as getOriginalStatus, f as getDotOptionsFromFieldValue, a as getClassNames, b as getTagError, c as getTagHint, h as getHintId, j as getErrorClass, k as getId, u as updateStatus } from './utils-4c5e19e6.js';
import { c as checkProp } from './checkProp-c5680536.js';
import { g as getDotAttributesFromElement, s as setDotAttributesToElement } from './index-cd656efe.js';
var dotMultiSelectCss = "";
var DotMultiSelectComponent = /** @class */ (function () {
    function class_1(hostRef) {
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
        this.requiredMessage = "This field is required";
        /** (optional) Disables field's interaction */
        this.disabled = false;
        /** (optional) Size number of the multi-select dropdown (default=3) */
        this.size = '3';
        this._dotTouched = false;
        this._dotPristine = true;
    }
    class_1.prototype.componentWillLoad = function () {
        this.validateProps();
        this.emitInitialValue();
        this.status = getOriginalStatus(this.isValid());
        this.emitStatusChange();
    };
    class_1.prototype.componentDidLoad = function () {
        var _this = this;
        var htmlElement = this.el.querySelector('select');
        setTimeout(function () {
            var attrs = getDotAttributesFromElement(Array.from(_this.el.attributes), []);
            setDotAttributesToElement(htmlElement, attrs);
        }, 0);
    };
    class_1.prototype.optionsWatch = function () {
        var validOptions = checkProp(this, 'options');
        this._options = getDotOptionsFromFieldValue(validOptions);
    };
    /**
     * Reset properties of the field, clear value and emit events.
     *
     * @memberof DotSelectComponent
     *
     */
    class_1.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.value = '';
                this.status = getOriginalStatus(this.isValid());
                this.emitInitialValue();
                this.emitStatusChange();
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        var classes = getClassNames(this.status, this.isValid(), this.required);
        return (h(Host, { class: Object.assign({}, classes) }, h("dot-label", { label: this.label, required: this.required, name: this.name }, h("select", { multiple: true, "aria-describedby": getHintId(this.hint), size: +this.size, class: getErrorClass(this.status.dotValid), id: getId(this.name), disabled: this.shouldBeDisabled(), onChange: function () { return _this.setValue(); } }, this._options.map(function (item) {
            return (h("option", { selected: _this.value === item.value ? true : null, value: item.value }, item.label));
        }))), getTagHint(this.hint), getTagError(!this.isValid(), this.requiredMessage)));
    };
    class_1.prototype.validateProps = function () {
        this.optionsWatch();
    };
    class_1.prototype.shouldBeDisabled = function () {
        return this.disabled ? true : null;
    };
    // Todo: find how to set proper TYPE in TS
    class_1.prototype.setValue = function () {
        this.value = this.getValueFromMultiSelect();
        this.status = updateStatus(this.status, {
            dotTouched: true,
            dotPristine: false,
            dotValid: this.isValid()
        });
        this.emitValueChange();
        this.emitStatusChange();
    };
    class_1.prototype.getValueFromMultiSelect = function () {
        var selected = this.el.querySelectorAll('option:checked');
        var values = Array.from(selected).map(function (el) { return el.value; });
        return Array.from(values).join(',');
    };
    class_1.prototype.emitInitialValue = function () {
        if (!this.value) {
            this.value = this._options.length ? this._options[0].value : '';
            this.emitValueChange();
        }
    };
    class_1.prototype.emitStatusChange = function () {
        this.dotStatusChange.emit({
            name: this.name,
            status: this.status
        });
    };
    class_1.prototype.isValid = function () {
        return this.required ? !!this.value : true;
    };
    class_1.prototype.emitValueChange = function () {
        this.dotValueChange.emit({
            name: this.name,
            value: this.value
        });
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "options": ["optionsWatch"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
DotMultiSelectComponent.style = dotMultiSelectCss;
export { DotMultiSelectComponent as dot_multi_select };
