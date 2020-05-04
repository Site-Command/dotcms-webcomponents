# dot-drop-zone



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                    | Description                                                          | Type                                                                                                    | Default                                                                                                                                                                                    |
| ------------------------ | ---------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createAssetsText`       | `create-assets-text`         | Legend to be shown when creating dotAssets                           | `string`                                                                                                | `'Creating DotAssets'`                                                                                                                                                                     |
| `dialogLabels`           | --                           | Labels to be shown in error dialog                                   | `{ closeButton: string; uploadErrorHeader: string; dotAssetErrorHeader: string; errorHeader: string; }` | `{         closeButton: 'Close',         uploadErrorHeader: 'Uploading File Results',         dotAssetErrorHeader: '$0 of $1 uploaded file(s) failed',         errorHeader: 'Error'     }` |
| `dotAssetsURL`           | `dot-assets-u-r-l`           | URL to endpoint to create dotAssets                                  | `string`                                                                                                | `'/api/v1/workflow/actions/default/fire/NEW'`                                                                                                                                              |
| `dropFilesText`          | `drop-files-text`            | Legend to be shown when dropping files                               | `string`                                                                                                | `'Drop Files to Upload'`                                                                                                                                                                   |
| `folder`                 | `folder`                     | Specify the the folder where the dotAssets will be placed            | `string`                                                                                                | `''`                                                                                                                                                                                       |
| `folderUploadErrorLabel` | `folder-upload-error-label`  | Error to be shown when try to upload a bigger size file than allowed | `string`                                                                                                | `'You can’t drop folders. Try again.'`                                                                                                                                                     |
| `maxFileSize`            | `max-file-size`              | Specify the max size of each file to be uploaded                     | `string`                                                                                                | `''`                                                                                                                                                                                       |
| `multiMaxSizeErrorLabel` | `multi-max-size-error-label` | Error to be shown when try to upload a bigger size file than allowed | `string`                                                                                                | `'One or more of the files exceeds the maximum file size'`                                                                                                                                 |
| `singeMaxSizeErrorLabel` | `singe-max-size-error-label` | Error to be shown when try to upload a bigger size file than allowed | `string`                                                                                                | `'The file exceeds the maximum file size'`                                                                                                                                                 |
| `uploadFileText`         | `upload-file-text`           | Legend to be shown when uploading files                              | `string`                                                                                                | `'Uploading Files...'`                                                                                                                                                                     |


## Events

| Event            | Description                                               | Type                                                |
| ---------------- | --------------------------------------------------------- | --------------------------------------------------- |
| `uploadComplete` | Emit an array of response with the DotAssets just created | `CustomEvent<DotHttpErrorResponse[] \| Response[]>` |


## Dependencies

### Depends on

- [dot-progress-bar](../../elements/dot-progress-bar)

### Graph
```mermaid
graph TD;
  dot-asset-drop-zone --> dot-progress-bar
  style dot-asset-drop-zone fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*