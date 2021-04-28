import React from 'react'

const SearchParams = () => {
    const location = "Seatle WA";
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} />
                </label>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default SearchParams;