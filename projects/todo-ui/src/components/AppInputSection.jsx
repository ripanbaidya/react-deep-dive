function AppInputSection() {
    return (
      <div class="container text-center">
        <div class="row custom-row">
          <div class="col-6">
            <input type="text" placeholder="Enter a task" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success custome-button">
              Add
            </button>
          </div>
        </div>
      </div>
    );
}

export default AppInputSection;