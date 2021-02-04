import { b as bootstrapLazy } from './index-ea58b93f.js';
import { a as patchEsm } from './patch-fa29ab26.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["dot-card-view",[[1,"dot-card-view",{"items":[16],"value":[1537],"getValue":[64],"clearValue":[64]}]]],["dot-label",[[4,"dot-label",{"name":[513],"label":[513],"required":[516]}]]],["dot-binary-file",[[0,"dot-binary-file",{"name":[513],"label":[513],"placeholder":[1537],"hint":[513],"required":[516],"requiredMessage":[1,"required-message"],"validationMessage":[1,"validation-message"],"URLValidationMessage":[1,"u-r-l-validation-message"],"disabled":[516],"accept":[1537],"maxFileLength":[1537,"max-file-length"],"buttonLabel":[513,"button-label"],"errorMessage":[1537,"error-message"],"previewImageName":[1537,"preview-image-name"],"previewImageUrl":[1537,"preview-image-url"],"status":[32],"reset":[64],"clearValue":[64]},[[0,"fileChange","fileChangeHandler"],[0,"dragover","HandleDragover"],[0,"dragleave","HandleDragleave"],[0,"drop","HandleDrop"],[0,"delete","handleDelete"]]]]],["dot-form",[[0,"dot-form",{"fieldsToShow":[1,"fields-to-show"],"resetLabel":[513,"reset-label"],"submitLabel":[513,"submit-label"],"layout":[16],"variable":[513],"status":[32],"errorMessage":[32],"uploadFileInProgress":[32]},[[0,"dotValueChange","onValueChange"],[0,"dotStatusChange","onStatusChange"]]]]],["dot-key-value",[[0,"dot-key-value",{"value":[1537],"name":[513],"label":[513],"hint":[513],"required":[516],"requiredMessage":[513,"required-message"],"disabled":[516],"formKeyPlaceholder":[513,"form-key-placeholder"],"formValuePlaceholder":[513,"form-value-placeholder"],"formKeyLabel":[513,"form-key-label"],"formValueLabel":[513,"form-value-label"],"formAddButtonLabel":[513,"form-add-button-label"],"listDeleteLabel":[513,"list-delete-label"],"status":[32],"items":[32],"reset":[64]},[[0,"delete","deleteItemHandler"],[0,"add","addItemHandler"]]]]],["dot-tags",[[0,"dot-tags",{"value":[1537],"name":[513],"label":[513],"hint":[513],"placeholder":[513],"required":[516],"requiredMessage":[513,"required-message"],"disabled":[516],"threshold":[514],"debounce":[514],"data":[16],"status":[32],"reset":[64]}]]],["dot-date",[[0,"dot-date",{"value":[1537],"name":[513],"label":[513],"hint":[513],"required":[1540],"requiredMessage":[513,"required-message"],"validationMessage":[513,"validation-message"],"disabled":[1540],"min":[1537],"max":[1537],"step":[1537],"classNames":[32],"errorMessageElement":[32],"reset":[64]},[[0,"_dotValueChange","emitValueChange"],[0,"_dotStatusChange","emitStatusChange"]]]]],["dot-date-time",[[0,"dot-date-time",{"value":[1537],"name":[513],"label":[513],"hint":[513],"required":[516],"requiredMessage":[513,"required-message"],"validationMessage":[513,"validation-message"],"disabled":[516],"min":[1537],"max":[1537],"step":[1537],"dateLabel":[513,"date-label"],"timeLabel":[513,"time-label"],"classNames":[32],"errorMessageElement":[32],"reset":[64]},[[0,"_dotValueChange","emitValueChange"],[0,"_dotStatusChange","emitStatusChange"]]]]],["dot-time",[[0,"dot-time",{"value":[1537],"name":[513],"label":[513],"hint":[513],"required":[516],"requiredMessage":[513,"required-message"],"validationMessage":[513,"validation-message"],"disabled":[516],"min":[1537],"max":[1537],"step":[513],"classNames":[32],"errorMessageElement":[32],"reset":[64]},[[0,"_dotValueChange","emitValueChange"],[0,"_dotStatusChange","emitStatusChange"]]]]],["dot-asset-drop-zone",[[4,"dot-asset-drop-zone",{"dotAssetsURL":[1,"dot-assets-u-r-l"],"maxFileSize":[1,"max-file-size"],"folder":[1],"dropFilesText":[1,"drop-files-text"],"uploadFileText":[1,"upload-file-text"],"dialogLabels":[16],"createAssetsText":[1,"create-assets-text"],"multiMaxSizeErrorLabel":[1,"multi-max-size-error-label"],"singeMaxSizeErrorLabel":[1,"singe-max-size-error-label"],"uploadErrorLabel":[1,"upload-error-label"],"dropState":[32],"progressIndicator":[32],"progressBarText":[32]}]]],["dot-checkbox",[[0,"dot-checkbox",{"name":[513],"label":[513],"hint":[513],"options":[513],"required":[516],"disabled":[1540],"requiredMessage":[513,"required-message"],"value":[1537],"_options":[32],"status":[32],"reset":[64]}]]],["dot-data-view-button",[[0,"dot-data-view-button",{"value":[1]}]]],["dot-date-range",[[0,"dot-date-range",{"value":[1537],"name":[513],"label":[513],"hint":[513],"max":[513],"min":[513],"required":[516],"requiredMessage":[513,"required-message"],"disabled":[516],"displayFormat":[513,"display-format"],"presets":[1040],"presetLabel":[513,"preset-label"],"status":[32],"reset":[64]}]]],["dot-multi-select",[[0,"dot-multi-select",{"value":[1537],"name":[513],"label":[513],"hint":[513],"options":[513],"required":[516],"requiredMessage":[513,"required-message"],"disabled":[516],"size":[513],"_options":[32],"status":[32],"reset":[64]}]]],["dot-radio",[[0,"dot-radio",{"value":[1537],"name":[513],"label":[513],"hint":[513],"required":[516],"disabled":[1540],"requiredMessage":[513,"required-message"],"options":[513],"_options":[32],"status":[32],"reset":[64]}]]],["dot-select",[[0,"dot-select",{"value":[1537],"name":[513],"label":[513],"hint":[513],"options":[513],"required":[516],"requiredMessage":[513,"required-message"],"disabled":[516],"_options":[32],"status":[32],"reset":[64]}]]],["dot-state-icon",[[1,"dot-state-icon",{"state":[16],"size":[513],"labels":[16]}]]],["dot-textarea",[[0,"dot-textarea",{"value":[1537],"name":[513],"label":[513],"hint":[513],"required":[1540],"requiredMessage":[513,"required-message"],"validationMessage":[513,"validation-message"],"disabled":[1540],"regexCheck":[1537,"regex-check"],"status":[32],"reset":[64]}]]],["dot-textfield",[[0,"dot-textfield",{"value":[1025],"name":[1],"label":[513],"placeholder":[1537],"hint":[513],"required":[1540],"requiredMessage":[1,"required-message"],"validationMessage":[1,"validation-message"],"disabled":[1540],"regexCheck":[1537,"regex-check"],"type":[1537],"status":[32],"reset":[64]}]]],["dot-material-icon",[[1,"dot-material-icon",{"placeholder":[513],"name":[513],"value":[1537],"colorValue":[1537,"color-value"],"suggestionlist":[16],"showSuggestions":[32],"suggestionArr":[32],"selectedSuggestionIndex":[32]},[[8,"click","handleWindowClick"]]]]],["dot-form-row",[[0,"dot-form-row",{"row":[16],"fieldsToShow":[513,"fields-to-show"]}]]],["dot-progress-bar",[[0,"dot-progress-bar",{"text":[1],"progress":[2]}]]],["dot-select-button",[[1,"dot-select-button",{"value":[513],"options":[16]}]]],["dot-autocomplete_2",[[0,"dot-autocomplete",{"disabled":[516],"placeholder":[513],"threshold":[514],"maxResults":[514,"max-results"],"debounce":[514],"data":[16]}],[0,"dot-chip",{"label":[513],"deleteLabel":[513,"delete-label"],"disabled":[516]}]]],["key-value-form_2",[[0,"key-value-form",{"disabled":[516],"addButtonLabel":[513,"add-button-label"],"keyPlaceholder":[513,"key-placeholder"],"valuePlaceholder":[513,"value-placeholder"],"keyLabel":[513,"key-label"],"valueLabel":[513,"value-label"],"inputs":[32]}],[0,"key-value-table",{"items":[16],"disabled":[516],"buttonLabel":[513,"button-label"],"emptyMessage":[513,"empty-message"]}]]],["dot-error-message",[[4,"dot-error-message"]]],["dot-form-column",[[0,"dot-form-column",{"column":[16],"fieldsToShow":[513,"fields-to-show"]}]]],["dot-binary-file-preview_3",[[0,"dot-binary-file-preview",{"fileName":[1537,"file-name"],"previewUrl":[1537,"preview-url"],"deleteLabel":[513,"delete-label"]}],[0,"dot-binary-text-field",{"value":[1544],"hint":[513],"placeholder":[513],"required":[516],"accept":[513],"disabled":[516],"status":[32]}],[0,"dot-binary-upload-button",{"name":[513],"required":[516],"accept":[513],"disabled":[516],"buttonLabel":[513,"button-label"]}]]],["dot-input-calendar",[[0,"dot-input-calendar",{"value":[1537],"name":[513],"required":[516],"disabled":[516],"min":[513],"max":[513],"step":[513],"type":[513],"status":[32],"reset":[64]}]]],["dot-badge_8",[[1,"dot-card-contentlet",{"item":[16],"thumbnailSize":[1,"thumbnail-size"],"iconSize":[1,"icon-size"],"checked":[1540],"showMenu":[64],"hideMenu":[64]}],[0,"dot-contentlet-thumbnail",{"height":[513],"width":[513],"alt":[513],"iconSize":[513,"icon-size"],"contentlet":[16],"renderImage":[32]}],[1,"dot-badge",{"bgColor":[1,"bg-color"],"color":[1],"size":[1],"bordered":[4]}],[1,"dot-card"],[1,"dot-contentlet-lock-icon",{"locked":[4],"size":[1]}],[1,"dot-context-menu",{"options":[16],"fontSize":[1,"font-size"],"state":[32],"hide":[64],"show":[64]}],[1,"dot-contentlet-icon",{"icon":[513],"size":[513]}],[1,"dot-tooltip",{"content":[1],"for":[1],"delay":[2],"position":[1]}]]]], options);
  });
};

export { defineCustomElements };
