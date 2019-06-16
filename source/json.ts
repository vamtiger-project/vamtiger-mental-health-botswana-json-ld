import {
    Resource
} from './types';

const { svgCaption } = Resource;
const producer = [
    'https://vamtiger-project.github.io/vamtiger-organization-infers-group-json-ld/build/vamtiger-organization-infers-group-json-ld.js',
    'https://vamtiger-project.github.io/vamtiger-person-abraham-mamela-json-ld/build/vamtiger-person-abraham-mamela-json-ld.js'
];
const creator = [
    ...producer
];
const funder = [
    'https://vamtiger-project.github.io/vamtiger-organization-welcome-json-ld/build/vamtiger-organization-welcome-json-ld.js'
];

export default {
    svgCaption,
    jsonLd: [
        {
            index: 0,
            fields: {
                producer,
                creator,
                funder
            }
        }
    ]
};
