const dataFields = [
    {
        columns: [
            {
                fields: [
                    {
                        clazz: 'com.dotcms.contenttype.model.field.ImmutableTextField',
                        fieldType: 'Text',
                        dataType: 'TEXT',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: 'c44adf8c-e637-46df-b16f-f235474c0629',
                        modDate: 1560465454000,
                        name: 'Name',
                        relationType: null,
                        required: true,
                        variable: 'textfield1',
                        sortOrder: 8,
                        values: null,
                        regexCheck: null,
                        hint: 'Please enter your name',
                        defaultValue: null,
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'text1',
                        iDate: 1560465454000
                    }
                ]
            },
            {
                fields: [
                    {
                        clazz: 'com.dotcms.contenttype.model.field.ImmutableTextField',
                        fieldType: 'Textarea',
                        dataType: 'TEXT',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: '0d304676-c98b-4c69-8b98-0271313613c9',
                        modDate: 1560465460000,
                        name: 'Address',
                        relationType: null,
                        required: false,
                        variable: 'textArea',
                        sortOrder: 10,
                        values: null,
                        regexCheck: null,
                        hint: null,
                        defaultValue: null,
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'text2',
                        iDate: 1560465460000
                    }
                ]
            }
        ]
    },
    {
        columns: [
            {
                fields: [
                    {
                        clazz:
                            'com.dotcms.contenttype.model.field.ImmutableTextAreaField',
                        fieldType: 'Checkbox',
                        dataType: 'LONG_TEXT',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: '2ad8b5ef-35e8-4bc3-94da-08403bc8907a',
                        modDate: 1560465473000,
                        name: 'Favorite food',
                        relationType: null,
                        required: false,
                        variable: 'checkbox1',
                        sortOrder: 13,
                        values: 'Pizza|pizza,Burguer|burguer,Sushi|sushi',
                        regexCheck: null,
                        hint: null,
                        defaultValue: null,
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'text_area1',
                        iDate: 1560465473000
                    }
                ]
            },
            {
                fields: [
                    {
                        clazz:
                            'com.dotcms.contenttype.model.field.ImmutableTextAreaField',
                        fieldType: 'Multi-Select',
                        dataType: 'LONG_TEXT',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: '2ad8b5ef-35e8-4bc3-94da-08403bc8907a',
                        modDate: 1560465473000,
                        name: 'City',
                        relationType: null,
                        required: true,
                        variable: 'multiSelect',
                        sortOrder: 13,
                        values: 'San Jose|sjo,Miami|mia,Madrid|mad',
                        regexCheck: null,
                        hint: null,
                        defaultValue: null,
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'text_area1',
                        iDate: 1560465473000
                    }
                ]
            }
        ]
    },
    {
        columns: [
            {
                fields: [
                    {
                        clazz: 'com.dotcms.contenttype.model.field.ImmutableRadioField',
                        dataType: 'TEXT',
                        fieldType: 'Key-Value',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: '865bdc9a-5445-4ab0-b0e9-34c4debdffc0',
                        modDate: 1560465555000,
                        name: 'Add key and value',
                        relationType: null,
                        required: false,
                        variable: 'keyValue',
                        sortOrder: 16,
                        values: 'some|value',
                        regexCheck: null,
                        hint: null,
                        defaultValue: null,
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'text3',
                        iDate: 1560465555000
                    }
                ]
            }
        ]
    },
    {
        columns: [
            {
                fields: [
                    {
                        clazz:
                            'com.dotcms.contenttype.model.field.ImmutableSelectField',
                        fieldType: 'Select',
                        dataType: 'TEXT',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: 'fe5f02e3-af12-4767-ab73-3c687c536126',
                        modDate: 1560465659000,
                        name: 'Select a brand',
                        relationType: null,
                        required: false,
                        variable: 'select1',
                        sortOrder: 23,
                        values: 'Apple|apple,Google|google,Amazon|amazon',
                        regexCheck: null,
                        hint: null,
                        defaultValue: null,
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'text5',
                        iDate: 1560465659000
                    }
                ]
            },
            {
                fields: [
                    {
                        clazz: 'com.dotcms.contenttype.model.field.ImmutableTextField',
                        fieldType: 'Radio',
                        dataType: 'TEXT',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: 'adde0904-36cf-4573-b798-8b63105fc726',
                        modDate: 1560465665000,
                        name: 'What time is better?',
                        relationType: null,
                        required: false,
                        variable: 'radio1',
                        sortOrder: 25,
                        values: 'Morning|morning,Afternoon|afternoon,Night|night',
                        regexCheck: null,
                        hint: 'Please select an item',
                        defaultValue: null,
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'text6',
                        iDate: 1560465665000
                    }
                ]
            },
            {
                fields: [
                    {
                        clazz: 'com.dotcms.contenttype.model.field.ImmutableTextField',
                        fieldType: 'Date',
                        dataType: 'TEXT',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: '3691b9f1-fc06-489a-971b-8f4697153f3b',
                        modDate: 1560465670000,
                        name: 'Pick a date',
                        relationType: null,
                        required: false,
                        variable: 'date1',
                        sortOrder: 27,
                        values: null,
                        regexCheck: null,
                        hint: 'Date should be valid',
                        defaultValue: null,
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'text7',
                        iDate: 1560465670000
                    }
                ]
            },
            {
                fields: [
                    {
                        clazz: 'com.dotcms.contenttype.model.field.ImmutableTextField',
                        fieldType: 'Time',
                        dataType: 'INTEGER',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: 'fbe4e9e3-54ab-4369-8a40-42d6d08a25cc',
                        modDate: 1560465678000,
                        name: 'Pick a time',
                        relationType: null,
                        required: false,
                        variable: 'time',
                        sortOrder: 29,
                        values: null,
                        regexCheck: null,
                        hint: null,
                        defaultValue: null,
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'integer1',
                        iDate: 1560465678000
                    }
                ]
            }
        ]
    },
    {
        columns: [
            {
                fields: [
                    {
                        clazz: 'com.dotcms.contenttype.model.field.ImmutableRadioField',
                        dataType: 'SYSTEM',
                        fieldType: 'Date-and-Time',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: '865bdc9a-5445-4ab0-b0e9-34c4debdffc0',
                        modDate: 1560465555000,
                        name: 'Pick a date and a time',
                        relationType: null,
                        required: false,
                        variable: 'dateTime',
                        sortOrder: 16,
                        values: null,
                        regexCheck: null,
                        hint: null,
                        defaultValue: '2019-01-20 11:10:00',
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'text3',
                        iDate: 1560465555000
                    }
                ]
            }
        ]
    },
    {
        columns: [
            {
                fields: [
                    {
                        clazz: 'com.dotcms.contenttype.model.field.ImmutableRadioField',
                        dataType: 'SYSTEM',
                        fieldType: 'Date-Range',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: '865bdc9a-5445-4ab0-b0e9-34c4debdffc0',
                        modDate: 1560465555000,
                        name: 'Select a date range',
                        relationType: null,
                        required: false,
                        variable: 'dateRange1',
                        sortOrder: 16,
                        values: null,
                        regexCheck: null,
                        hint: null,
                        defaultValue: '2019-11-25,2019-11-27',
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'text3',
                        iDate: 1560465555000
                    }
                ]
            }
        ]
    },
    {
        columns: [
            {
                fields: [
                    {
                        clazz: 'com.dotcms.contenttype.model.field.ImmutableRadioField',
                        dataType: 'SYSTEM',
                        fieldType: 'Tag',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: '865bdc9a-5445-4ab0-b0e9-34c4debdffc0',
                        modDate: 1560465555000,
                        name: 'Add Tags',
                        relationType: null,
                        required: false,
                        variable: 'tags',
                        sortOrder: 16,
                        values: null,
                        regexCheck: null,
                        hint: null,
                        defaultValue: '',
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'text3',
                        iDate: 1560465555000
                    }
                ]
            }
        ]
    },
    {
        columns: [
            {
                fields: [
                    {
                        clazz: 'com.dotcms.contenttype.model.field.test',
                        dataType: 'SYSTEM',
                        fieldType: 'Binary',
                        searchable: false,
                        unique: false,
                        indexed: false,
                        listed: false,
                        readOnly: false,
                        owner: null,
                        id: '865bdc9a-5445-4ab0-b0e9-34c4debdffc0',
                        modDate: 1560465555000,
                        name: 'Upload File',
                        relationType: null,
                        required: true,
                        variable: 'binary',
                        sortOrder: 16,
                        values: null,
                        regexCheck: null,
                        hint: null,
                        defaultValue: '',
                        fixed: false,
                        contentTypeId: 'f1f50c77-273b-4541-9a35-b02b32e656da',
                        dbColumn: 'text3',
                        iDate: 1560465555000
                    }
                ]
            }
        ]
    }
];


export default {
    title: "Custom Fields/Form"
};

export const Normal = () => {
    const form = document.createElement('dot-form');
    form.layout = dataFields;
    return form;
};
