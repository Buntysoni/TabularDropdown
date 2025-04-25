import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(arrayLikeToArray);

var arrayWithoutHoles = createCommonjsModule(function (module) {
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(iterableToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(unsupportedIterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
function _toConsumableArray(r) {
  return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _toConsumableArray = unwrapExports(toConsumableArray);

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(arrayWithHoles);

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(iterableToArrayLimit);

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(nonIterableRest);

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(r, e) {
  return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _slicedToArray = unwrapExports(slicedToArray);

var styles = {"advancedDropdown":"TabularDropdown-module_advancedDropdown__o013q","dropdownMenu":"TabularDropdown-module_dropdownMenu__zEwy-","dropdownList":"TabularDropdown-module_dropdownList__dlOyt","dropdownRow":"TabularDropdown-module_dropdownRow__wqknt","focused":"TabularDropdown-module_focused__au2XV","dropdownCell":"TabularDropdown-module_dropdownCell__gSgSj","dropdownHeaderCell":"TabularDropdown-module_dropdownHeaderCell__Tm9g0"};

var TabularDropdown = function TabularDropdown(_ref) {
  var _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    onSelect = _ref.onSelect,
    defaultSelected = _ref.defaultSelected,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? "" : _ref$defaultValue,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Search or select an option" : _ref$placeholder,
    _ref$pageSize = _ref.pageSize,
    pageSize = _ref$pageSize === void 0 ? 15 : _ref$pageSize,
    _ref$primaryKey = _ref.primaryKey,
    primaryKey = _ref$primaryKey === void 0 ? "id" : _ref$primaryKey,
    _ref$searchableColumn = _ref.searchableColumns,
    searchableColumns = _ref$searchableColumn === void 0 ? [] : _ref$searchableColumn,
    _ref$hiddenColumns = _ref.hiddenColumns,
    hiddenColumns = _ref$hiddenColumns === void 0 ? [] : _ref$hiddenColumns,
    _ref$columnWidths = _ref.columnWidths,
    columnWidths = _ref$columnWidths === void 0 ? {} : _ref$columnWidths,
    _ref$isDisabled = _ref.isDisabled,
    isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = useState(defaultSelected || null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedItem = _useState4[0],
    setSelectedItem = _useState4[1];
  var _useState5 = useState(defaultValue),
    _useState6 = _slicedToArray(_useState5, 2),
    inputValue = _useState6[0],
    setInputValue = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    filteredData = _useState8[0],
    setFilteredData = _useState8[1];
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    visibleData = _useState10[0],
    setVisibleData = _useState10[1];
  var _useState11 = useState(1),
    _useState12 = _slicedToArray(_useState11, 2),
    page = _useState12[0],
    setPage = _useState12[1];
  var _useState13 = useState(-1),
    _useState14 = _slicedToArray(_useState13, 2),
    focusedIndex = _useState14[0],
    setFocusedIndex = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isLoading = _useState16[0],
    setIsLoading = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    hasUserSelected = _useState18[0],
    setHasUserSelected = _useState18[1]; // Track user selection

  var dropdownRef = useRef(null);
  var listRef = useRef(null);
  var focusedItemRef = useRef(null);
  var inputRef = useRef(null);
  console.log("defaultSelected", defaultSelected);

  // If no columns are specified as searchable, use all columns except hidden ones
  var effectiveSearchableColumns = searchableColumns.length > 0 ? searchableColumns : data[0] ? Object.keys(data[0]).filter(function (col) {
    return col !== primaryKey && !hiddenColumns.includes(col);
  }) : [];

  // Get visible columns (all columns except hidden ones and the primary key if not explicitly included)
  var availableColumns = data[0] ? Object.keys(data[0]).filter(function (col) {
    return !hiddenColumns.includes(col) && (primaryKey !== col || searchableColumns.includes(primaryKey));
  }) : [];

  // Initialize filtered and visible data
  useEffect(function () {
    if (data.length > 0) {
      setFilteredData(data);
      setVisibleData(data.slice(0, pageSize));
    } else {
      setFilteredData([]);
      setVisibleData([]);
    }
  }, [data, pageSize]);

  // Update selected item if defaultSelected changes
  useEffect(function () {
    debugger;
    if (!hasUserSelected) {
      // Only apply defaults if user hasn't made a selection

      if (defaultSelected) {
        setSelectedItem(defaultSelected);
        var displayColumn = effectiveSearchableColumns[0] || 'id';
        setInputValue(defaultSelected[displayColumn] || "");
        console.log("default value", defaultSelected[displayColumn]);
      } else if (defaultValue) {
        setInputValue(defaultValue);
        var matchingItem = data.find(function (item) {
          var _item$displayColumn;
          var displayColumn = effectiveSearchableColumns[0] || primaryKey;
          return ((_item$displayColumn = item[displayColumn]) === null || _item$displayColumn === void 0 ? void 0 : _item$displayColumn.toString()) === defaultValue.toString();
        });
        if (matchingItem) {
          setSelectedItem(matchingItem);
        }
      }
    }
  }, [defaultSelected, defaultValue, data, effectiveSearchableColumns, primaryKey, hasUserSelected]);
  console.log(selectedItem, "selectedItem");
  // Handle clicks outside of dropdown to close it
  useEffect(function () {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      return document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll focused item into view
  useEffect(function () {
    if (focusedItemRef.current && listRef.current) {
      var list = listRef.current;
      var item = focusedItemRef.current;
      var listRect = list.getBoundingClientRect();
      var itemRect = item.getBoundingClientRect();
      if (itemRect.bottom > listRect.bottom) {
        item.scrollIntoView({
          block: 'end',
          behavior: 'smooth'
        });
      } else if (itemRect.top < listRect.top) {
        item.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      }
    }
  }, [focusedIndex]);

  // Filter data based on input value
  var filterData = useCallback(function (value) {
    if (!value.trim()) {
      setFilteredData(data);
      setVisibleData(data.slice(0, pageSize));
      setPage(1);
      return;
    }
    var lowerValue = value.toLowerCase();
    var filtered = data.filter(function (item) {
      // Only search in searchable columns
      return effectiveSearchableColumns.some(function (column) {
        var columnValue = item[column];
        return columnValue && columnValue.toString().toLowerCase().includes(lowerValue);
      });
    });
    setFilteredData(filtered);
    setVisibleData(filtered.slice(0, pageSize));
    setPage(1);
    setFocusedIndex(filtered.length > 0 ? 0 : -1);
  }, [data, pageSize, effectiveSearchableColumns]);

  // Handle keyboard navigation
  var handleKeyDown = function handleKeyDown(e) {
    if (isDisabled) return;
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsOpen(true);
        // Set initial focus when opening with keyboard
        setTimeout(function () {
          if (filteredData.length > 0) {
            setFocusedIndex(0);
          }
        }, 0);
        e.preventDefault();
      }
      return;
    }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(function (prevIndex) {
          var nextIndex = prevIndex < visibleData.length - 1 ? prevIndex + 1 : prevIndex;
          return nextIndex;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(function (prevIndex) {
          return Math.max(0, prevIndex - 1);
        });
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < visibleData.length) {
          debugger;
          handleSelect(visibleData[focusedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
    }
  };

  // Handle scroll for infinite pagination
  var handleScroll = useCallback(function () {
    if (isLoading || filteredData.length <= visibleData.length) return;
    var list = listRef.current;
    if (!list) return;
    var scrollPosition = list.scrollTop + list.clientHeight;
    var scrollThreshold = list.scrollHeight - 100; // Load more when 100px from bottom

    if (scrollPosition > scrollThreshold) {
      setIsLoading(true);

      // Simulate loading delay
      setTimeout(function () {
        var nextPage = page + 1;
        setVisibleData(function (prev) {
          return [].concat(_toConsumableArray(prev), _toConsumableArray(filteredData.slice(prev.length, nextPage * pageSize)));
        });
        setPage(nextPage);
        setIsLoading(false);
      }, 300);
    }
  }, [filteredData, visibleData, page, pageSize, isLoading]);

  // Add scroll event listener
  useEffect(function () {
    var list = listRef.current;
    if (list) {
      list.addEventListener('scroll', handleScroll);
      return function () {
        return list.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);
  var handleSelect = function handleSelect(item) {
    debugger;
    setHasUserSelected(true); // Mark that user has made a selection
    setSelectedItem(item);
    var displayColumn = effectiveSearchableColumns[0] || primaryKey;
    setInputValue(item[displayColumn] || "");
    setIsOpen(false);
    setFocusedIndex(-1);
    if (onSelect && typeof onSelect === 'function') {
      onSelect(item);
    }
  };
  var toggleDropdown = function toggleDropdown() {
    if (isDisabled) return;
    var newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen) {
      // Reset to show all data when opening
      filterData(inputValue);
      // Set focus index to 0 only if there's data
      setTimeout(function () {
        if (filteredData.length > 0) {
          setFocusedIndex(0);
        }
      }, 0);
    } else {
      setFocusedIndex(-1);
    }
  };
  var handleInputChange = function handleInputChange(e) {
    if (isDisabled) return;
    var value = e.target.value;
    setInputValue(value);
    filterData(value);

    // Open dropdown when typing
    if (!isOpen && value) {
      setIsOpen(true);
    }
  };
  var handleInputFocus = function handleInputFocus() {
    if (isDisabled) return;
    if (!isOpen) {
      setIsOpen(true);
      filterData(inputValue);
    }
  };

  // Clear selection
  var handleClear = function handleClear(e) {
    e.stopPropagation();
    setHasUserSelected(true); // Mark that user has cleared the selection
    setSelectedItem(null);
    setInputValue("");
    if (onSelect) {
      onSelect(null);
    }
    inputRef.current.focus();
  };
  // console.log('Styles object:', styles);
  console.log(inputValue, "inputValue");
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles.advancedDropdown, " ").concat(className),
    ref: dropdownRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "text",
    className: "w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ".concat(isDisabled ? 'bg-gray-100 cursor-not-allowed' : ''),
    value: inputValue,
    onChange: handleInputChange,
    onKeyDown: handleKeyDown,
    onFocus: handleInputFocus,
    placeholder: placeholder,
    onClick: function onClick() {
      return !isOpen && toggleDropdown();
    },
    disabled: isDisabled,
    "data-selected": selectedItem ? selectedItem[primaryKey] : ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 top-1/2 transform -translate-y-1/2 flex"
  }, inputValue && !isDisabled && /*#__PURE__*/React.createElement("button", {
    className: "p-2 text-gray-400 hover:text-gray-600",
    onClick: handleClear,
    type: "button",
    "aria-label": "Clear selection"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "p-2 text-gray-500 ".concat(isDisabled ? 'cursor-not-allowed opacity-50' : ''),
    onClick: toggleDropdown,
    type: "button",
    disabled: isDisabled,
    "aria-label": isOpen ? "Close dropdown" : "Open dropdown"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "w-4 h-4 transition-transform ".concat(isOpen ? 'rotate-180' : ''),
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M19 9l-7 7-7-7"
  }))))), isOpen && !isDisabled && /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles.dropdownList, " absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg")
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("div", {
    ref: listRef,
    className: "".concat(styles.dropdownList, " max-h-60 overflow-y-auto"),
    onScroll: handleScroll
  }, availableColumns.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles.dropdownHeaderCell, " sticky top-0 bg-gray-100 border-b flex text-sm font-semibold whitespace-nowrap")
  }, availableColumns.map(function (column) {
    return /*#__PURE__*/React.createElement("div", {
      key: column,
      className: "".concat(styles.dropdownHeaderCell, " px-3 py-2"),
      style: {
        width: columnWidths[column] || 'auto'
      }
    }, column.charAt(0).toUpperCase() + column.slice(1).replace(/([A-Z])/g, ' $1'));
  })), visibleData.length > 0 ? visibleData.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: item[primaryKey] || index,
      ref: index === focusedIndex ? focusedItemRef : null,
      className: "".concat(styles.dropdownRow, " flex border-b last:border-b-0 hover:bg-gray-100 cursor-pointer whitespace-nowrap ").concat(index === focusedIndex ? 'bg-blue-50' : ''),
      onClick: function onClick() {
        return handleSelect(item);
      },
      onMouseEnter: function onMouseEnter() {
        return setFocusedIndex(index);
      }
    }, availableColumns.map(function (column) {
      return /*#__PURE__*/React.createElement("div", {
        key: "".concat(item[primaryKey] || index, "-").concat(column),
        className: "".concat(styles.dropdownCell, " px-3 py-2 truncate ").concat(column === effectiveSearchableColumns[0] ? 'font-medium text-gray-800' : column === effectiveSearchableColumns[1] ? 'text-blue-600' : 'text-gray-600'),
        style: {
          width: columnWidths[column] || 'auto'
        }
      }, renderCellContent(item, column));
    }));
  }) : /*#__PURE__*/React.createElement("div", {
    className: "px-3 py-4 text-center text-gray-500"
  }, "No matching items found"), isLoading && /*#__PURE__*/React.createElement("div", {
    className: "px-3 py-2 text-center text-gray-500"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block animate-spin mr-2"
  }, "\u27F3"), "Loading more items...")))));
  function renderCellContent(item, column) {
    var value = item[column];

    // Handle null or undefined values
    if (value === null || value === undefined) {
      return /*#__PURE__*/React.createElement("span", {
        className: "text-gray-400"
      }, "\u2014");
    }

    // Special rendering for specific column types (can be extended)
    if (column === 'category' || column === 'status' || column === 'type' || column === 'priority') {
      return renderBadge(value, column);
    }

    // Default rendering for other columns
    return value;
  }
  function renderBadge(value, column) {
    var className = 'px-2 py-1 text-xs rounded-full ';

    // Different color schemes based on column type
    if (column === 'status') {
      className += getStatusBadgeColor(value);
    } else if (column === 'category') {
      className += getCategoryBadgeColor(value);
    } else if (column === 'priority') {
      className += getPriorityBadgeColor(value);
    } else {
      // Default badge styling
      className += 'bg-gray-100 text-gray-800';
    }
    return /*#__PURE__*/React.createElement("span", {
      className: className
    }, value);
  }
  function getStatusBadgeColor(status) {
    switch (String(status).toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'deleted':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  }
  function getCategoryBadgeColor(category) {
    switch (String(category).toLowerCase()) {
      case 'premium':
        return 'bg-blue-100 text-blue-800';
      case 'standard':
        return 'bg-green-100 text-green-800';
      case 'basic':
        return 'bg-gray-100 text-gray-800';
      case 'featured':
        return 'bg-purple-100 text-purple-800';
      case 'archived':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
  function getPriorityBadgeColor(priority) {
    switch (String(priority).toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
};
TabularDropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func,
  defaultSelected: PropTypes.object,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  pageSize: PropTypes.number,
  primaryKey: PropTypes.string,
  searchableColumns: PropTypes.arrayOf(PropTypes.string),
  hiddenColumns: PropTypes.arrayOf(PropTypes.string),
  columnWidths: PropTypes.object,
  isDisabled: PropTypes.bool
};

export { TabularDropdown as default };
//# sourceMappingURL=index.es.js.map
