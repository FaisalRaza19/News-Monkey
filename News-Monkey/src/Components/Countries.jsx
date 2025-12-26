import React from 'react';

const countryList = [
    { code: "ar", name: "Argentina" },
    { code: "gr", name: "Greece" },
    { code: "nl", name: "NetherLand" },
    { code: "za", name: "South Africa" },
    { code: "au", name: "Australia" },
    { code: "hk", name: "Hong Kong" },
    { code: "nz", name: "New Zealand" },
    { code: "kr", name: "South Korea" },
    { code: "at", name: "Austria" },
    { code: "hu", name: "Hungary" },
    { code: "ng", name: "Nigeria" },
    { code: "se", name: "Sweden" },
    { code: "be", name: "Belgium" },
    { code: "in", name: "India" },
    { code: "no", name: "Norway" },
    { code: "ch", name: "Switzerland" },
    { code: "br", name: "Brazil" },
    { code: "id", name: "Indonesia" },
    { code: "ph", name: "Philippines" },
    { code: "tw", name: "Taiwan" },
    { code: "bg", name: "Bulgaria" },
    { code: "ie", name: "Ireland" },
    { code: "pl", name: "Poland" },
    { code: "th", name: "Thailand" },
    { code: "ca", name: "Canada" },
    { code: "pt", name: "Portugal" },
    { code: "tr", name: "Turkey" },
    { code: "cn", name: "China" },
    { code: "it", name: "Italy" },
    { code: "ro", name: "Romania" },
    { code: "ae", name: "UAE" },
    { code: "co", name: "Colombia" },
    { code: "jp", name: "Japan" },
    { code: "ru", name: "Russia" },
    { code: "ua", name: "Ukraine" },
    { code: "cu", name: "Cuba" },
    { code: "lv", name: "Latvia" },
    { code: "sa", name: "Saudi Arabia" },
    { code: "gb", name: "United Kingdom" },
    { code: "cz", name: "Czech Republic" },
    { code: "lt", name: "Lithuania" },
    { code: "rs", name: "Serbia" },
    { code: "us", name: "United States" },
    { code: "eg", name: "Egypt" },
    { code: "my", name: "Malaysia" },
    { code: "sg", name: "Singapore" },
    { code: "ve", name: "Venezuela" },
    { code: "fr", name: "France" },
    { code: "mx", name: "Mexico" },
    { code: "sk", name: "Slovakia" },
    { code: "de", name: "Germany" },
    { code: "ma", name: "Morocco" },
    { code: "si", name: "Slovenia" },
];

const Countries = ({ onCountryChange }) => {
    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Select Country
            </button>
            <ul
                className="dropdown-menu"
                style={{ overflowY: "scroll", maxHeight: "70vh" }}
            >
                {countryList.map((country) => (
                    <li
                        key={country.code}
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => onCountryChange(country.code)}
                    >
                        {country.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Countries;

