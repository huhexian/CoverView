import { createApi } from 'unsplash-js';

const key= process.env.REACT_APP_API_ACCESS_KEY
const unsplash = createApi({
    accessKey: B0VMMOSb8AqDIG09iwE4ZqnSXX-JX0jt2cdWP9AmBQ4
});

export default unsplash;
