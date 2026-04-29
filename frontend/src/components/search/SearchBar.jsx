export default function SearchBar() {
    return (
        <div className="mb-3 mt-2">
            <form id="zoekForm">
                <input type="text" id="zoekveld" name="zoektekst" placeholder="Typ hier je zoekterm..."
                       className="form-control" autoFocus/>
            </form>
        </div>
    );
}