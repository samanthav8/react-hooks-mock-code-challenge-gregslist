import React, { useState, useEffect }  from "react";
// import ListingCard from "./ListingCard";
import ListingCard from "./ListingCard"

function ListingsContainer({ listArr, setListArr, searchTerm}) {

  const filteredListings = listArr.filter((listing) => {
    return listing.description.toLowerCase().includes(searchTerm.toLowerCase())}
)

  function handleDeleteListing(deletedListing) {
    const updatedListings = listArr.filter((listing) => listing.id !== deletedListing.id);
    setListArr(updatedListings)
  }

  

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listing) => {
          return <ListingCard
            key = {listing.id}
            listing = {listing}
            onDeleteListing = {handleDeleteListing}
            />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
