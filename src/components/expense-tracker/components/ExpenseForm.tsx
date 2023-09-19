const ExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          description
        </label>
        <input id="description" type="text" className="form-control" />
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            amount
          </label>
          <input id="amount" type="number" className="form-control" />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select">
          <option value=""></option>
        </select>
      </div>
    </form>
  );
};

export default ExpenseForm;
