function PersonForm({handleSubmit, newName, setNewName, newPhoneNumber, setNewPhoneNumber}) {
  return (
    <form onSubmit={handleSubmit}>
    <div>
      name:
      <input 
        onChange={(e) => setNewName(e.target.value)} 
        value={newName} />
     
    </div>
    <div>
      number:
      <input
        onChange={(e) => setNewPhoneNumber(e.target.value)}
        value={newPhoneNumber} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

export default PersonForm