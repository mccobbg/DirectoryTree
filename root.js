export default {
  name: "root",
  type: "dir",
  items: [
    {
      name: "src",
      type: "dir",
      items: [
        {
          name: "01.js",
          type: "file",
          size: 123,
        },
        {
          name: "02.js",
          type: "file",
          size: 456,
        },
      ],
    },
    {
      name: "test",
      type: "dir",
      items: [
        {
          name: "01.test.js",
          type: "file",
          size: 50,
        },
      ],
    },
    {
      name: "package.json",
      type: "file",
      size: 10,
    },
  ],
};
