import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './TabularDropdown.module.css';
// import './index.css';

const TabularDropdown = ({
    data = [],
    onSelect,
    defaultSelected,
    defaultValue = "",
    className = "",
    placeholder = "Search or select an option",
    pageSize = 15,
    primaryKey = "id",
    searchableColumns = [],
    hiddenColumns = [],
    columnWidths = {},
    isDisabled = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(defaultSelected || null);
    const [inputValue, setInputValue] = useState(defaultValue);
    const [filteredData, setFilteredData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [page, setPage] = useState(1);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasUserSelected, setHasUserSelected] = useState(false); // Track user selection

    const dropdownRef = useRef(null);
    const listRef = useRef(null);
    const focusedItemRef = useRef(null);
    const inputRef = useRef(null);


    console.log("defaultSelected", defaultSelected)

    // If no columns are specified as searchable, use all columns except hidden ones
    const effectiveSearchableColumns = searchableColumns.length > 0
        ? searchableColumns
        : (data[0] ? Object.keys(data[0]).filter(col => col !== primaryKey && !hiddenColumns.includes(col)) : []);

    // Get visible columns (all columns except hidden ones and the primary key if not explicitly included)
    const availableColumns = data[0]
        ? Object.keys(data[0]).filter(col => !hiddenColumns.includes(col) && (primaryKey !== col || searchableColumns.includes(primaryKey)))
        : [];

    // Initialize filtered and visible data
    useEffect(() => {
        if (data.length > 0) {
            setFilteredData(data);
            setVisibleData(data.slice(0, pageSize));
        } else {
            setFilteredData([]);
            setVisibleData([]);
        }
    }, [data, pageSize]);

    // Update selected item if defaultSelected changes
    useEffect(() => {
        debugger;
        if (!hasUserSelected) { // Only apply defaults if user hasn't made a selection

            if (defaultSelected) {
                setSelectedItem(defaultSelected);

                const displayColumn = effectiveSearchableColumns[0] || 'id';
                setInputValue(defaultSelected[displayColumn] || "");
                console.log("default value", defaultSelected[displayColumn])
            } else if (defaultValue) {
                setInputValue(defaultValue);
                const matchingItem = data.find(item => {
                    const displayColumn = effectiveSearchableColumns[0] || primaryKey;
                    return item[displayColumn]?.toString() === defaultValue.toString();
                });
                if (matchingItem) {
                    setSelectedItem(matchingItem);
                }
            }
        }
    }, [defaultSelected, defaultValue, data, effectiveSearchableColumns, primaryKey, hasUserSelected]);

    console.log(selectedItem, "selectedItem")
    // Handle clicks outside of dropdown to close it
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setFocusedIndex(-1);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Scroll focused item into view
    useEffect(() => {
        if (focusedItemRef.current && listRef.current) {
            const list = listRef.current;
            const item = focusedItemRef.current;

            const listRect = list.getBoundingClientRect();
            const itemRect = item.getBoundingClientRect();

            if (itemRect.bottom > listRect.bottom) {
                item.scrollIntoView({ block: 'end', behavior: 'smooth' });
            } else if (itemRect.top < listRect.top) {
                item.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }
        }
    }, [focusedIndex]);

    // Filter data based on input value
    const filterData = useCallback((value) => {
        if (!value.trim()) {
            setFilteredData(data);
            setVisibleData(data.slice(0, pageSize));
            setPage(1);
            return;
        }

        const lowerValue = value.toLowerCase();

        const filtered = data.filter(item => {
            // Only search in searchable columns
            return effectiveSearchableColumns.some(column => {
                const columnValue = item[column];
                return columnValue &&
                    columnValue.toString().toLowerCase().includes(lowerValue);
            });
        });

        setFilteredData(filtered);
        setVisibleData(filtered.slice(0, pageSize));
        setPage(1);
        setFocusedIndex(filtered.length > 0 ? 0 : -1);
    }, [data, pageSize, effectiveSearchableColumns]);

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (isDisabled) return;

        if (!isOpen) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                setIsOpen(true);
                // Set initial focus when opening with keyboard
                setTimeout(() => {
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
                setFocusedIndex(prevIndex => {
                    const nextIndex = prevIndex < visibleData.length - 1 ? prevIndex + 1 : prevIndex;
                    return nextIndex;
                });
                break;
            case 'ArrowUp':
                e.preventDefault();
                setFocusedIndex(prevIndex => Math.max(0, prevIndex - 1));
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
            default:
                break;
        }
    };

    // Handle scroll for infinite pagination
    const handleScroll = useCallback(() => {
        if (isLoading || filteredData.length <= visibleData.length) return;

        const list = listRef.current;
        if (!list) return;

        const scrollPosition = list.scrollTop + list.clientHeight;
        const scrollThreshold = list.scrollHeight - 100; // Load more when 100px from bottom

        if (scrollPosition > scrollThreshold) {
            setIsLoading(true);

            // Simulate loading delay
            setTimeout(() => {
                const nextPage = page + 1;
                setVisibleData(prev => [
                    ...prev,
                    ...filteredData.slice(prev.length, nextPage * pageSize)
                ]);
                setPage(nextPage);
                setIsLoading(false);
            }, 300);
        }
    }, [filteredData, visibleData, page, pageSize, isLoading]);

    // Add scroll event listener
    useEffect(() => {
        const list = listRef.current;
        if (list) {
            list.addEventListener('scroll', handleScroll);
            return () => list.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    const handleSelect = (item) => {
        debugger;
        setHasUserSelected(true); // Mark that user has made a selection
        setSelectedItem(item);
        const displayColumn = effectiveSearchableColumns[0] || primaryKey;
        setInputValue(item[displayColumn] || "");
        setIsOpen(false);
        setFocusedIndex(-1);

        if (onSelect && typeof onSelect === 'function') {
            onSelect(item);
        }
    };

    const toggleDropdown = () => {
        if (isDisabled) return;

        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);

        if (newIsOpen) {
            // Reset to show all data when opening
            filterData(inputValue);
            // Set focus index to 0 only if there's data
            setTimeout(() => {
                if (filteredData.length > 0) {
                    setFocusedIndex(0);
                }
            }, 0);
        } else {
            setFocusedIndex(-1);
        }
    };

    const handleInputChange = (e) => {
        if (isDisabled) return;

        const value = e.target.value;
        setInputValue(value);
        filterData(value);

        // Open dropdown when typing
        if (!isOpen && value) {
            setIsOpen(true);
        }
    };

    const handleInputFocus = () => {
        if (isDisabled) return;

        if (!isOpen) {
            setIsOpen(true);
            filterData(inputValue);
        }
    };

    // Clear selection
    const handleClear = (e) => {
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
    console.log(inputValue, "inputValue")
    return (
        <div className={`${styles.advancedDropdown} ${className}`} ref={dropdownRef}>
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    className={`w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ${isDisabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={handleInputFocus}
                    placeholder={placeholder}
                    onClick={() => !isOpen && toggleDropdown()}
                    disabled={isDisabled}
                    data-selected={selectedItem ? selectedItem[primaryKey] : ""}
                />

                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex">
                    {inputValue && !isDisabled && (
                        <button
                            className="p-2 text-gray-400 hover:text-gray-600"
                            onClick={handleClear}
                            type="button"
                            aria-label="Clear selection"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}

                    <button
                        className={`p-2 text-gray-500 ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                        onClick={toggleDropdown}
                        type="button"
                        disabled={isDisabled}
                        aria-label={isOpen ? "Close dropdown" : "Open dropdown"}
                    >
                        <svg
                            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && !isDisabled && (
                <div className={`${styles.dropdownList} absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg`}>
                    <div className="overflow-x-auto">
                        <div
                            ref={listRef}
                            className={`${styles.dropdownList} max-h-60 overflow-y-auto`}
                            onScroll={handleScroll}
                        >
                            {availableColumns.length > 0 && (
                                <div className={`${styles.dropdownHeaderCell} sticky top-0 bg-gray-100 border-b flex text-sm font-semibold whitespace-nowrap`}>
                                    {availableColumns.map(column => (
                                        <div
                                            key={column}
                                            className={`${styles.dropdownHeaderCell} px-3 py-2`}
                                            style={{ width: columnWidths[column] || 'auto' }}
                                        >
                                            {column.charAt(0).toUpperCase() + column.slice(1).replace(/([A-Z])/g, ' $1')}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {visibleData.length > 0 ? (
                                visibleData.map((item, index) => (
                                    <div
                                        key={item[primaryKey] || index}
                                        ref={index === focusedIndex ? focusedItemRef : null}
                                        className={`${styles.dropdownRow} flex border-b last:border-b-0 hover:bg-gray-100 cursor-pointer whitespace-nowrap ${index === focusedIndex ? 'bg-blue-50' : ''
                                            }`}
                                        onClick={() => handleSelect(item)}
                                        onMouseEnter={() => setFocusedIndex(index)}
                                    >
                                        {availableColumns.map(column => (
                                            <div
                                                key={`${item[primaryKey] || index}-${column}`}
                                                className={`${styles.dropdownCell} px-3 py-2 truncate ${column === effectiveSearchableColumns[0] ? 'font-medium text-gray-800' :
                                                    column === effectiveSearchableColumns[1] ? 'text-blue-600' :
                                                        'text-gray-600'
                                                    }`}
                                                style={{ width: columnWidths[column] || 'auto' }}
                                            >
                                                {renderCellContent(item, column)}
                                            </div>
                                        ))}
                                    </div>
                                ))
                            ) : (
                                <div className="px-3 py-4 text-center text-gray-500">No matching items found</div>
                            )}

                            {isLoading && (
                                <div className="px-3 py-2 text-center text-gray-500">
                                    <div className="inline-block animate-spin mr-2">⟳</div>
                                    Loading more items...
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    function renderCellContent(item, column) {
        const value = item[column];

        // Handle null or undefined values
        if (value === null || value === undefined) {
            return <span className="text-gray-400">—</span>;
        }

        // Special rendering for specific column types (can be extended)
        if (column === 'category' || column === 'status' || column === 'type' || column === 'priority') {
            return renderBadge(value, column);
        }

        // Default rendering for other columns
        return value;
    }

    function renderBadge(value, column) {
        let className = 'px-2 py-1 text-xs rounded-full ';

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

        return <span className={className}>{value}</span>;
    }

    function getStatusBadgeColor(status) {
        switch (String(status).toLowerCase()) {
            case 'active': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'inactive': return 'bg-gray-100 text-gray-800';
            case 'deleted': return 'bg-red-100 text-red-800';
            default: return 'bg-blue-100 text-blue-800';
        }
    }

    function getCategoryBadgeColor(category) {
        switch (String(category).toLowerCase()) {
            case 'premium': return 'bg-blue-100 text-blue-800';
            case 'standard': return 'bg-green-100 text-green-800';
            case 'basic': return 'bg-gray-100 text-gray-800';
            case 'featured': return 'bg-purple-100 text-purple-800';
            case 'archived': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    }

    function getPriorityBadgeColor(priority) {
        switch (String(priority).toLowerCase()) {
            case 'high': return 'bg-red-100 text-red-800';
            case 'medium': return 'bg-yellow-100 text-yellow-800';
            case 'low': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
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

export default TabularDropdown;