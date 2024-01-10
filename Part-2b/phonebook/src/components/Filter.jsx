

function Filter({ query, setQuery}) {
  return (
    <div>
    filter shown with 
    <input type="search"
    value={query}
    onChange={(e) => setQuery(e.target.value)}  />
  </div>
  )
}

export default Filter