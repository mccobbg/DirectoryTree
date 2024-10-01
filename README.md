# DirectoryTree
A React Native app that recursively displays a concise tree representation of a provided directory and its files.

The directory data is provided as the prop directoryTree in the App component and is rendered as JSX.

Example Output:

./root/
- ./src/
  -- 01.js (123 B)
- ./test/
  -- 01.test.js (50 B)
- package.json (10 B)
  
Directory Tree Object:
  The directory tree object can be found at root.js. Below is the JSON schema for this object:

interface DirectoryTree {
  name: string,
  type: 'dir' | 'file',
  size?: number,
  items?: DirectoryTree[],
};
NOTE: items is an optional array of DirectoryTree objects and for this challenge the depth of the root directory is no more than 3 levels deep.

Example Directory Tree:
{
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
size: 123
}
]
},
{
name: "test",
type: "dir",
items: [
{
name: "01.test.js",
type: "file",
size: 50
}
]
},
{
name: "package.json",
type: "file",
size: 10
}
]
}

My Device
Android
iOS
Web

No errors
Prettier
Editor
Expo

v51.0.0
Devices1
Preview
{ name, items, style }: { name: any; items: any; style: any; }, , , hint

