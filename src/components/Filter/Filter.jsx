import React, { useState, useEffect, useRef } from "react";
import { FilterWrapper, SelectButton, DropDownList, DropDownItem } from "./styled";

function Filter({ selected = 'Выберите категорию', setSelected, options }) {    
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSelect = (opt) => {
        setSelected(opt);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <FilterWrapper ref={dropdownRef}>
            <SelectButton
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                {selected || 'Выберите категорию'}
            </SelectButton>
            {isOpen && (
                <DropDownList role="listbox">
                    {options.map((option) => (
                        <DropDownItem
                            key={option}
                            onClick={() => handleSelect(option)}
                            role="option"
                            aria-selected={selected === option}
                        >
                            {option}
                        </DropDownItem>
                    ))}
                </DropDownList>
            )}
        </FilterWrapper>
    );
}

export default Filter;
