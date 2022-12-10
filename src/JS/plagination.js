export default class plagination {
  currentPage = 1;
  nextPage() {
    this.currentPage += 1;
  }
  prevPage() {
    this.currentPage -= 1;
  }
}
