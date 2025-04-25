# TabularDropdown

A fully customizable React dropdown component that displays data in a scrollable, searchable table layout. Supports keyboard navigation, infinite scroll pagination, and dynamic data + styling.

[![npm version](https://badge.fury.io/js/tabulardropdown.svg)](https://badge.fury.io/js/tabulardropdown)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/tabulardropdown.svg)](https://www.npmjs.com/package/tabulardropdown)

## Features

- 📊 Tabular data display
- 🔍 Search functionality across columns
- ⌨️ Keyboard navigation
- ♾️ Infinite scroll pagination
- 🎨 Customizable styling
- ⚡ Dynamic column widths
- 🎯 Customizable searchable columns
- 🏷️ Built-in badge styling for status/category fields
- ♿ Accessibility features

## Installation

```bash
npm install tabulardropdown
```

## Basic Usage

```jsx
import TabularDropdown from "tabulardropdown";

const MyComponent = () => {
  const data = [
    { id: 1, name: "John Doe", role: "Developer", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Designer", status: "Inactive" },
    // ... more data
  ];

  const handleSelect = (selectedItem) => {
    console.log("Selected:", selectedItem);
  };

  return (
    <TabularDropdown
      data={data}
      onSelect={handleSelect}
      placeholder="Select a user"
    />
  );
};
```

## Props

| Prop              | Type     | Default                      | Description                                 |
| ----------------- | -------- | ---------------------------- | ------------------------------------------- |
| data              | Array    | []                           | Array of objects to display in the dropdown |
| onSelect          | Function | -                            | Callback function when an item is selected  |
| defaultSelected   | Object   | null                         | Pre-selected item                           |
| defaultValue      | String   | ""                           | Default input value                         |
| className         | String   | ""                           | Additional CSS classes                      |
| placeholder       | String   | "Search or select an option" | Input placeholder text                      |
| pageSize          | Number   | 15                           | Number of items to load per page            |
| primaryKey        | String   | "id"                         | Unique identifier field in data             |
| searchableColumns | Array    | []                           | Array of column names to enable search      |
| hiddenColumns     | Array    | []                           | Array of column names to hide               |
| columnWidths      | Object   | {}                           | Custom widths for columns                   |
| isDisabled        | Boolean  | false                        | Disable the dropdown                        |

## Advanced Examples

### Custom Column Configuration

```jsx
const Example = () => {
  const data = [
    { id: 1, name: "John", role: "Dev", status: "Active", priority: "High" },
    { id: 2, name: "Jane", role: "PM", status: "Inactive", priority: "Medium" },
  ];

  return (
    <TabularDropdown
      data={data}
      searchableColumns={["name", "role"]}
      hiddenColumns={["id"]}
      columnWidths={{
        name: "200px",
        role: "150px",
        status: "100px",
      }}
    />
  );
};
```

### With Default Selection

```jsx
const Example = () => {
  const data = [
    { id: 1, name: "John", role: "Developer" },
    { id: 2, name: "Jane", role: "Designer" },
  ];

  return (
    <TabularDropdown
      data={data}
      defaultSelected={data[0]}
      primaryKey="id"
      searchableColumns={["name"]}
    />
  );
};
```

### With Custom Styling

```jsx
const Example = () => {
  return (
    <TabularDropdown
      data={data}
      className="custom-dropdown"
      placeholder="Select employee"
      pageSize={10}
    />
  );
};
```

## CSS Customization

The component uses CSS modules. You can override the default styles by targeting these classes:

- `.advancedDropdown`: Main container
- `.dropdownList`: Scrollable list container
- `.dropdownRow`: Individual row
- `.dropdownCell`: Table cell
- `.dropdownHeaderCell`: Header cell
- `.focused`: Focused row state

## Keyboard Navigation

- `↑` / `↓`: Navigate through items
- `Enter`: Select focused item
- `Esc`: Close dropdown
- `Tab`: Move focus

## License

MIT © Unlein® Private Limited
